const {app, server} = require('../index')
const supertest = require('supertest')
const { parse } = require('pg-protocol')
const api = supertest(app)

describe('Register user', () => {
    
    beforeEach(async()=> await api.put('/clean-users-table'))
    
    afterAll(async()=>{
        await api.put('/clean-users-table')         
        server.close()
    })
    
    beforeAll(async()=> await api.put('/clean-users-table'))
    
    test('Succesfull case' , async() => {
        const response = await api.post('/register').send({'username': 'new_user', 'email': 'new_user@email.com', 'password': 'superSecretPassword'}).expect(201)
        expect(response.body.msg).toBe('Registro realizado con exito')
    })
    test('Duplicates username', async()=>{
        const username = 'new_user_1'
        await api.post('/register').send({'username': username, 'email': 'new_user_1@email.com', 'password': 'superSecretPassword'}).expect(201)
        const response = await api.post('/register').send({'username': username, 'email': 'new_user_12@email.com', 'password': 'superSecretPassword'}).expect(500)
        expect(response.body.msg).toBe('Error on query')
        expect(response.body.error.code).toBe("23505")
        expect(response.body.error.detail).toBe("Ya existe la llave (username)=("+username+").")
    })
    test('Duplicates emails', async()=>{
        const email = 'new_user_1@email.com'
        await api.post('/register').send({'username': 'new_user_22', 'email': email, 'password': 'superSecretPassword'})
        const response = await api.post('/register').send({'username': 'new_user_21', 'email': email, 'password': 'superSecretPassword'}).expect(500)
        expect(response.body.msg).toBe('Error on query')
        expect(response.body.error.code).toBe("23505")
        expect(response.body.error.detail).toBe("Ya existe la llave (email)=("+email+").")
    })
    test('Missing fields', async()=>{
        const response = await api.post('/register').expect(400)
        expect(response.body.msg).toBe('No se han llenado los campos necesarios para el registro')
    })
 })

 describe('New product', () => {
    beforeEach(async()=>{
        await api.put('/clean-producto')
        await api.put('/clean-vendedor-table')
        await api.put('/clean-organizacion-table')         
        await api.put('/clean-users-table')
    })
    beforeAll(async()=> {
        await api.put('/clean-vendedor-table')
        await api.put('/clean-organizacion-table')     
        await api.put('/clean-users-table')   
    })
    afterAll(async()=>{
        await api.put('/clean-producto')
        await api.put('/clean-vendedor-table')
        await api.put('/clean-organizacion-table')      
        await api.put('/clean-users-table')   
        server.close()
    })

    test('Succesful case organization vendedor', async()=>{
        const responseNewUser = await api.post('/register').send({'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'})
        let id = parseInt(responseNewUser.body.result.id)
        const responseNewOrganization = await api.post('/registrar-organizaciones').send({"id_lider": id, "descripcion": "aaaaa","no_telefono": "1000", 'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'})
        id = parseInt(responseNewOrganization.body.result.id_organizacion)
        const responseNewVendedor = await api.post('/create-vendedor-on-organizacion/'+id)
        id = parseInt(responseNewVendedor.body.result.id)

        const response = await api.post('/new-product').send({"nombre": "Goma", "precio": 2, "disponible": true, "id_vendedor": id, "descripcion": "Pues para pegar" }).expect(201)
        expect(response.body.msg).toBe('El producto fue registrado con exito')
        expect(response.body.result).toBeDefined()
    })
    test('Succesful case user vendedor', async()=>{
        const responseNewUser = await api.post('/register').send({'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'})
        let id = parseInt(responseNewUser.body.result.id)
        const responseNewVendedor = await api.post('/create-vendedor-on-user/'+id)
        id = parseInt(responseNewVendedor.body.result.id)
        
        const response = await api.post('/new-product').send({"nombre": "Goma", "precio": 2, "disponible": true, "id_vendedor": id, "descripcion": "Pues para pegar" }).expect(201)
        expect(response.body.msg).toBe('El producto fue registrado con exito')
        expect(response.body.result).toBeDefined()
    })
    
    test('Succesful case with no price', async()=>{
        const responseNewUser = await api.post('/register').send({'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'})
        let id = parseInt(responseNewUser.body.result.id)
        const responseNewVendedor = await api.post('/create-vendedor-on-user/'+id)
        id = parseInt(responseNewVendedor.body.result.id)
        
        const response = await api.post('/new-product').send({"nombre": "Goma", "disponible": true, "id_vendedor": id, "descripcion": "Pues para pegar" }).expect(201)
        expect(response.body.msg).toBe('El producto fue registrado con exito')
        expect(response.body.result).toBeDefined()
    })


    test('Unvalid id_vendedor', async()=>{
        const responseNewUser = await api.post('/register').send({'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'})
        let id = parseInt(responseNewUser.body.result.id)
        const responseNewVendedor = await api.post('/create-vendedor-on-user/'+id)
        id = parseInt(responseNewVendedor.body.result.id)+1
        
        const response = await api.post('/new-product').send({"nombre": "Goma", "disponible": true, "id_vendedor": id, "descripcion": "Pues para pegar" }).expect(500)
        expect(response.body.error).toBeDefined()
        const error = response.body.error
        expect(error.detail).toBe('La llave (id_vendedor)=('+id+') no está presente en la tabla «vendedor».')
        expect(error.code).toBe('23503')
    })

    test('Missing fields', async()=>{
        const response = await api.post('/new-product').expect(404)
        expect(response.body.msg).toBe('No se completaron campos suficientes')
    })


})

