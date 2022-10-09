const {app, server} = require('../index')
const supertest = require('supertest')
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
    beforeEach(async()=> {
        await api.put('/clean-clase')
        await api.put('/clean-departamento')
    })
    afterAll(async()=>{ 
        await api.put('/clean-clase')
        await api.put('/clean-departamento')
        server.close()
    })

    test('Get existing class', async()=>{
        const nombre = "Algoritmos"
        const descripcion = "Algoritmos y programacion basica para todas las ingenierias."
        const responseDepartment = await api.post('/create-departamento').send({"nombre": "Computacion", "descripcion": "Dedicada al estudio de algoritmos y lenguajes de programacion en busqueda de la implementacion de soluciones."}).expect(201)
        let id = parseInt(responseDepartment.body.result.id)
        const responseClass = await api.post('/create-class').send({"id_departamento": id,"nombre": nombre, "descripcion": descripcion}).expect(201)
        id = responseClass.body.result.id
        const response = await api.get('/class/'+id).expect(200)
        expect(response.body.class.nombre).toBe(nombre)
        expect(response.body.class.descripcion).toBe(descripcion)
        expect(response.body.count).toBe(1)
    })

    test('Get unexsiting class', async()=>{
        const response = await api.get('/class/'+12).expect(200)
        expect(response.body.class).toBe(undefined)    
        expect(response.body.count).toBe(0)
    
    })

})

describe('Get all classes', ()=>{
    beforeEach(async()=> {
        await api.put('/clean-clase')
        await api.put('/clean-departamento')
    })
    afterAll(async()=>{ 
        await api.put('/clean-clase')
        await api.put('/clean-departamento')
        server.close()
    })

    test('Succesful data request', async()=>{
        const responseDepartment = await api.post('/create-departamento').send({"nombre": "Computacion", "descripcion": "Dedicada al estudio de algoritmos y lenguajes de programacion en busqueda de la implementacion de soluciones."}).expect(201)
        const id = parseInt(responseDepartment.body.result.id)
        await api.post('/create-class').send({"id_departamento": id,"nombre": "Algoritmos", "descripcion": "Algoritmos y programacion basica para todas las ingenierias."}).expect(201)
        await api.post('/create-class').send({"id_departamento": id,"nombre": "Matematica", "descripcion": "Mate y ya. "}).expect(201)
        const response = await api.get('/class').expect(200)
        expect(response.body).toHaveLength(2)    
    })

    test('Gets no data', async()=>{
        const response = await api.get('/class').expect(200)
        expect(response.body).toHaveLength(0)  

    })
})

describe('Login', ()=>{

    beforeEach(async()=> await api.put('/clean-users-table'))
    afterAll(async()=> await api.put('/clean-users-table') )
    
    test('No ingreso contraseña', async()=>{
        const response = await api.post('/login').send({"email": 'email@email.com'}).expect(404)
        expect(response.body.msg).toBe('No se ingreso contraseña')
    })

    test('No ingreso email', async()=>{
        const response = await api.post('/login').expect(404)
        expect(response.body.msg).toBe('No se ingreso un usuario')
    })

    test('No encontro usuario con email ingresado', async()=>{
        const response = await api.post('/login').send({"email": 'email@email.com', 'password': 'a'}).expect(401)
        expect(response.body.msg).toBe('Usuario no encontrado')
    })

    //test('Email invalido', async())//Aun no se como hacer esto pero es para que de error en la query del get con email

    test('Succesfull', async()=>{
        const email = 'new_user@email.com'
        const password = 'superSecretPassword'
        await api.post('/register').send({'username': 'new_user', 'email': email, 'password': password}).expect(201)
        const response = await api.post('/login').send({"email": email, 'password': password}).expect(200)
        const body = response.body
        expect(body.msg).toBe('Login Succes')
        expect(body.token).toBeDefined()

    })

    test('Contraseña o usuario incorrecto', async()=>{
        const email = 'new_user@email.com'
        const password = 'superSecretPassword'
        await api.post('/register').send({'username': 'new_user', 'email': email, 'password': password}).expect(201)
        const response = await api.post('/login').send({"email": email, 'password': 'a'}).expect(401)
        expect(response.body.msg).toBe('Usuario o Contraseña Incorrecta')

    })
})

