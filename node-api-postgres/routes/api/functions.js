const bcrypt = require('bcrypt');
const pool = require('../../db-pg-config')
const express = require('express');
const router = express.Router()

router.post('/new-user', (request, response) => {
    let saltRounds = 10;
    let { username, email, myPlaintextPassword } = request.body
    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
        if (err) response.status(500).json({msg: 'DB error ocurred', err})
        else{
            pool.query('INSERT INTO usuario (username,email, password) VALUES ($1, $2, $3)', [username, email, hash], (error, result) => {
                if (error) response.status(500).json({msg: 'An unexpected error ocurred', error})
                else response.status(201).json({msg: 'El usuario fue registrado correctamente!!'})
              })
        } 
    })
})    
router.get('/class/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM Clase WHERE id = $1', [id], (error, results) => {
      if (error) res.status(500).json({msg: 'An unexpected error ocurred', error: error})
      else res.status(200).json(results.rows)
    })
})
router.get('/class', (req, res)=>{
    pool.query('SELECT * FROM Clase ORDER BY id ASC', (error, results) => {
        if (error) res.status(500).json({msg: 'An unexpected error ocurred', error})
        else res.status(200).json(results.rows)
    })
})

module.exports = router