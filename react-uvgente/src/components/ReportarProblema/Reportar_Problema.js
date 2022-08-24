import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import { GoReport } from 'react-icons/go';

const MySwal = withReactContent(Swal);

function Reportar_Problema() {
  function sendReport() {
    let mensaje = document.getElementById('message').value;
    let tipo = document.getElementById('opciones').value;
    if (mensaje) {
      axios
        .post('http://localhost:8080/new-report', { tipo, mensaje })
        .then((res) => {
          console.log(res.status);
          if (res.status !== 200) {
            MySwal.fire({
              icon: 'error',
              title: 'Report',
              text: 'No se puedo enviar el reporte',
              footer: 'Lo siento, intenelo más tarde',
            });
          } else {
            MySwal.fire({
              icon: 'success',
              title: 'Reporte',
              text: 'Reporte enviado con éxito',
            }).then((document.getElementById('message').value = ''));
          }
        });
    } else {
      MySwal.fire({
        icon: 'warning',
        title: 'Hubo un problema',
        text: 'El campo de texto está vacio o hubo un problema al enviar el reporte.',
        footer: 'Por favor intenalo de nuevo o contacta soporte.',
      });
    }
  }

  return (
    <Container>
      <Container className="mt-4 mb-2 text-center">
        <GoReport size={50} />
      </Container>
      <h1 className="titulos">Reportar Un Problema</h1>
      <Container className="our_container_style">
        <p className="mt-3">¿En que podemos mejorar?</p>
        <Form.Select id="opciones" name="opciones">
          <option value="Autenticación">Problema de autenticación</option>
          <option value="Usuario">Reportar un usuario</option>
          <option value="Producto">Problemas con un producto</option>
          <option value="Servicio">Problemas con el servicio</option>
          <option value="Web">Error en la página web</option>
          <option value="Otro">Otro</option>
        </Form.Select>
        <p className="mt-3">Por favor, proporciona detalles del problema</p>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Cuentanos todo..."
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            id="message"
            name="message"
            rows="4"
            cols="50"
            resize="none"
            placeholder="Por favor incluir la mayor información posible"
          />
        </FloatingLabel>
      </Container>

      <Container className="d-flex justify-content-evenly mt-4 mb-4">
        <Button variant="warning" href="/login">
          Cancelar
        </Button>
        <Button variant="success" id="Enviar" onClick={() => sendReport()}>
          Enviar
        </Button>
      </Container>
    </Container>
  );
}
export default Reportar_Problema;
