
const OpcionesDeVenta = () => {
    return (
        <div className="opcionesDeVenta">
            <div className="opcionDeVenta">
                <input type="radio" className="productoOpcion" id="opcionParaProducto" name="category"/>
                <label for="opcionParaProducto">Producto</label>
            </div>
            <div className="opcionDeVenta">
                <input type="radio" className="servicioOpcion" id="opcionParaServicio" name="category"/>
                <label for="opcionParaServicio">Servicio</label>
            </div>
        </div>
    );
}

OpcionesDeVenta.props = {

}

export default OpcionesDeVenta