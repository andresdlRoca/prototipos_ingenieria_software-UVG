//<div></div>

const Producto_Form = () => {
    return (
        <div className="productoForm">
            <form>
                <div className="productoFormOpcion  ">
                    <label>
                        Nombre:
                        <input type="text" name="name" className=""/>
                    </label>
                </div> 
                
                <div className="productoFormOpcion  ">
                    <label>
                        Descripcion del producto:
                        <input type="text" name="name" />
                    </label>
                </div>
                
            
                <div className="productoFormOpcion  ">
                    <label>
                        Precio:
                        <input type="text" name="name" />
                    </label>
                </div>
                
                <div className="productoFormOpcion  ">
                    <label>
                        Foto del producto:
                    </label>
                    <input type="submit" value="Subir archivo" />
                </div>

                <div className="productoFormOpcion">
                    <input type="submit" value="Cancelar" className="botonCancelar"/>
                    <input type="submit" value="Siguiente" className="botonPublicar"/>
                </div>
                
            </form>
        </div>
    );
}

Producto_Form.props = {

}

export default Producto_Form