describe('Register organization', ()=>{
    beforeEach(async()=>{
        await api.put('/clean-organizacion-table')         
        await api.put('/clean-users-table')
    })
    beforeAll(async()=> {
        await api.put('/clean-organizacion-table')     
        await api.put('/clean-users-table')   
    })
    afterAll(async()=>{
        await api.put('/clean-organizacion-table')      
        await api.put('/clean-users-table')   
        server.close()
    })
    test('Succesful case', async()=>{
        const responseNewUser = await api.post('/register').send({'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'})
        let id = parseInt(responseNewUser.body.result.id)
        const response = await api.post('/registrar-organizaciones').send({"id_lider": id, "descripcion": "aaaaa","no_telefono": "1000", 'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'}).expect(201) 
        
    })
    test('Unvalid user leader id', async()=>{
        const responseNewUser = await api.post('/register').send({'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'})
        let id = parseInt(responseNewUser.body.result.id)+1
        const response = await api.post('/registrar-organizaciones').send({"id_lider": id, "descripcion": "aaaaa","no_telefono": "1000", 'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'}).expect(500) 
        const error = response.body.error
        expect(error.detail).toBe('La llave (id_usuario_lider)=('+id+') no está presente en la tabla «usuario».')
        expect(error.code).toBe('23503')
    })
    test('Missing fields', async()=>{
        const response = await api.post('/registrar-organizaciones').expect(404)
        expect(response.body.msg).toBe('Missing fields')
    })
})

describe('Create department', () => { 
    beforeAll(async () => await api.put('/clean-departamento'))
    afterAll(async () => await api.put('/clean-departamento'))

    test('Succesfull with description', async()=>{
        const response = await api.post('/create-departamento').send({"nombre": "Computacion", "descripcion": "Dedicada al estudio de algoritmos y lenguajes de programacion en busqueda de la implementacion de soluciones."}).expect(201)
        const body = response.body
        expect(body.msg).toBe('Departamento creado')
        expect(body.result).toBeDefined()
    })

    test('Succesfull WITHOUT description', async()=>{
        const response = await api.post('/create-departamento').send({"nombre": "Computacion"}).expect(201)
        const body = response.body
        expect(body.msg).toBe('Departamento creado sin descripcion')
        expect(body.result).toBeDefined()
    })

    test('No name, missing fields', async()=>{
        const response = await api.post('/create-departamento').expect(400)
        expect(response.body.msg).toBe('Departamento must have a name')
  
    })
})

describe('Create class', () => {
    
    beforeEach(async()=>{
        await api.put('/clean-clase')
        await api.put('/clean-departamento')
    })
    
    afterAll(async()=>{
        await api.put('/clean-clase')
        await api.put('/clean-departamento')
    })

    test('Succesful create class', async()=>{
        const responseDepartment = await api.post('/create-departamento').send({"nombre": "Computacion", "descripcion": "Dedicada al estudio de algoritmos y lenguajes de programacion en busqueda de la implementacion de soluciones."}).expect(201)
        const id = parseInt(responseDepartment.body.result.id)
        const response = await api.post('/create-class').send({"id_departamento": id,"nombre": "Algoritmos", "descripcion": "Algoritmos y programacion basica para todas las ingenierias."}).expect(201)
        const body = response.body
        expect(body.msg).toBe('Clase creada')
        expect(body.result).toBeDefined()
    })

    test('Misses id_departamento', async()=>{
        const response = await api.post('/create-class').send({"nombre": "Algoritmos", "descripcion": "Algoritmos y programacion basica para todas las ingenierias."}).expect(400)
        expect(response.body.msg).toBe('Must have the id of the department it belongs')
    })

    test('Misses name', async()=>{
        const response = await api.post('/create-class').send({"id_departamento": 100, "descripcion": "Algoritmos y programacion basica para todas las ingenierias."}).expect(400)
        expect(response.body.msg).toBe('Must have a name')
    })

    test('Wrong id departamento', async()=>{
        const response = await api.post('/create-class').send({"nombre": "Algoritmos","id_departamento": 100, "descripcion": "Algoritmos y programacion basica para todas las ingenierias."}).expect(500)
        expect(response.body.msg).toBe('An error occured while making the query')
        const error = response.body.error
        expect(error.code).toBe('23503')
        expect(error.detail).toBe('La llave (id_departamento)=(100) no está presente en la tabla «departamento».')
    })
})

