const bcrypt = require('bcrypt');
const {pool, pool_test} = require('../../pg-conection-local');//require('../../db-pg-config');
const {NODE_ENV} = process.env
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const secretKey = 'wowMissawow';
const saltRounds = 10;
const myPool = (NODE_ENV== 'test ' || NODE_ENV== 'development ')? pool_test: pool
//Tests done
router.post('/register', (req, response) => {
  let { username, email, password } = req.body;
  if (!(username && email && password))
    return response
      .status(400)
      .json({msg: 'No se han llenado los campos necesarios para el registro'});
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) return response.status(500).json({ msg: 'DB error ocurred', err });
    myPool.query(
      'INSERT INTO usuario (username,email, password) VALUES ($1, $2, $3) RETURNING id',
      [username, email, hash],
      (error, result) => {
        if (error)
          {
            return response
            .status(500)
            .json({  msg: "Error on query",  error});}
        return response.status(201).json({msg: 'Registro realizado con exito', result: result.rows[0]});
      }
    );
  });
});
//Tests done
router.post('/new-product', (req, res) => {
  let { nombre, precio, disponible, id_vendedor, descripcion } = req.body;
  precio = precio ? 0 : precio;
  if (!(nombre && disponible && id_vendedor && descripcion)) 
  return res.status(404).json({ msg: 'No se completaron campos suficientes' });
  myPool.query('INSERT INTO Producto (nombre, precio, disponible, id_vendedor, descripcion) VALUES ($1, $2, $3, $4, $5) RETURNING id',[nombre, precio, disponible, id_vendedor, descripcion],
    (error, results) => {
      if (error) return res.status(500).json({msg: 'An error occured while making the query', error});
      return res.status(201).json({ msg: 'El producto fue registrado con exito', result: results.rows[0]})
    });
});
//Tests done
router.post('/registrar-organizaciones', (req, res) => {
  let { username, password, email, descripcion, no_telefono, id_lider } = req.body;
  if (!(username && password && email && descripcion && no_telefono )) 
  return res.status(404).json({ msg: 'Missing fields' });
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) return res.status(500).json({msg: "An unexpected error ocurred while hashing password"})
    myPool.query(
      'INSERT INTO organizacion (user_name, password, email, no_telefono, descripcion, isActive, id_usuario_lider) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id_organizacion ',
      [username, hash, email, no_telefono, descripcion, true, id_lider],
      (error, results) => {
        if (error) return res.status(500).json({msg: 'An error occured while making the query',error});
        return res.status(201).json({msg: 'La organizacion registrado con exito', result: results.rows[0]});
      }
  );
  })
});

router.get('/class/:id', (req, res) => {
  const id = parseInt(req.params.id);
  myPool.query('SELECT * FROM Clase WHERE id = $1', [id], (error, results) => {
    if (error)
      res
        .status(500)
        .json({ msg: 'An unexpected error ocurred', error: error });
    else res.status(200).json(results.rows);
  });
});

router.get('/class', (req, res) => {
  myPool.query('SELECT * FROM Clase ORDER BY id ASC', (error, results) => {
    if (error)
      res.status(500).json({ msg: 'An unexpected error ocurred', error });
    else res.status(200).json(results.rows);
  });
});

router.post('/create-departamento/:nombre', (req, res)=>{

})

