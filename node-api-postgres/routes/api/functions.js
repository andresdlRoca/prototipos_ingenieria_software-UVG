const bcrypt = require('bcrypt');
const pool = require('../../db-pg-config');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { response } = require('express');
const secretKey = 'wowMissawow';
const saltRounds = 10;

router.post('/register', (req, response) => {
  let { username, email, password } = req.body;
  if (!(username && email && password))
    return response
      .status(400)
      .send('No se han llenado los campos necesarios para el registro');
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) return response.status(500).json({ msg: 'DB error ocurred', err });
    pool.query(
      'INSERT INTO usuario (username,email, password) VALUES ($1, $2, $3)',
      [username, email, hash],
      (error, result) => {
        if (error)
          return response
            .status(500)
            .json({ msg: 'An unexpected error ocurred', error });
        return response.status(201).json();
      }
    );
  });
});

router.post('/vender', (req, res) => {
  let { nombre, descripcion, precio, form } = req.body;
  if (precio && nombre && descripcion) {
    if (form == 'producto') {
      pool.query(
        'INSERT INTO Producto (nombre, precio, disponible, descripcion, id_vendedor) VALUES ($1, $2, true, $3, 2) RETURNING *',
        [nombre, precio, descripcion],
        (error, results) => {
          if (error) {
            return res.status(500).json({
              msg: error,
              error,
            });
            {
              msg: 'El usuario fue registrado correctamente!!';
            }
          }
          return res.status(201).json({
            msg: 'El producto fue registrado con exito',
            product_id: results.rows.id,
          });
        }
      );
    } else {
      // pool.query(
      //   "INSERT INTO Producto (nombre, precio, disponible, descripcion, id_vendedor) VALUES ($1, $2, true, $3, 2) RETURNING *",
      //   [nombre, precio, descripcion],
      //   (error, results) => {
      //     if (error) {
      //       return res.status(500).json({
      //         msg: error,
      //         error,
      //       });
      //     }
      //     return res.status(201).json({
      //       msg: "El producto fue registrado con exito",
      //       product_id: results.rows.id,
      //     });
      //   });
    }
  } else
    return res
      .status(404)
      .json({ msg: 'No se completaron campos suficientes' });
});

router.post('/new-product', (req, res) => {
  let { precio, disponible, src_img, id_vendedor, descripcion } = req.body;
  precio = precio ? 0 : precio;
  if (disponible && src_img && id_vendedor && descripcion) {
    pool.query(
      'INSERT INTO Producto (precio, disponible, src_img, id_vendedor, descripcion) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [precio, disponible, src_img, id_vendedor, descripcion],
      (error, results) => {
        if (error)
          return res.status(500).json({
            msg: 'Algo salio mal, no se pudo guardar el producto',
            error,
          });
        return res.status(201).json({
          msg: 'El producto fue registrado con exito',
          product_id: results.rows.id,
        });
      }
    );
  } else
    return res
      .status(404)
      .json({ msg: 'No se completaron campos suficientes' });
});

router.post('/registrar-organizaciones', (req, res) => {
  let { nombre, passw, correo, correoA, username, telefono, imagen } = req.body;
  if (nombre && passw && correo && correoA && username && telefono && imagen) {
    pool.query(
      'INSERT INTO organizacion (id_organizacion, username, password, email, alternative_email, no_telefono, profile_pic, nombre, apellido, linkedin, descripcion, isActive) VALUES (0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
      [
        username,
        passw,
        correo,
        correoA,
        telefono,
        imagen,
        nombre,
        '-',
        '-',
        '-',
        true,
      ],
      (error, results) => {
        if (error)
          return res.status(500).json({
            msg: 'Algo salio mal, no se pudo registrar la organizacion',
            error,
          });
        return res.status(201).json({
          msg: 'La organizacion registrado con exito',
          product_id: results.rows.id,
        });
      }
    );
  } else
    return res.status(404).json({ msg: 'Hubo un error, revise los campos' });
});

router.get('/class/:id', (req, res) => {
  const id = parseInt(req.params.id);
  pool.query('SELECT * FROM Clase WHERE id = $1', [id], (error, results) => {
    if (error)
      res
        .status(500)
        .json({ msg: 'An unexpected error ocurred', error: error });
    else res.status(200).json(results.rows);
  });
});

router.get('/class', (req, res) => {
  pool.query('SELECT * FROM Clase ORDER BY id ASC', (error, results) => {
    if (error)
      res.status(500).json({ msg: 'An unexpected error ocurred', error });
    else res.status(200).json(results.rows);
  });
});