describe('New report', ()=>{
    beforeAll(async()=> await api.put('/clean-reports'))
    afterAll(async()=> await api.put('/clean-reports'))

    test('No indica tipo', async()=>{
        const response = await api.post('/new-report').expect(404)
        expect(response.body.msg).toBe('No se indico el tipo de mensaje')
    })

    test('No indica mensaje', async()=>{
        const response = await api.post('/new-report').send({"tipo": "Reclamo"}).expect(404)
        expect(response.body.msg).toBe('No se envio el contenido del mensaje')
    })

    test('Succesful case', async()=>{
        const response = await api.post('/new-report').send({"tipo": "Reclamo", "mensaje": "El libro estaba dañado"}).expect(200)
        expect(response.body.rowCount).toBe(1)

    })
})

describe('Get all products', ()=>{
    afterAll(async()=> {
        await api.put('/clean-producto')
        await api.put('/clean-vendedor-table')
        await api.put('/clean-organizacion-table')      
        await api.put('/clean-users-table')   
    })
    test('Succesfull case', async()=>{
        const responseNewUser = await api.post('/register').send({'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'})
        let id = parseInt(responseNewUser.body.result.id)
        const responseNewVendedor = await api.post('/create-vendedor-on-user/'+id)
        id = parseInt(responseNewVendedor.body.result.id)
        
        await api.post('/new-product').send({"nombre": "Goma", "precio": 2, "disponible": true, "id_vendedor": id, "descripcion": "Pues para pegar" }).expect(201)
        await api.post('/new-product').send({"nombre": "Tijeras", "precio": 5, "disponible": true, "id_vendedor": id, "descripcion": "Pues para pegar" }).expect(201)
        
        const response = await api.get('/get-products').expect(200)
        const body = response.body
        expect(body).toHaveLength(2)

    })
})

describe('Create tutor on user', ()=>{
    
    beforeEach(async()=>{
        await api.put('/clean-tutor')
        await api.put('/clean-users-table')
    })

    afterAll(async()=>{
        await api.put('/clean-tutor')
        await api.put('/clean-users-table')
    })

    test('Creating over unvalid user id', async()=>{
        const response = await api.post('/create-tutor/1').expect(500)
        expect(response.body.msg).toBe('An error ocurred while making the query')
        const error = response.body.error
        expect(error.code).toBe('23503')
        expect(error.detail).toBe('La llave (id_usuario)=(1) no está presente en la tabla «usuario».')
    })

    test('Created tutor on already registred user', async()=>{
        const responseNewUser = await api.post('/register').send({'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'})
        const id = parseInt(responseNewUser.body.result.id)
        await api.post('/create-tutor/'+id).expect(201)
        const response = await api.post('/create-tutor/'+id).expect(500)
        expect(response.body.msg).toBe('An error ocurred while making the query')
        const error = response.body.error
        expect(error.code).toBe('23505')
        expect(error.detail).toBe('Ya existe la llave (id_usuario)=('+id+').')
    })

    test('Succesful case', async()=>{
        const responseNewUser = await api.post('/register').send({'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'})
        const id = parseInt(responseNewUser.body.result.id)
        const response = await api.post('/create-tutor/'+id).expect(201)
        const body = response.body
        expect(body.msg).toBe('Tutor created succesfully')
        expect(body.result.id).toBeDefined()
    })
})

