//imports
//<div></div>
// nombre, precio, descripcion, foto

const Producto_Form = () => {
    <div>
        <form>
            <label>
                Nombre:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        
            <label>
                Descripcion del producto:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        
            <label>
                Precio:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        
            <label>
                Foto del producto:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
            
        </form>
    </div>
}

Producto_Form.props = {

}

export default Producto_Form