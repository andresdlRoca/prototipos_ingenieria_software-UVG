import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function RegistroOrg() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const salir = (event) => {};

  return (
    <Container>
      <h1>Formulario de registro de organizacion</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre de la organizacion</Form.Label>
          <Form.Control required type="text" placeholder="Nombre" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Departamento</Form.Label>
          <Form.Control required type="text" placeholder="Departamento" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username del propietario</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Row className="mb-3 text-center">
          <Col>
            <Button type="button" onClick={salir()} variant="danger">
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