describe('Get all tutors', ()=>{
    test('Succesful case', async()=>{
        const responseNewUser = await api.post('/register').send({'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'})
        const id = parseInt(responseNewUser.body.result.id)
        await api.post('/create-tutor/'+id).expect(201)
        const responseNewUser2 = await api.post('/register').send({'username': 'new_user_1', 'email': 'new_user1@email.com', 'password': 'superSecretPassword'})
        const id2 = parseInt(responseNewUser2.body.result.id)
        await api.post('/create-tutor/'+id2).expect(201)
        const response = await api.get('/get-tutors')
        expect(response.body).toHaveLength(2)
        
    })
})

describe('Create form of payment', ()=>{

    afterAll(async()=> await api.put('/clean-cobro'))
    test('Succefull case', async()=>{
        const response = await api.post('/create-form-of-pamyment').send({'forma_de_cobro': 'Tarjeta de credito'}).expect(201)
        expect(response.body.msg).toBe('Form of payment succesfully created')
        expect(response.body.result.id).toBeDefined()
    })
    
})

describe('Relate form of payment and tutor', ()=>{
    
    beforeEach(async()=>{
        await api.put('/clean-rel_cobro_tutor')
        await api.put('/clean-tutor')
        await api.put('/cleant-cobro')
        await api.put('/clean-users-table')
    })
    
    afterAll(async()=>{
        await api.put('/clean-rel_cobro_tutor')
        await api.put('/clean-tutor')
        await api.put('/cleant-cobro')
        await api.put('/clean-users-table')
    })

    test('Missing id_tutor', async()=>{
        const response = await api.post('/relate-form-of-payment-and-tutor').send({ "id_cobro": 1 }).expect(400)
        expect(response.body.msg).toBe('Must include a tutor id')
    })

    test('Missing id_cobro', async()=>{
        const response = await api.post('/relate-form-of-payment-and-tutor').send({ "id_tutor": 1 }).expect(400)
        expect(response.body.msg).toBe('Must include a form of payment id')
    })

    test('Wrong id_tutor', async()=>{
        const responseCobro = await api.post('/create-form-of-pamyment').send({'forma_de_cobro': 'Tarjeta de credito'}).expect(201)
        const id_cobro = responseCobro.body.result.id
        const response = await api.post('/relate-form-of-payment-and-tutor').send({ "id_tutor": 1, "id_cobro": id_cobro }).expect(500)
        const error = response.body.error
        expect(error.code).toBe('23503')
        expect(error.detail).toBe('La llave (id_tutor)=(1) no está presente en la tabla «tutor».')
    })

    test('Wrong id_cobro', async()=>{
        const responseNewUser = await api.post('/register').send({'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'})
        const id = parseInt(responseNewUser.body.result.id)
        const responseNewTutor = await api.post('/create-tutor/'+id).expect(201)
        const id_tutor = parseInt(responseNewTutor.body.result.id)
        const response = await api.post('/relate-form-of-payment-and-tutor').send({ "id_tutor": id_tutor, "id_cobro": 1 }).expect(500)
        const error = response.body.error
        expect(error.code).toBe('23503')
        expect(error.detail).toBe('La llave (id_cobro)=(1) no está presente en la tabla «cobro».')

    })

    test('Succesful case', async()=>{
        const responseCobro = await api.post('/create-form-of-pamyment').send({'forma_de_cobro': 'Tarjeta de credito'}).expect(201)
        const id_cobro = responseCobro.body.result.id
        const responseNewUser = await api.post('/register').send({'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'})
        const id = parseInt(responseNewUser.body.result.id)
        const responseNewTutor = await api.post('/create-tutor/'+id).expect(201)
        const id_tutor = parseInt(responseNewTutor.body.result.id)
        const response = await api.post('/relate-form-of-payment-and-tutor').send({ "id_tutor": id_tutor, "id_cobro": id_cobro }).expect(200)
        expect(response.body.msg).toBe('Related correctly')
        expect(response.body.result.id).toBeDefined()
    })

})

