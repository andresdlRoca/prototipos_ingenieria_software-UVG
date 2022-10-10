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
//Tests done
router.post('/create-departamento', (req, res)=>{
  const { nombre, descripcion } = req.body;
  if (!nombre) return res.status(400).json({msg: 'Departamento must have a name'})
  const query = descripcion ? 'INSERT INTO departamento (nombre, descripcion) VALUES ($1, $2) RETURNING id': 'INSERT INTO departamento (nombre) VALUES ($1) RETURNING id' 
  const parameters = descripcion ? [nombre, descripcion]: [nombre]
  const msg  = descripcion ? 'Departamento creado': 'Departamento creado sin descripcion'
  myPool.query(query, parameters, (error, result)=>{
    if (error) return res.status(500).json({msg: 'Erro while making query', error})
    return res.status(201).json({msg, result: result.rows[0]})
  })

})
//Tests done
router.post('/create-class', (req, res)=>{
  const { nombre, descripcion, id_departamento } = req.body;
  if (!id_departamento) return res.status(400).json({msg: 'Must have the id of the department it belongs'})
  if (!nombre) return res.status(400).json({msg: 'Must have a name'})
  const query = descripcion ? 'INSERT INTO clase (nombre, descripcion, id_departamento ) VALUES ($1, $2, $3) RETURNING id': 'INSERT INTO clase (nombre, id_departamento) VALUES ($1, $2) RETURNING id' 
  const parameters = descripcion ? [nombre, descripcion, id_departamento]: [nombre, id_departamento]
  const msg  = descripcion ? 'Clase creada': 'Clase creado sin descripcion'
  myPool.query(query, parameters, (error, result) =>{
    if (error) return res.status(500).json({msg: 'An error occured while making the query', error})
    return res.status(201).json({msg, result: result.rows[0]})
  })
  

})
//Tests done
router.get('/class/:id', (req, res) => {
  const id = parseInt(req.params.id);
  myPool.query('SELECT * FROM Clase WHERE id = $1', [id], (error, results) => {
    //if (error) return res.status(500).json({ msg: 'An unexpected error ocurred', error });
    return res.status(200).json({class: results.rows[0], count: results.rowCount});
  });
});
//Tests done
router.get('/class', (req, res) => {
  myPool.query('SELECT * FROM Clase ORDER BY id ASC', (error, results) => {
    //if (error) return res.status(500).json({ msg: 'An unexpected error ocurred', error });
    return res.status(200).json(results.rows);
  });
});
//Tests done
router.post('/login', (req, res) => {
  let { email, password } = req.body;
  if (!email) return res.status(404).json({ msg: 'No se ingreso un usuario' });
  if (!password)
    return res.status(404).json({ msg: 'No se ingreso contraseña' });
  myPool.query(
    'SELECT * FROM Usuario WHERE email = $1',
    [email],
    (err, result) => {
      //if (err) return res.status(500).json({ msg: 'Error interno en la busqueda del usuario' });
      if (result.rows.length) {
        user = result.rows[0];
        bcrypt.compare(password, user.password, (error, same) => {
          //if (error) return res.status(500).json({msg: 'An error ocurred while decripting password. Try later. ',error});
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
      } else res.status(401).json({ msg: 'Usuario no encontrado' });
    }
  );
});
//Tests done
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
//Tests done
router.get('/get-products', (req, res) => {
  myPool.query(
    'SELECT producto.nombre AS title, producto.src_img, producto.descripcion AS description, producto.calificacion AS prod_rate, producto.precio AS price, usuario.username AS name FROM producto INNER JOIN vendedor ON vendedor.id = producto.id_vendedor INNER JOIN usuario ON vendedor.id_usuario = usuario.id',
    (error, results) => {
      //if (error) return res.status(500).json({ msg: 'An error ocurred while making the query', error });
      return res.status(200).json(results.rows);
    }
  );
});
//Tests done
router.post('/create-tutor/:id', (req, res)=>{
  const id = parseInt(req.params.id)
  myPool.query('INSERT INTO tutor (id_usuario) VALUES ($1) RETURNING id;', [id], (error, result)=>{
    if(error) return res.status(500).json({msg: 'An error ocurred while making the query', error})
    return res.status(201).json({msg: 'Tutor created succesfully', result: result.rows[0]})
  })
})
//Tests done
router.get('/get-tutors',  (req, res) => {
  myPool.query(
    'SELECT tutor.id,usuario.username AS name, tutor.calificacion AS calification, tutor.iscertificado AS isVerified, profile_pic AS image, telefono AS tel FROM tutor LEFT JOIN usuario ON tutor.id_usuario = usuario.id',
    (error, results) => {
      if (error) return res.status(500).json({ msg: 'An error ocurred while making the query', error });
      return res.status(200).json(results.rows);
    }
  );
});
//Tests done
router.post('/create-form-of-pamyment', (req, res)=>{
  const { forma_de_cobro } = req.body
  if (!forma_de_cobro) return res.status(400).json({msg: 'Missing fields on request'})
  myPool.query('INSERT INTO cobro (forma_de_cobro) VALUES ($1) RETURNING id', [forma_de_cobro], 
  (error, result)=>{
    if(error) res.status(500).json({msg: 'An error ocurred while making the query.'})
    return res.status(201).json({msg: 'Form of payment succesfully created', result: result.rows[0]})
  })
})
//Tests done
router.post('/relate-form-of-payment-and-tutor', (req, res)=>{
  const { id_tutor, id_cobro } = req.body
  if (!id_tutor) return res.status(400).json({msg: 'Must include a tutor id'})
  if (!id_cobro) return res.status(400).json({msg: 'Must include a form of payment id'})
  myPool.query('INSERT INTO rel_cobro_tutor (id_cobro, id_tutor) VALUES ($1, $2) RETURNING id', [parseInt(id_cobro), parseInt(id_tutor)], 
  (error, result)=>{
    if (error) return res.status(500).json({msg: "An error ocurred while making the query.", error})
    return res.status(200).json({msg: 'Related correctly', result: result.rows[0]})
  })
})
//Test done
router.get('/get-tutor-cobro/:id', (req, res) => {
  const id = parseInt(req.params.id);
  myPool.query('SELECT forma_de_cobro FROM rel_cobro_tutor LEFT JOIN cobro ON rel_cobro_tutor.id_cobro = cobro.id WHERE id_tutor = $1 ', [id],
    (error, formas_de_cobro_results) => {
      if (error) return res.status(500).json({ msg: 'An error ocurred while making the query', error });
      return res.status(200).json(formas_de_cobro_results.rows);
    }
  );
});
//Test done
router.post('/relate-tutor-and-class', (req, res)=>{
  const { id_class, id_tutor } = req.body
  if (!id_class) return res.status(400).json({msg: "Missing id_class"})
  if (!id_tutor) return res.status(400).json({msg: "Missing id_tutor"})
  myPool.query('INSERT INTO tutor_clase (id_clase, id_tutor) VALUES ($1, $2) RETURNING id', [id_class, id_tutor], 
  (error, result)=>{
    if (error) return res.status(500).json({msg: 'An error ocurred while making the query', error})
    return res.status(200).json({msg: 'Relation succesfullt created', result: result.rows[0]})
  })
})
//Test done
router.get('/get-tutor-class/:id', (req, res) => {
  const id = parseInt(req.params.id);
  myPool.query(
    'SELECT clase.nombre, performance FROM tutor_clase LEFT JOIN clase ON tutor_clase.id_clase = clase.id WHERE id_tutor = $1',
    [id],
    (error, clases_results) => {
      //if (error) return res.status(500).json({ msg: 'An error ocurred while making the query', error });
      return res.status(200).json(clases_results.rows);
    }
  );
});
//Test done
router.get('/get-user/:id', (req, res) =>{
  const id = parseInt(req.params.id)
  myPool.query('SELECT * FROM usuario WHERE id = $1;', [id], (err, result) =>{
    if (err) return res.status(500).json({msg: 'An error ocurred while making the query', err})
    if (result.rowCount==0) return res.status(400).json({msg: "Not user related to that id"})
    return res.status(200).json({msg: 'Succesfully found user', user : result.rows[0]})
  })
})
//Test done
router.get('/get-organizacion/:id', (req, res)=>{
  const id = parseInt(req.params.id)
  myPool.query('SELECT * FROM Organizacion WHERE id_organizacion = $1;', [id], (err, result) =>{
    if (err) return res.status(500).json({msg: 'An error ocurred while making the query', err})
    if (result.rowCount==0) return res.status(400).json({msg: "Not Organization related to that id"})
    return res.status(200).json({msg: 'Succesfully found Organization', user : result.rows[0]})
  })
})
//Paths pendings
router.get('/update-rating-organization/:id/:new_rate', (req, res)=>{

  const id = parseInt(req.params.id)
  const new_rate= parseInt(req.params.new_rate)

  if(!(new_rate<=5 && new_rate>=0 )) return res.status(400).json({msg: "Calificacion debe ser de 1 a 5"})
  myPool.query('SELECT rate, times_rated FROM Organizacion WHERE id_organizacion = $1', [id], 
    (error, result) => {
      if(error) return res.status(500).json({msg: "An error ocurred while making the query", error});
      if (result.rowCount == 0) return res.status(400).json({msg: "Bad request: There's no organization related to that id"})
      const new_times_updated = (result.rows[0].times_rated == null || result.rows[0].times_rated == 'NaN')? ((result.rows[0].rate == null || result.rows[0].rate == 'NaN')? 1: 2): parseInt(result.rows[0].times_rated)+1
      const rate_to_set = (result.rows[0].rate == null || result.rows[0].rate == 'NaN') ? new_rate : ((new_times_updated-1)*parseFloat(result.rows[0].rate) + new_rate)/new_times_updated 
      myPool.query('UPDATE Organizacion SET rate = $1, times_rated = $2 WHERE id_organizacion = $3;', [rate_to_set, new_times_updated, id], (error, results) => {
        if(error) return res.status(500).json({msg: "An error ocurred while making the query", error});
        return res.status(200).json({msg: "Organizaciones actualizadas: "+results.rowCount})
      })    
    }
  )
})
//Test done
router.post('/start-venta', (req, res)=>{
  const {id_vendedor, id_producto, id_cliente} = req.body
  if (!id_vendedor) return res.status(400).json({msg: 'Must indicate id_vendedor on body'})
  if (!id_producto) return res.status(400).json({msg: 'Must indicate id_producto on body'})
  if (!id_cliente) return res.status(400).json({msg: 'Must indicate id_cliente on body'})
  myPool.query('INSERT INTO venta (id_vendedor, id_producto, id_cliente, fecha_inicio) VALUES ($1, $2, $3, NOW()) RETURNING id;', [id_vendedor, id_producto, id_cliente],
  (error, result)=>{
    if(error) return res.status(500).json({msg: "An error ocurred while making the query", error})
    return res.status(200).json({msg: 'Succesfully started venta', result: result.rows[0]})
  })

})
//Test done
router.post('/finish-venta/:id', (req, res)=>{
  const id = parseInt(req.params.id)
  myPool.query('SELECT * FROM FINISH_VENTA($1)', [id], (error, result) => {
    //if (error) return res.status(500).json({msg: "An error ocurred while making the query", error});
    const queryResponse = result.rows[0]
    return res.status(parseInt(queryResponse.httpcode)).json({msg: queryResponse.details})
  })
})
//Pending testing
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
//Pending testing
router.put('/update-porcentajes-insignias', (req, res) => {
  myPool.query('CALL calculate_porcentajes_rareza()', [], (err, results) =>{
    if (err) return res.status(500).json({ msg: 'An error ocurred while making the query', err });  })
    return res.status(200).json({msg: 'Procedure executed correctly'})
})
//Pending testing
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
 
//Pending testing
router.get('/get-colaboradores-of-organization/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    myPool.query('SELECT usuario.id, usuario.username, usuario.email, usuario.nombre, usuario.apellido, usuario.id_tutor, usuario.id_vendedor, usuario.descripcion FROM Organizacion_Colaborador INNER JOIN usuario ON id_usuario = usuario.id WHERE Organizacion_Colaborador.id_organizacion = $1;',
    [id], (error, results) => {
      if (error) return res.status(500).json({ msg: 'An error ocurred while making the query', error });
      if (!results.rowCount) return res.status(200).json({msg: 'No se encontraron colaboradores para dicha organizacion'})
      return res.status(200).json(results.rows)
    })
})
//Test done
router.post('/create-vendedor-on-organizacion/:id', (req, res)=>{
  const id = parseInt(req.params.id)
  myPool.query('INSERT INTO vendedor (id_organizacion) VALUES ($1) RETURNING id', [id], (error, result)=>{
    if (error) return res.status(500).json({msg: "Error durign query", error})
    return res.status(200).json({msg: 'Vendedor creado exitosamente', result: result.rows[0]})
  })
})
//Test done
router.post('/create-vendedor-on-user/:id', (req, res)=>{
  const id = parseInt(req.params.id)
  myPool.query('INSERT INTO vendedor (id_usuario) VALUES ($1) RETURNING id', [id], (error, result)=>{
    if (error) return res.status(500).json({msg: "Error durign query", error})
    return res.status(200).json({msg: 'Vendedor creado exitosamente', result: result.rows[0]})
  })
})
//Test done
router.put('/clean-users-table', (req, res)=>{
  myPool.query('DELETE FROM usuario;', [], (error, results)=>{
    //if(error) return res.status(500).json({msg: 'An error happend while making the query.', error})
    return res.status(200).json({msg: 'Deletion completed', count: results.rowCount})
  })
})
//Test done
router.put('/clean-organizacion-table', (req, res)=>{
  myPool.query('DELETE FROM organizacion;', [], (error, results)=>{
    //if(error) return res.status(500).json({msg: 'An error happend while making the query.', error})
    return res.status(200).json({msg: 'Deletion completed', count: results.rowCount})
  })
})
//Test done
router.put('/clean-vendedor-table', (req, res)=>{
  myPool.query('DELETE FROM vendedor;', [], (error, results)=>{
    //if(error) return res.status(500).json({msg: 'An error happend while making the query.', error})
    return res.status(200).json({msg: 'Deletion completed', count: results.rowCount})
  })
})
//Test done
router.put('/clean-bitacora_ventas-table', (req, res)=>{
  myPool.query('DELETE FROM bitacora_ventas;', [], (error, results)=>{
    //if(error) return res.status(500).json({msg: 'An error happend while making the query.', error})
    return res.status(200).json({msg: 'Deletion completed', count: results.rowCount})
  })
})
//Test done
router.put('/clean-ventas', (req, res)=>{
  myPool.query('DELETE FROM bitacora_ventas;', [], (error, results)=>{
    //if(error) return res.status(500).json({msg: 'An error happend while making the query.', error})
    return res.status(200).json({msg: 'Deletion completed', count: results.rowCount})
  })
})
//Test done
router.put('/clean-producto', (req, res)=>{
  myPool.query('DELETE FROM producto;', [], (error, results)=>{
    //if(error) return res.status(500).json({msg: 'An error happend while making the query.', error})
    return res.status(200).json({msg: 'Deletion completed', count: results.rowCount})
  }) 
})
//Test done
router.put('/clean-departamento', (req, res)=>{
  myPool.query('DELETE FROM departamento;', [], (error, results)=>{
    //if(error) return res.status(500).json({msg: 'An error happend while making the query.', error})
    return res.status(200).json({msg: 'Deletion completed', count: results.rowCount})
  }) 
})
//Test done
router.put('/clean-clase', (req, res)=>{
  myPool.query('DELETE FROM clase;', [], (error, results)=>{
    //if(error) return res.status(500).json({msg: 'An error happend while making the query.', error})
    return res.status(200).json({msg: 'Deletion completed', count: results.rowCount})
  }) 
})
//Test done
router.put('/clean-reports', (req, res)=>{
  myPool.query('DELETE FROM reporte;', [], (error, results)=>{
    //if(error) return res.status(500).json({msg: 'An error happend while making the query.', error})
    return res.status(200).json({msg: 'Deletion completed', count: results.rowCount})
  }) 
})
//Test done
router.put('/clean-tutor', (req, res)=>{
  myPool.query('DELETE FROM tutor;', [], (error, results)=>{
    //if(error) return res.status(500).json({msg: 'An error happend while making the query.', error})
    return res.status(200).json({msg: 'Deletion completed', count: results.rowCount})
  }) 
})
//Test done
router.put('/clean-cobro', (req, res)=>{
  myPool.query('DELETE FROM cobro', [], (error, results)=>{
    //if(error) return res.status(500).json({msg: 'An error happend while making the query.', error})
    return res.status(200).json({msg: 'Deletion completed', count: results.rowCount})
  })
})
//Test done
router.put('/clean-rel_cobro_tutor', (req, res)=>{
  myPool.query('DELETE FROM rel_cobro_tutor', [], (error, results)=>{
    //if(error) return res.status(500).json({msg: 'An error happend while making the query.', error})
    return res.status(200).json({msg: 'Deletion completed', count: results.rowCount})
  }) 
})
//Test done
router.put('/clean-tutor_clase', (req, res)=>{
  myPool.query('DELETE FROM tutor_clase', [], (error, results)=>{
    //if(error) return res.status(500).json({msg: 'An error happend while making the query.', error})
    res.status(200).json({msg: 'Deletion completed', count: results.rowCount})
  }) 
})

module.exports = router;