router.post('/login', (req, res) => {
  let { email, password } = req.body;
  if (!email) return res.status(404).json({ msg: 'No se ingreso un usuario' });
  if (!password)
    return res.status(404).json({ msg: 'No se ingreso contraseña' });
  myPool.query(
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

  myPool.query(
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
  myPool.query(
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
  myPool.query(
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
  myPool.query(
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
  myPool.query(
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
  myPool.query('SELECT * FROM usuario WHERE id = $1;', [id], (err, result) =>{
    if (err) return res.status(500).json({msg: 'An error ocurred while making the query', err})
    if (result.rowCount==0) return res.status(404).json({msg: "Not user related to that id"})
    return res.status(200).json({msg: 'Succesfully found user', user : result.rows[0]})
  })
})

router.get('/get-organizacion/:id', (req, res)=>{
  const id = parseInt(req.params.id)
  myPool.query('SELECT * FROM Organizacion WHERE id = $1;', [id], (err, result) =>{
    if (err) return res.status(500).json({msg: 'An error ocurred while making the query', err})
    if (result.rowCount==0) return res.status(404).json({msg: "Not Organization related to that id"})
    return res.status(200).json({msg: 'Succesfully found Organization', user : result.rows[0]})
  })
})

router.post('/new-organizacion', (req, res) => {
  let { user_name, id_usuario_lider, email, no_telefono } = req.body;

  if (!user_name || !id_usuario_lider || !email || !no_telefono )
    return res.status(404).json({ msg: 'Missing fields on request of creation' });
  myPool.query('SELECT * FROM usuario WHERE id = $1;', [id_usuario_lider], (err, result) =>{
      if (err) return res.status(500).json({msg: 'An error ocurred while making the query', err})
      if (result.rowCount==0) return res.status(404).json({msg: "Not user related to that id"})
      myPool.query(
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

//DONE TESTING
//Se llama cada que alguien califica una organizacion
router.get('/update-rating-organization/:id/:new_rate', (req, res)=>{

  const id = parseInt(req.params.id)
  const new_rate= parseInt(req.params.new_rate)

  if (!new_rate) return res.status(400).json({msg: "Missing fields: nueva calificacion"})

  if(!(new_rate<=5 && new_rate>=0 )) return res.status(400).json({msg: "Calificacion debe ser de 1 a 5"})
  myPool.query('SELECT rate, times_rated FROM Organizacion WHERE id_organizacion = $1', [id], 
    (error, result) => {
      if(error) return res.status(500).json({msg: "An error ocurred while making the query", error});
      if (result.rowCount == 0) return res.status(400).json({msg: "Bad request: There's no organization related to that id"})
      console.log(result.rows[0].times_rated)
      const new_times_updated = (result.rows[0].times_rated == null || result.rows[0].times_rated == 'NaN')? ((result.rows[0].rate == null || result.rows[0].rate == 'NaN')? 1: 2): parseInt(result.rows[0].times_rated)+1
      const rate_to_set = (result.rows[0].rate == null || result.rows[0].rate == 'NaN') ? new_rate : ((new_times_updated-1)*parseFloat(result.rows[0].rate) + new_rate)/new_times_updated 
      myPool.query('UPDATE Organizacion SET rate = $1, times_rated = $2 WHERE id_organizacion = $3;', [rate_to_set, new_times_updated, id], (error, results) => {
        if(error) return res.status(500).json({msg: "An error ocurred while making the query", error});
        return res.status(200).json({msg: "Organizaciones actualizadas: "+results.rowCount})
      })    
    }
  )
})

router.post('/finish-venta/:id', (req, res)=>{
  const id = parseInt(req.params.id)
  myPool.query('SELECT * FROM FINISH_VENTA($1)', [id], (error, result) => {
    if (error) return res.status(500).json({msg: "An error ocurred while making the query", error});
    const queryResponse = result.rows[0]
    return res.status(parseInt(queryResponse.httpcode)).json({msg: queryResponse.details})
  })
})

router.get('/get-position-organization-rated/:id', (req, res)=>{
  const id = req.params.id
  myPool.query('SELECT * FROM vendedor WHERE id_organizacion IS NOT NULL AND calificacion IS NOT NULL ORDER BY calificacion LIMIT 3;',[], (error, results)=>{
    if (error) return res.status(500).json({msg: "An error ocurred while making the query", error});
    let posicion
    for(let i = 0; i < results.rows.length; i++) if (results.rows[i].id == id) posicion = i+1
    if (posicion) return res.status(200).json({msg:'La organizacion esta en el top 3', posicion})
    return res.status(200).json({msg: 'La organizacion no esta en el top 3 o no ingreso el id de un vendedor organizacion'})
  })
})
 
//DONE TESTING
router.get('/is-the-fastest-organization/:id', (req, res)=>{
  const id = parseInt(req.params.id)
  myPool.query(
    'SELECT * FROM IS_THE_FASTEST_ORGANIZATION($1)', [id], 
    (error, results) => {
      if (error) return res.status(500).json({msg: "An error ocurred while making the query", error});
      return res.status(200).json(results.rows[0])
    }
    )
})

router.put('/update-porcentajes-insignias', (req, res) => {
  myPool.query('CALL calculate_porcentajes_rareza()', [], (err, results) =>{
    if (err) return res.status(500).json({ msg: 'An error ocurred while making the query', err });  })
    return res.status(200).json({msg: 'Procedure executed correctly'})
})

router.get('/ligar-organizacion-colaborador/:id_o/:id_u/:rol', (req, res) => {
  const id_usuario = parseInt(req.params.id_u);
  const id_organizacion = parseInt(req.params.id_o);
  const rol = req.params.rol
  myPool.query('INSERT INTO Organizacion_Colaborador(id_organizacion, id_usuario, rol) VALUES ($1, $2, $3)', [id_organizacion, id_usuario, rol], 
  (error, result) =>{
    if (error) return res.status(500).json({ msg: 'An error ocurred while making the query', error });
    return res.status(200).json({msg: 'Colaborador ligado a organizador correctamente', result})
  }
  )
})
 
// DONE TESTING
router.get('/get-colaboradores-of-organization/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    myPool.query('SELECT usuario.id, usuario.username, usuario.email, usuario.nombre, usuario.apellido, usuario.id_tutor, usuario.id_vendedor, usuario.descripcion FROM Organizacion_Colaborador INNER JOIN usuario ON id_usuario = usuario.id WHERE Organizacion_Colaborador.id_organizacion = $1;',
    [id], (error, results) => {
      if (error) return res.status(500).json({ msg: 'An error ocurred while making the query', error });
      if (!results.rowCount) return res.status(200).json({msg: 'No se encontraron colaboradores para dicha organizacion'})
      return res.status(200).json(results.rows)
    })
})
  
router.post('/delete-user-by-username/:username', (req, res)=>{
  const username = req.params.username
  myPool.query('DELETE FROM usuario WHERE username = $1', [username], (error, result)=>{
    if (error) return res.status(500).json({ msg: 'An error ocurred while making the query', error });
    if (result.rowCount===0) res.status(400).json({msg: 'No existe ningun usuario con ese nombre'})
    return res.status(200).json({msg: 'Usuarios eliminados', count : result.rowCount })
  })
})

router.post('/create-vendedor-on-organizacion/:id', (req, res)=>{
  const id = parseInt(req.params.id)
  myPool.query('INSERT INTO vendedor (id_organizacion) VALUES ($1) RETURNING id', [id], (error, result)=>{
    if (error) return res.status(500).json({msg: "Error durign query", error})
    return res.status(200).json({msg: 'Vendedor creado exitosamente', result: result.rows[0]})
  })
})

router.post('/create-vendedor-on-user/:id', (req, res)=>{
  const id = parseInt(req.params.id)
  myPool.query('INSERT INTO vendedor (id_usuario) VALUES ($1) RETURNING id', [id], (error, result)=>{
    if (error) return res.status(500).json({msg: "Error durign query", error})
    return res.status(200).json({msg: 'Vendedor creado exitosamente', result: result.rows[0]})
  })
})

router.put('/clean-users-table', (req, res)=>{
  myPool.query('DELETE FROM usuario;', [], (error, results)=>{
    if(error) return res.status(500).json({msg: 'An error happend while making the query.', code: error.code, details: error.details})
    res.status(200).json({msg: 'Deletion completed', count: results.rowCount})
  })
})

router.put('/clean-organizacion-table', (req, res)=>{
  myPool.query('DELETE FROM organizacion;', [], (error, results)=>{
    if(error) return res.status(500).json({msg: 'An error happend while making the query.', code: error.code, details: error.details})
    res.status(200).json({msg: 'Deletion completed', count: results.rowCount})
  })
})

router.put('/clean-vendedor-table', (req, res)=>{
  myPool.query('DELETE FROM vendedor;', [], (error, results)=>{
    if(error) return res.status(500).json({msg: 'An error happend while making the query.', code: error.code, details: error.details})
    res.status(200).json({msg: 'Deletion completed', count: results.rowCount})
  })
})

router.put('/clean-bitacora_ventas-table', (req, res)=>{
  myPool.query('DELETE FROM bitacora_ventas;', [], (error, results)=>{
    if(error) return res.status(500).json({msg: 'An error happend while making the query.', code: error.code, details: error.details})
    res.status(200).json({msg: 'Deletion completed', count: results.rowCount})
  })
})

router.put('/clean-ventas', (req, res)=>{
  myPool.query('DELETE FROM bitacora_ventas;', [], (error, results)=>{
    if(error) return res.status(500).json({msg: 'An error happend while making the query.', code: error.code, details: error.details})
    res.status(200).json({msg: 'Deletion completed', count: results.rowCount})
  })
})

router.put('/clean-producto', (req, res)=>{
  myPool.query('DELETE FROM producto;', [], (error, results)=>{
    if(error) return res.status(500).json({msg: 'An error happend while making the query.', code: error.code, details: error.details})
    res.status(200).json({msg: 'Deletion completed', count: results.rowCount})
  }) 
})

module.exports = router;