describe('Get tutor cobro', ()=>{

    test('Succesfull request', async()=>{
        const responseCobro = await api.post('/create-form-of-pamyment').send({'forma_de_cobro': 'Tarjeta de credito'}).expect(201)
        const responseCobro2 = await api.post('/create-form-of-pamyment').send({'forma_de_cobro': 'Tarjeta de credito'}).expect(201)
        const id_cobro = responseCobro.body.result.id
        const id_cobro2 = responseCobro2.body.result.id
        const responseNewUser = await api.post('/register').send({'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'})
        const id = parseInt(responseNewUser.body.result.id)
        const responseNewTutor = await api.post('/create-tutor/'+id).expect(201)
        const id_tutor = parseInt(responseNewTutor.body.result.id)
        await api.post('/relate-form-of-payment-and-tutor').send({ "id_tutor": id_tutor, "id_cobro": id_cobro }).expect(200)
        await api.post('/relate-form-of-payment-and-tutor').send({ "id_tutor": id_tutor, "id_cobro": id_cobro2 }).expect(200)
        const response = await api.get('/get-tutor-cobro/'+id_tutor)
        expect(response.body).toHaveLength(2)
    })
})

describe('Relate tutor and class', ()=>{

    beforeEach(async()=>{
        await api.put('/clean-tutor_clase')
        await api.put('/clean-tutor')
        await api.put('/cleant-cobro')
        await api.put('/clean-users-table')
    })
    
    afterAll(async()=>{
        await api.put('/clean-tutor_clase')
        await api.put('/clean-tutor')
        await api.put('/cleant-cobro')
        await api.put('/clean-users-table')
    })

    test('Missing fields: No id_class', async()=>{
        const response = await api.post('/relate-tutor-and-class').send({"id_tutor": 1}).expect(400)
        expect(response.body.msg).toBe("Missing id_class")
    })

    test('Missing fields: No id_tutor', async()=>{
        const response = await api.post('/relate-tutor-and-class').send({"id_class": 8}).expect(400)
        expect(response.body.msg).toBe("Missing id_tutor")
    })

    test('Wrong id_tutor', async()=>{
        const responseDepartment = await api.post('/create-departamento').send({"nombre": "Computacion", "descripcion": "Dedicada al estudio de algoritmos y lenguajes de programacion en busqueda de la implementacion de soluciones."}).expect(201)
        const id_dep = parseInt(responseDepartment.body.result.id)
        const responseClass = await api.post('/create-class').send({"id_departamento": id_dep,"nombre": "Algoritmos", "descripcion": "Algoritmos y programacion basica para todas las ingenierias."}).expect(201)
        const id_class = parseInt(responseClass.body.result.id)
        const response = await api.post('/relate-tutor-and-class').send({ "id_class": id_class, "id_tutor": 1 }).expect(500)
        expect(response.body.msg).toBe('An error ocurred while making the query')
        const error = response.body.error
        expect(error.detail).toBe('La llave (id_tutor)=(1) no está presente en la tabla «tutor».')
        expect(error.code).toBe('23503')
    })

    test('Wrong id_class', async()=>{
        const responseNewUser = await api.post('/register').send({'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'}).expect(201)
        const id = parseInt(responseNewUser.body.result.id)
        const responseNewTutor = await api.post('/create-tutor/'+id).expect(201)
        const id_tutor = responseNewTutor.body.result.id
        const response = await api.post('/relate-tutor-and-class').send({ "id_class": 1, "id_tutor": id_tutor }).expect(500)
        expect(response.body.msg).toBe('An error ocurred while making the query')
        const error = response.body.error
        expect(error.detail).toBe('La llave (id_clase)=(1) no está presente en la tabla «clase».')
        expect(error.code).toBe('23503')

    })

    test('Relation already made', async()=>{
        const responseDepartment = await api.post('/create-departamento').send({"nombre": "Computacion", "descripcion": "Dedicada al estudio de algoritmos y lenguajes de programacion en busqueda de la implementacion de soluciones."}).expect(201)
        const id_dep = parseInt(responseDepartment.body.result.id)
        const responseClass = await api.post('/create-class').send({"id_departamento": id_dep,"nombre": "Algoritmos", "descripcion": "Algoritmos y programacion basica para todas las ingenierias."}).expect(201)
        const id_class = parseInt(responseClass.body.result.id)
        const responseNewUser = await api.post('/register').send({'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'}).expect(201)
        const id = parseInt(responseNewUser.body.result.id)
        const responseNewTutor = await api.post('/create-tutor/'+id).expect(201)
        const id_tutor = responseNewTutor.body.result.id
        await api.post('/relate-tutor-and-class').send({ "id_class": id_class, "id_tutor": id_tutor }).expect(200)
        const response = await api.post('/relate-tutor-and-class').send({ "id_class": id_class, "id_tutor": id_tutor }).expect(500)
        expect(response.body.msg).toBe('An error ocurred while making the query')
        const error = response.body.error
        expect(error.detail).toBe('Ya existe la llave (id_clase, id_tutor)=('+id_class+', '+id_tutor+').')
        expect(error.code).toBe('23505')
    })

    test('Succesful case', async()=>{
        const responseDepartment = await api.post('/create-departamento').send({"nombre": "Computacion", "descripcion": "Dedicada al estudio de algoritmos y lenguajes de programacion en busqueda de la implementacion de soluciones."}).expect(201)
        const id_dep = parseInt(responseDepartment.body.result.id)
        const responseClass = await api.post('/create-class').send({"id_departamento": id_dep,"nombre": "Algoritmos", "descripcion": "Algoritmos y programacion basica para todas las ingenierias."}).expect(201)
        const id_class = parseInt(responseClass.body.result.id)
        const responseNewUser = await api.post('/register').send({'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'}).expect(201)
        const id = parseInt(responseNewUser.body.result.id)
        const responseNewTutor = await api.post('/create-tutor/'+id).expect(201)
        const id_tutor = responseNewTutor.body.result.id
        const response = await api.post('/relate-tutor-and-class').send({ "id_class": id_class, "id_tutor": id_tutor }).expect(200)
        expect(response.body.msg).toBe('Relation succesfullt created')
        expect(response.body.result.id).toBeDefined()
    })
})

