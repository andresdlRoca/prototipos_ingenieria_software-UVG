import add_image from '../media/agregar_Img.png'
import destacado_pfp from '../media/destacado_icon.png'
import picture_pfp from '../media/picture.png'

const Crear_publicacion = () => {
    return(
        <div id="inboxpage">

            <div id="pfp">
                <img src={add_image} alt="picadd_image" className='pfp_Crear_publicacion' />
                <img src={picture_pfp} alt="picadd_image" className='pfp_picture_publicacion' />
            </div>
            
            <div id="titles">
                <div id="crear_publicacion_text">Agregar Producto</div>
                <div id="titulo_text">Título</div>
                <input type ="text" id="input"></input>
                <div id="all_text">Precio</div>
                <input type ="text" id="input"></input>
                <div id="all_text">Categoría</div>
                <div id="scroll_down">Elige una categoría
                    <div id="triangle"></div>
                </div>
                <div id="all_text">Estado</div>
                <div id="scroll_down">Elija el estado del producto
                    <div id="triangle"></div>
                </div>
                <div id="all_text">Descripción</div>
                <input type ="text" id="input_descr"></input>
                <button id="publicacion_btn">Publicar</button>

                <div class="switch-button">
                    <input type="checkbox" name="switch-button" id="switch-label" class="switch-button__checkbox"></input>
                    <label for="switch-label" class="switch-button__label"></label>
                    <div id="switch_text">Destacar Publicación</div>
                    <img src={destacado_pfp} alt="picadd_image" className='pfp_destacado' />
                </div>
            </div>
        </div>
    )
}

Crear_publicacion.defaultProps = {
   
}

export default Crear_publicacion