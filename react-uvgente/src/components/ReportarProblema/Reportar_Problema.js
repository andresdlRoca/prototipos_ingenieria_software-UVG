import BarraLateral from "../BarraLateral";
import Header from "../Header";
import React, { useState } from "react";
import axios from 'axios'
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const MySwal = withReactContent(Swal)

function Reportar_Problema() {
  function sendReport(){

    let mensaje = document.getElementById("message").value
    let tipo = document.getElementById("opciones").value
    if(mensaje)
    { 
      axios.post('http://localhost:8080/new-report', {tipo, mensaje}).then((res) =>{
        console.log(res.status)
        if(res.status!==200) {
          MySwal.fire({
            icon: "error",
            title: "Report",
            text: "No se puedo enviar el reporte",
            footer: "Lo siento, intenelo más tarde",
          })
        }
        else{
          MySwal.fire({
            icon: "success",
            title: "Reporte",
            text: 'Reporte enviado con éxito',

          }).then(
            document.getElementById("message").value = ""
          )
        }

      }
      )
    }else{
      MySwal.fire({
        icon: "warning",
        title: "Report",
        text: "El campo de texto está vacio",
        footer: "Por favor escribir un reporte antes de enviar.",
      })
    }
  }
  function changeReport($event){}
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
      <button id="Enviar" onClick={() => sendReport()}>Enviar</button>
    </div>
  );
}
export default Reportar_Problema;