router.post('/login', (req, res) => {
  let { email, password } = req.body;
  if (!email) return res.status(404).json({ msg: 'No se ingreso un usuario' });
  if (!password)
    return res.status(404).json({ msg: 'No se ingreso contraseña' });
  pool.query(
    'SELECT * FROM Usuario WHERE email = $1',
    [email],
    (err, result) => {
      if (err)
        return res
          .status(500)
          .json({ msg: 'Error interno en la busqueda del usuario' });
      if (result.rows.length) {
        user = result.rows[0];
        bcrypt.compare(password, user.password, (error, same) => {
          if (err)
            return res
              .status(500)
              .json(
                'An error ocurred while decripting password. Try later. ',
                error
              );
          if (same) {
            psswrd = user.password;
            jwt.sign(
              { email, psswrd },
              secretKey,
              { expiresIn: '2 days' },
              (err, token) => {
                if (err) return res.status(500).send(err);
                return res.status(200).json({ msg: 'Login Succes', token });
              }
            );
          } else
            return res
              .status(401)
              .json({ msg: 'Usuario o Contraseña Incorrecta' });
        });
      } else res.status(401).json({ msg: 'Usuario o Contraseña Incorrecta' });
    }
  );
});

router.post('/new-report', (req, res) => {
  let { tipo, mensaje } = req.body;
  if (!tipo)
    return res.status(404).json({ msg: 'No se indico el tipo de mensaje' });
  if (!mensaje)
    return res
      .status(404)
      .json({ msg: 'No se envio el contenido del mensaje' });

  pool.query(
    'INSERT INTO reporte(detalles, categoria) VALUES ($1, $2)',
    [mensaje, tipo],
    (err, result) => {
      if (err) return res.status(500).json({ msg: 'Error in query', err });
      else {
        return res.status(200).json(result);
      }
    }
  );
});

router.get('/get-products', (req, res) => {
  pool.query(
    'SELECT producto.nombre AS title, producto.src_img, producto.descripcion AS description, producto.calificacion AS prod_rate, producto.precio AS price, usuario.username AS name FROM producto INNER JOIN vendedor ON vendedor.id = producto.id_vendedor INNER JOIN usuario ON vendedor.id_usuario = usuario.id',
    (error, results) => {
      if (error)
        return res
          .status(500)
          .json({ msg: 'An error ocurred while making the query', error });
      else return res.status(200).json(results.rows);
    }
  );
});

router.get('/get-tutors', async (req, res) => {
  let response;
  pool.query(
    'SELECT tutor.id,usuario.username AS name, tutor.calificacion AS calification, tutor.iscertificado AS isVerified, profile_pic AS image, telefono AS tel FROM tutor LEFT JOIN usuario ON tutor.id_usuario = usuario.id',
    (error, results) => {
      if (error)
        return res
          .status(500)
          .json({ msg: 'An error ocurred while making the query', error });
      else return res.status(200).json(results.rows);
    }
  );
});

router.get('/get-tutor-cobro/:id', (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(
    'SELECT forma_de_cobro FROM rel_cobro_tutor LEFT JOIN cobro ON rel_cobro_tutor.id_cobro = cobro.id WHERE id_tutor = $1 ',
    [id],
    (error, formas_de_cobro_results) => {
      if (error)
        return res
          .status(500)
          .json({ msg: 'An error ocurred while making the query', error });
      else return res.status(200).json(formas_de_cobro_results.rows);
    }
  );
});

router.get('/get-tutor-class/:id', (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(
    'SELECT clase.nombre, performance FROM tutor_clase LEFT JOIN clase ON tutor_clase.id_clase = clase.id WHERE id_tutor = $1',
    [id],
    (error, clases_results) => {
      if (error)
        return res
          .status(500)
          .json({ msg: 'An error ocurred while making the query', error });
      else return res.status(200).json(clases_results.rows);
    }
  );
});

router.get('/get-user/:id', (req, res) =>{
  const id = parseInt(req.params.id)
  pool.query('SELECT * FROM usuario WHERE id = $1;', [id], (err, result) =>{
    if (err) return res.status(500).json({msg: 'An error ocurred while making the query', err})
    if (result.rowCount==0) return res.status(404).json({msg: "Not user related to that id"})
    return res.status(200).json({msg: 'Succesfully found user', user : result.rows[0]})
  })
})

router.get('/get-organizacion/:id', (req, res)=>{
  const id = parseInt(req.params.id)
  pool.query('SELECT * FROM Organizacion WHERE id = $1;', [id], (err, result) =>{
    if (err) return res.status(500).json({msg: 'An error ocurred while making the query', err})
    if (result.rowCount==0) return res.status(404).json({msg: "Not Organization related to that id"})
    return res.status(200).json({msg: 'Succesfully found Organization', user : result.rows[0]})
  })
})

