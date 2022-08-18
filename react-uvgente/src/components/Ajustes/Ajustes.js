import React, { useState, useEffect, useRef } from 'react';
import './Ajustes.css';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default function Ajustes() {
  const [entryState, setEntry] = useState('');

  const user = 'placeholder123';

  const eliminarCuenta = (user) => {
    console.log(`Se elimino la cuenta ${user}`);
  };

  const deshablilitarCuenta = (user) => {
    console.log(`Se desahbilito la cuenta ${user}`);
  };

  return (
    <Container className="Ajusteswrap">
      <p className="tituloAjustes">Ajustes de cuenta</p>
      <Container className="DataEntryWrap">
        <Container className="container-fluid">
          <p className="infotextAyuda">Correo Electronico: </p>
          <Container className="DataEntry">placeholder123</Container>
        </Container>

        <Container className="container-fluid">
          <p className="infotextAyuda">Contraseña: </p>
          <Container
            contentEditable={entryState === 'contraseña'}
            className={
              entryState === 'contraseña'
                ? 'DataEntry enabled passwordentry'
                : 'DataEntry passwordentry'
            }
          >
            123456789
          </Container>

          <Container
            className="editentry"
            onClick={() => setEntry('contraseña')}
          >
            Editar
          </Container>
        </Container>

        <Container className="container-fluid">
          <p className="infotextAyuda">Correo de contacto: </p>
          <Container
            contentEditable={entryState === 'correocontact'}
            className={
              entryState === 'correocontact' ? 'DataEntry enabled' : 'DataEntry'
            }
          >
            placeholder@gmail.com
          </Container>

          <Container
            className="editentry"
            onClick={() => setEntry('correocontact')}
          >
            Editar
          </Container>
        </Container>

        <Container className="container-fluid">
          <p className="infotextAyuda">Contacto principal: </p>
          <Container
            contentEditable={entryState === 'contactmain'}
            className={
              entryState === 'contactmain' ? 'DataEntry enabled' : 'DataEntry'
            }
          >
            +502 1234 5678
          </Container>

          <Container
            className="editentry"
            onClick={() => setEntry('contactmain')}
          >
            Editar
          </Container>
        </Container>
      </Container>

      <Container className="d-flex justify-content-evenly">
        <Button variant="warning" onClick={() => deshablilitarCuenta(user)}>
          Deshabilitar cuenta
        </Button>
        <Button variant="danger" onClick={() => eliminarCuenta(user)}>
          Eliminar cuenta
        </Button>
      </Container>
    </Container>
  );
}
