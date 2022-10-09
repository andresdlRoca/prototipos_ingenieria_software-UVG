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

describe('get all classes', ()=>{
    afterAll(async()=>{ 
        server.close()
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

