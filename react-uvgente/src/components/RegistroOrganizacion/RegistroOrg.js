import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Swal from 'sweetalert2';

function RegistroOrg() {
  const [validated, setValidated] = useState(false);
  const [nombre, setNombre] = useState('');
  const [passw, setPassw] = useState('');
  const [correo, setCorreo] = useState('');
  const [correoA, setCorreoA] = useState('');
  const [username, setUsername] = useState('');
  const [telefono, setTelefono] = useState('');
  const [imagen, setImagen] = useState('');

  const handleSubmit = ($event) => {
    const form = $event.currentTarget;
    if (form.checkValidity() === false) {
      $event.preventDefault();
      $event.stopPropagation();

      let org = JSON.stringify({
        nombre: nombre,
        passw: passw,
        correo: correo,
        correoA: correoA,
        username: username,
        telefono: telefono,
        imagen: imagen,
      });
      fetch('http://localhost:8080/registrar-organizaciones', {
        method: 'POST',
        mode: 'cors',
        body: org,
        headers: {
          'Content-Type': 'application/json',
        },
        referrerPolicy: 'no-referrer',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.msg === 'El producto fue registrado con exito') {
            Swal.fire({
              icon: 'success',
              title: 'Registro completado',
              text: data.msg,
            });
          } else {
            Swal.fire({
              icon: 'warning',
              title: 'Hubo un error',
              text: data.msg,
            });
          }
        });
    }
    setValidated(true);
  };

  return (
    <Container>
      <h1 className="titulos">Formulario de registro de organizacion</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre de la organizacion</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
            onChange={($event) => {
              setNombre($event.target.value);
            }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Departamento"
            onChange={($event) => {
              setPassw($event.target.value);
            }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="usuario@uvg.edu.gt"
            onChange={($event) => {
              setCorreo($event.target.value);
            }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Correo alterno</Form.Label>
          <Form.Control
            type="email"
            placeholder="usuario@uvg.edu.gt"
            onChange={($event) => {
              setCorreoA($event.target.value);
            }}
          />
          <Form.Control.Feedback>No es obligatorio...</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username para la organizacion</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
              onChange={($event) => {
                setUsername($event.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Telefono</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">tel.</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="telefono"
              aria-describedby="inputGroupPrepend"
              required
              maxLength="8"
              onChange={($event) => {
                if ($event.target.value.match('[0-9]+') != null) {
                  setTelefono($event.target.value);
                }
              }}
            />
            <Form.Control.Feedback type="invalid">
              Ingrese su numero de telefono o celular
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Foto de perfil</Form.Label>
          <Form.Control
            type="file"
            name="imagen"
            onChange={($event) => {
              setImagen($event.target.value);
            }}
          />
          <Form.Control.Feedback type="valid">
            No es obligatorio
          </Form.Control.Feedback>
        </Form.Group>

        <Row className="mb-4 mt-4 text-center">
          <Col>
            <Button type="button" href="/login" variant="danger">
              Cancelar
            </Button>
          </Col>
          <Col>
            <Button type="submit">Hecho</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default RegistroOrg;
