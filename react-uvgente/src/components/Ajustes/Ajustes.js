import React, { useState, useEffect, useRef } from 'react';
import './Ajustes.css';
import AjusteField from './AjusteField';
import { MdOutlineSettings } from 'react-icons/md';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function Ajustes() {
  const user = 'ye';

  const eliminarCuenta = (user) => {
    console.log(`Se elimino la cuenta ${user}`);
  };

  const deshablilitarCuenta = (user) => {
    console.log(`Se desahbilito la cuenta ${user}`);
  };

  return (
    <Container>
      <Container className="mt-4 text-center">
        <MdOutlineSettings size={50} />
      </Container>
      <p className="titulos">Ajustes de cuenta</p>
      <Container className="our_container_style">
        <AjusteField content="Username" variable_content="userRandom" />
        <AjusteField content="Nombre" variable_content="nombreee" />
        <AjusteField content="Apellido" variable_content="apellidoXDS" />
        <AjusteField content="Email" variable_content="emailxd@uvg.edu.gt" />
        <AjusteField
          content="Email de contacto"
          variable_content="email2xd@uvg.edu.gt"
        />
        <AjusteField content="Telefono" variable_content="userRandom" />
        <AjusteField content="Linkedin" variable_content="userRandom" />
        <AjusteField content="Github" variable_content="userRandom" />
        <AjusteField
          content="Descripcion breve"
          variable_content="userRandom"
        />
      </Container>

      <Container className="d-flex justify-content-evenly mt-4 mb-4">
        <Button
          variant="warning"
          data-testid="warning"
          onClick={() => deshablilitarCuenta(user)}
        >
          Deshabilitar cuenta
        </Button>
        <Button
          variant="danger"
          data-testid="danger"
          onClick={() => eliminarCuenta(user)}
        >
          Eliminar cuenta
        </Button>
      </Container>
    </Container>
  );
}