router.post('/new-organizacion', (req, res) => {
  let { user_name, id_usuario_lider, email, no_telefono } = req.body;

  if (!user_name || !id_usuario_lider || !email || !no_telefono )
    return res.status(404).json({ msg: 'Missing fields on request of creation' });
  pool.query('SELECT * FROM usuario WHERE id = $1;', [id_usuario_lider], (err, result) =>{
      if (err) return res.status(500).json({msg: 'An error ocurred while making the query', err})
      if (result.rowCount==0) return res.status(404).json({msg: "Not user related to that id"})
      pool.query(
        'INSERT INTO Organizacion (user_name, id_usuario_lider, email, no_telefono) VALUES ($1, $2, $3, $4);',
        [user_name, id_usuario_lider, email, no_telefono],
        (err, result) => {
          if (err) return res.status(500).json({ msg: 'Error in query', err });
          else {
            return res.status(200).json({"Total insertados": result.rowCount});
          }
        }
      ); 
    })
});

//Se llama cada que alguien califica una organizacion
router.get('/update-rating-organization/:id', (req, res)=>{

  const id = parseInt(req.params.id)
  const { new_rate } = req.body

  if (!new_rate) return res.status(400).json("Missing fields: nueva calificacion")
  pool.query('SELECT rate, times_rated FROM Organizacion WHERE id_organizacion = $1', [id], 
    (error, result) => {
      if(error) return res.status(500).json({msg: "An error ocurred while making the query", error});
      if (result.rowCount == 0) return res.status(400).json({msg: "Bad request: There's no organization related to that id"})
      console.log(result.rows[0].times_rated)
      const new_times_updated = (result.rows[0].times_rated == null || result.rows[0].times_rated == 'NaN')? ((result.rows[0].rate == null || result.rows[0].rate == 'NaN')? 1: 2): parseInt(result.rows[0].times_rated)+1
      const rate_to_set = (result.rows[0].rate == null || result.rows[0].rate == 'NaN') ? new_rate : ((new_times_updated-1)*parseFloat(result.rows[0].rate) + new_rate)/new_times_updated 
      pool.query('UPDATE Organizacion SET rate = $1, times_rated = $2 WHERE id_organizacion = $3;', [rate_to_set, new_times_updated, id], (error, results) => {
        if(error) return res.status(500).json({msg: "An error ocurred while making the query", error});
        return res.status(200).json({msg: "Organizaciones actualizadas: "+results.rowCount})
      })    
    }
  )
})

router.post('/finish-venta/:id', (req, res)=>{
  const id = parseInt(req.params.id)
  pool.query('SELECT * FROM FINISH_VENTA($1)', [id], (error, result) => {
    if (error) return res.status(500).json({msg: "An error ocurred while making the query", error});
    const queryResponse = result.rows[0]
    return res.status(parseInt(queryResponse.httpcode)).json({msg: queryResponse.details})
  })
})

router.get('/get-position-organization-rated/:id', (req, res)=>{
  const id = req.params.id
  pool.query('SELECT * FROM vendedor WHERE id_organizacion IS NOT NULL AND calificacion IS NOT NULL ORDER BY calificacion LIMIT 3;',[], (error, results)=>{
    if (error) return res.status(500).json({msg: "An error ocurred while making the query", error});
    let posicion
    for(let i = 0; i < results.rows.length; i++) if (results.rows[i].id == id) posicion = i+1
    if (posicion) return res.status(200).json({msg:'La organizacion esta en el top 3', posicion})
    return res.status(200).json({msg: 'La organizacion no esta en el top 3 o no ingreso el id de un vendedor organizacion'})
  })
})

router.get('/is-the-fastest-organization/:id', (req, res)=>{
  const id = parseInt(req.params.id)
  pool.query(
    'SELECT * FROM IS_THE_FASTEST_ORGANIZATION($1)', [id], 
    (error, results) => {
      if (error) return res.status(500).json({msg: "An error ocurred while making the query", error});
      return res.status(200).json(results.rows[0])
    }
    )
})

/* 
router.get('/update-insignias/:id', (req, res)=>{

}) */
/* 

Protected routes

*/
router.get('/main', verifyLoginToken, (req, res) => {
  jwt.verify(req.token, secretKey, (err, authData) => {
    if (err) return res.sendStatus(403);
    return res.status(200).json({ msg: 'Pagina principal', authData });
  });
});
/* 
FUNCTION
Token exists in header verifier
*/
function verifyLoginToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    //Forbidden
    return res.sendStatus(403);
  }
}

module.exports = router;
