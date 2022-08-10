import BarraLateral from "../BarraLateral";
import Header from "../Header";
import React, { useState } from "react";

function Reportar_Problema() {
  return (
    <div className="problemas">
      <br />
      <br />
      <br />
      <h1 className="reportar-fix-titulo">Reportar Un Problema</h1>
      <br />
      <br />
      <h2>¿En que podemos mejorar?</h2>
      <select id="opciones" name="opciones">
        <option value="Autenticación">Problema de autenticación</option>
        <option value="Usuario">Reportar un usuario</option>
        <option value="Producto">Problemas con un producto</option>
        <option value="Servicio">Problemas con el servicio</option>
        <option value="Web">Error en la página web</option>
        <option value="Otro">Otro</option>
      </select>
      <br />
      <br />
      <h2>Detalles</h2>
      <textarea
        id="message"
        name="message"
        rows="4"
        cols="50"
        resize="none"
        placeholder="Por favor incluir la mayor información posible"
      ></textarea>
      <br />
      <br />
      <button id="Enviar">Enviar</button>
    </div>
  );
}
export default Reportar_Problema;
