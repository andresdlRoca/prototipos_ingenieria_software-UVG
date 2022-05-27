import add_image from '../media/agregar_Img.png'
import destacado_pfp from '../media/destacado_icon.png'
import picture_pfp from '../media/picture.png'

const Crear_publicacion = () => {
    return(
        <div id="inboxpage">

            <div id="pfp">
                <img src={add_image} alt="picadd_image" className='pfp_Crear_publicacion' />
            </div>
            
            <div id="titles">
                <div id="crear_publicacion_text">Sala</div>
                
                <div id="all_text">Hora de apertura</div>
                <div id="scroll_down">Elige una hora 
                    <div id="triangle"></div>
                </div>
                <div id="all_text">Hora de cierre</div>
                <div id="scroll_down">Elija una hora
                    <div id="triangle"></div>
                </div>
                <button id="publicacion_btn">Guardar</button>

                <div class="switch-button">
                    <input type="checkbox" name="switch-button" id="switch-label" class="switch-button__checkbox"></input>
                    <label for="switch-label" class="switch-button__label"></label>
                    <div id="switch_text">Abrir Manualmente</div>
                </div>
                <div class="switch-button2">
                    <input type="checkbox" name="switch-button2" id="switch-label" class="switch-button__checkbox"></input>
                    <label for="switch-label" class="switch-button__label"></label>
                    <div id="switch_text">Ciclo de apertura</div>
                </div>
            </div>
        </div>
    )
}

Crear_publicacion.defaultProps = {
   
}

export default Crear_publicacion