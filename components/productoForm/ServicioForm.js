//<div></div>

const ServicioForm = ({ handleClick }) => {
  return (
    <div className="productoForm">
      <form>
        <label htmlFor="nombre_del_Servicio">Nombre del Servicio:</label>
        <input
          type="text"
          id="nombre_del_Servicio"
          name="nombre_del_Servicio"
          minLength="5"
          maxLength="20"
          placeholder="Agregue un nombre"
          required
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
          name="descripcion_del_Servicio"
          minLength="10"
          maxLength="20"
          placeholder="Agregue una descripcion"
          required
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