describe('Get class by ID', ()=>{
    afterAll(async()=>{ 
        server.close()
    })
})

describe('Organizacion y colaboradores', () => {
    beforeAll(async()=>{
        await api.post('/new-organizacion')
    })
    afterAll(async()=>{ 
        server.close()
    })  
    test('Obtiene colaboradores de una organizacion sin colaboradores', async () =>{
        const response = await api.get('/get-colaboradores-of-organization/2').expect(200).expect('Content-Type', /\application\/json/)
        expect(response.body.msg).toBe("No se encontraron colaboradores para dicha organizacion")
    })
    test('Obtiene colaboradores de una organizacion con un colaborador', async () =>{
        const response = await api.get('/get-colaboradores-of-organization/1').expect(200).expect('Content-Type', /\application\/json/)
        expect(response.body).toHaveLength(1)
    })
    test('Obtiene colaboradores de una que no existe', async () =>{
        const response = await api.get('/get-colaboradores-of-organization/4').expect(200).expect('Content-Type', /\application\/json/)
        expect(response.body.msg).toBe("No se encontraron colaboradores para dicha organizacion")
    })
  
})  

describe('Insignias', () => {
    afterAll(async()=>{ 
        server.close()
    })
    test('Revisa si una organizacion que no es la mas rapida, lo es', async () =>{
        const response = await api.get('/is-the-fastest-organization/1').expect(200).expect('Content-Type', /\application\/json/)
        expect(response.body.isatthetop).toBe(false)
    })
    test('Revisa si una organizacion que no existe en la mas rapida', async () =>{
        const response = await api.get('/is-the-fastest-organization/8').expect(200).expect('Content-Type', /\application\/json/)
        expect(response.body.isatthetop).toBe(false)
    })
    test('Revisa si la organizacion mas rapida lo es', async () =>{
        const response = await api.get('/is-the-fastest-organization/4').expect(200).expect('Content-Type', /\application\/json/)
        expect(response.body.isatthetop).toBe(true)
    })
        
})

describe('Update rate organization', () => {
    afterAll(async()=>{ 
        server.close()
    })
    test('Intenta actualizar a una organizacion inexistente calificaion correcta', async () =>{
        const response = await api.get('/update-rating-organization/4/4').expect(400).expect('Content-Type', /\application\/json/)
        expect(response.body.msg).toBe("Bad request: There's no organization related to that id")
    })
    test('Actualiza organizacion correcta calificacion erronea', async () =>{
        const response = await api.get('/update-rating-organization/1/55').expect(400).expect('Content-Type', /\application\/json/)
        expect(response.body.msg).toBe("Calificacion debe ser de 1 a 5")
    })
    test('Actualiza organizacion incorrecta y calificacion incorrecta', async () =>{
        const response = await api.get('/update-rating-organization/8/55').expect(400).expect('Content-Type', /\application\/json/)
        expect(response.body.msg).toBe("Calificacion debe ser de 1 a 5")
    })

    test('Actualiza organizacion correcta y calificacion correcta', async () =>{
        const response = await api.get('/update-rating-organization/1/5').expect(200).expect('Content-Type', /\application\/json/)
        expect(response.body.msg).toBe("Organizaciones actualizadas: 1")
    })
})

describe('delete user by name', () =>{
    beforeEach(async()=>{
        await api.put('/clean-users-table')
    })
    afterAll(async()=>{
        await api.put('/clean-users-table')         
        server.close()
    })
    beforeAll(async()=>{
        await api.put('/clean-users-table')
    })
    test('succesfull delete', async()=>{
        await api.post('/register').send({'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'}).expect(201)
        const response = await api.put('/delete-user-by-username/new_user_5')
    })
    test('try to delete based on unexistent username', async()=>{

    })
})

