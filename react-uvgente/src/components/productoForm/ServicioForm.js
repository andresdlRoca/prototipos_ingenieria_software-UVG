//<div></div>
import React, { useState } from 'react';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const ServicioForm = ({ handleClick }) => {
  const MySwal = withReactContent(Swal);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState(0.01);

  const handleSubmit = ($event) => {
    $event.preventDefault();
    let product = JSON.stringify({
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      form: 'servicio',
    });
    fetch('http://localhost:8080/vender', {
      method: 'POST',
      mode: 'cors',
      body: product,
      headers: {
        'Content-Type': 'application/json',
      },
      referrerPolicy: 'no-referrer',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === 'El producto fue registrado con exito') {
          MySwal.fire({
            icon: 'success',
            title: 'Registro',
            text: data.msg,
          });
        } else {
          MySwal.fire({
            icon: 'warning',
            title: 'Ups...',
            text: data.msg,
          });
        }
      });
  };

  return (
    <div className="productoForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre_del_Servicio">Nombre del Servicio:</label>
        <input
          type="text"
          id="nombre_del_Servicio"
          name="nombre_del_Servicio"
          minLength="5"
          maxLength="20"
          placeholder="Agregue un nombre"
          required
          onChange={($event) => {
            setNombre($event.target.value);
          }}
        />
        <label htmlFor="descripcion_del_Servicio">
          Descripcion del Servicio:
        </label>
        <input
          type="text"
          id="descripcion_del_Servicio"
          name="descripcion_del_Servicio"
          minLength="10"
          maxLength="50"
          placeholder="Agregue una descripcion"
          required
          onChange={($event) => {
            setDescripcion($event.target.value);
          }}
        />
        <label htmlFor="precio_del_Servicio">Precio: (en quetzales)</label>
        <input
          type="number"
          name="name"
          id="precio_del_Servicio"
          min="0.01"
          max="9999.99"
          step="0.01"
          placeholder="100.00"
          required
          onChange={($event) => {
            setPrecio($event.target.value);
          }}
        />
        {/* <label htmlFor="nombre_del_Servicio">Foto del Servicio:</label>
        <input
          type="file"
          required
          accept="image/png, image/jpeg"
          className="custom-file-input"
        /> */}
        <label htmlFor="descripcion_del_Servicio">Categoría:</label>
        <input
          type="text"
          id="descripcion_del_Servicio"
          data-testid="descripcion_del_Servicio"
          name="descripcion_del_Servicio"
          minLength="10"
          maxLength="20"
          placeholder="Agregue una descripcion"
          required
          onChange={($event) => {
            setDescripcion($event.target.value);
          }}
        />
        <div className="botonesForm">
          <input
            type="button"
            value="Cancelar"
            className="botonCancelar"
            onClick={handleClick}
          />
          <input
            type="submit"
            data-testid="submitServicioForm"
            id="submitServicioForm"
            value="Siguiente"
            className="botonPublicar"
          />
        </div>
      </form>
    </div>
  );
};

ServicioForm.props = {};

export default ServicioForm;