describe('Get classes on tutor', ()=>{
    test('Succesful case', async() => {
        //Setup tables
        const responseDepartment = await api.post('/create-departamento').send({"nombre": "Computacion", "descripcion": "Dedicada al estudio de algoritmos y lenguajes de programacion en busqueda de la implementacion de soluciones."}).expect(201)
        const id_dep = parseInt(responseDepartment.body.result.id)
        const responseClass = await api.post('/create-class').send({"id_departamento": id_dep,"nombre": "Algoritmos", "descripcion": "Algoritmos y programacion basica para todas las ingenierias."}).expect(201)
        const responseClass2 = await api.post('/create-class').send({"id_departamento": id_dep,"nombre": "Matea", "descripcion": "Mates"}).expect(201)
        const class_id1 = responseClass.body.result.id
        const class_id2 = responseClass2.body.result.id
        const responseNewUser = await api.post('/register').send({'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'})
        const idNewUser = parseInt(responseNewUser.body.result.id)
        const responseNewTutor = await api.post('/create-tutor/'+idNewUser).expect(201)
        const id_tutor = responseNewTutor.body.result.id
        await api.post('/relate-tutor-and-class').send({ "id_class": class_id1, "id_tutor": id_tutor }).expect(200)
        await api.post('/relate-tutor-and-class').send({ "id_class": class_id2, "id_tutor": id_tutor }).expect(200)
        //Actual test

        const response = await api.get('/get-tutor-class/'+id_tutor).expect(200)
        expect(response.body).toHaveLength(2)
    })
})

