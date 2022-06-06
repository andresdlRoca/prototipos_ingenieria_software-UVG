const bcrypt = require("bcrypt")
const pool = require("../../db-pg-config")
const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const secretKey = "wowMissawow"
const saltRounds = 10

router.post("/register", (req, response) => {
  let { username, email, password } = req.body
  if (!(username && email && password))
    return response
      .status(400)
      .send("No se han llenado los campos necesarios para el registro")
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) return response.status(500).json({ msg: "DB error ocurred", err })
    pool.query(
      "INSERT INTO usuario (username,email, password) VALUES ($1, $2, $3)",
      [username, email, hash],
      (error, result) => {
        if (error)
          return response
            .status(500)
            .json({ msg: "An unexpected error ocurred", error })
        return response
          .status(201)
          .json({ msg: "El usuario fue registrado correctamente!!" })
      }
    )
  })
})
router.post("/new-product", (req, res) => {
  let { precio, disponible, src_img, id_vendedor, descripcion } = req.body
  precio = precio ? 0 : precio
  if (disponible && src_img && id_vendedor && descripcion) {
    pool.query(
      "INSERT INTO Producto (precio, disponible, src_img, id_vendedor, descripcion) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [precio, disponible, src_img, id_vendedor, descripcion],
      (error, results) => {
        if (error)
          return res.status(500).json({
            msg: "Algo salio mal, no se pudo guardar el producto",
            error,
          })
        return res.status(201).json({
          msg: "El producto fue registrado con exito",
          product_id: results.rows.id,
        })
      }
    )
  } else
    return res.status(404).json({ msg: "No se completaron campos suficientes" })
})
router.get("/class/:id", (req, res) => {
  const id = parseInt(req.params.id)
  pool.query("SELECT * FROM Clase WHERE id = $1", [id], (error, results) => {
    if (error)
      res.status(500).json({ msg: "An unexpected error ocurred", error: error })
    else res.status(200).json(results.rows)
  })
})
router.get("/class", (req, res) => {
  pool.query("SELECT * FROM Clase ORDER BY id ASC", (error, results) => {
    if (error)
      res.status(500).json({ msg: "An unexpected error ocurred", error })
    else res.status(200).json(results.rows)
  })
})
router.post("/login", (req, res) => {
  let { email, password } = req.body
  if (!email) return res.status(404).json({ msg: "No se ingreso un usuario" })
  if (!password)
    return res.status(404).json({ msg: "No se ingreso contraseña" })
  pool.query(
    "SELECT * FROM Usuario WHERE email = $1",
    [email],
    (err, result) => {
      if (err)
        return res
          .status(500)
          .json({ msg: "Error interno en la busqueda del usuario" })
      if (result.rows.length) {
        user = result.rows[0]
        bcrypt.compare(password, user.password, (error, same) => {
          if (err)
            return res
              .status(500)
              .json(
                "An error ocurred while decripting password. Try later. ",
                error
              )
          if (same) {
            psswrd = user.password
            jwt.sign(
              { email, psswrd },
              secretKey,
              { expiresIn: "2 days" },
              (err, token) => {
                if (err) return res.status(500).send(err)
                return res.status(200).json({ msg: "Login Succes", token })
              }
            )
          } else
            return res
              .status(401)
              .json({ msg: "Usuario o Contraseña Incorrecta" })
        })
      } else res.status(401).json({ msg: "Usuario o Contraseña Incorrecta" })
    }
  )
})
router.get('/get-products', (req, res)=>{
  pool.query(
    "SELECT producto.nombre AS title, producto.src_img, producto.descripcion AS description, producto.calificacion AS prod_rate, producto.precio AS price, usuario.username AS name FROM producto INNER JOIN vendedor ON vendedor.id = producto.id_vendedor INNER JOIN usuario ON vendedor.id_usuario = usuario.id"
    , (error, results)=>{
      if (error) return res.status(500).json({ msg: "An error ocurred while making the query", error })
      else return res.status(200).json(results.rows)

    }
    )

  })
/* 

Protected routes

*/
router.get("/main", verifyLoginToken, (req, res) => {
  jwt.verify(req.token, secretKey, (err, authData) => {
    if (err) return res.sendStatus(403)
    return res.status(200).json({ msg: "Pagina principal", authData })
  })
})
/* 
FUNCTION
Token exists in header verifier
*/
function verifyLoginToken(req, res, next) {
  const bearerHeader = req.headers["authorization"]

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ")
    const bearerToken = bearer[1]
    req.token = bearerToken
    next()
  } else {
    //Forbidden
    return res.sendStatus(403)
  }
}

module.exports = router
