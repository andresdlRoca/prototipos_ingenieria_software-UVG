const {app, server} = require('../index')
const supertest = require('supertest')
const api = supertest(app)

describe('Organizacion y colaboradores', () => {
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
afterAll(()=>{ server.close()})