describe('Get user by id', ()=>{
    beforeEach(async()=> await api.put('/clean-users-table'))
    afterAll(async()=> await api.put('/clean-users-table'))
    test('Existing id', async()=>{
        const username = 'new_user'
        const respNewUser = await api.post('/register').send({'username': username, 'email': 'new_user@email.com', 'password': 'superSecretPassword'}).expect(201)
        const id_user = respNewUser.body.result.id
        const response = await api.get('/get-user/'+id_user).expect(200)
        expect(response.body.msg).toBe('Succesfully found user')
        expect(response.body.user.username).toBe(username)
    } )

    test('Unexisting id', async()=>{
        const response = await api.get('/get-user/1').expect(400)
        expect(response.body.msg).toBe("Not user related to that id")
    })
})

describe('Get organizacion by id', ()=>{
    beforeEach(async()=> {
        await api.put('/clean-organizacion-table')
        await api.put('/clean-users-table')   
    })
    afterAll(async()=> {
        await api.put('/clean-organizacion-table')
        await api.put('/clean-users-table')   
    })

    test('Existing id', async()=>{
        const descripcion = "aaaaa"
        const responseNewUser = await api.post('/register').send({'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'})
        let id = parseInt(responseNewUser.body.result.id)
        const responseOrganiz = await api.post('/registrar-organizaciones').send({"id_lider": id, "descripcion": descripcion,"no_telefono": "1000", 'username': 'new_user_5', 'email': 'new_user2@email.com', 'password': 'superSecretPassword'}).expect(201) 
        const id_organizacion = responseOrganiz.body.result.id_organizacion
        const response = await api.get('/get-organizacion/'+id_organizacion).expect(200)
        expect(response.body.msg).toBe('Succesfully found Organization')
        expect(response.body.user.descripcion).toBe(descripcion)
    } )

    test('Unexisting id', async()=>{
        const response = await api.get('/get-organizacion/1').expect(400)
        expect(response.body.msg).toBe("Not Organization related to that id")
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

describe('Table cleaners', ()=>{
    test('User table', async()=>{
        const response = await api.put('/clean-users-table').expect(200)
        expect(response.body.msg).toBe('Deletion completed')
    })
    test('Organizacion table', async()=>{
        const response = await api.put('/clean-organizacion-table').expect(200)
        expect(response.body.msg).toBe('Deletion completed')
    })
    test('Vendedor table', async()=>{
        const response = await api.put('/clean-vendedor-table').expect(200)
        expect(response.body.msg).toBe('Deletion completed')
    })
    test('Bitacora ventas table', async()=>{
        const response = await api.put('/clean-bitacora_ventas-table').expect(200)
        expect(response.body.msg).toBe('Deletion completed')
    })
    test('Ventas table', async()=>{
        const response = await api.put('/clean-ventas').expect(200)
        expect(response.body.msg).toBe('Deletion completed')
    })
    test('Producto table', async()=>{
        const response = await api.put('/clean-producto').expect(200)
        expect(response.body.msg).toBe('Deletion completed')
    })
    test('Departamento table', async()=>{
        const response = await api.put('/clean-departamento').expect(200)
        expect(response.body.msg).toBe('Deletion completed')
    })
    test('Clase table', async()=>{
        const response = await api.put('/clean-clase').expect(200)
        expect(response.body.msg).toBe('Deletion completed')
    })
    test('Reportes table', async()=>{
        const response = await api.put('/clean-reports').expect(200)
        expect(response.body.msg).toBe('Deletion completed')
    })
    test('Tutor table', async()=>{
        const response = await api.put('/clean-tutor').expect(200)
        expect(response.body.msg).toBe('Deletion completed')
    })
    test('Cobro table', async()=>{
        const response = await api.put('/clean-cobro').expect(200)
        expect(response.body.msg).toBe('Deletion completed')
    })
    test('Relacion Cobro y tutor table', async()=>{
        const response = await api.put('/clean-rel_cobro_tutor').expect(200)
        expect(response.body.msg).toBe('Deletion completed')
    })
    test('Relacion Tutor y clase table', async()=>{
        const response = await api.put('/clean-tutor_clase').expect(200)
        expect(response.body.msg).toBe('Deletion completed')
    })
})