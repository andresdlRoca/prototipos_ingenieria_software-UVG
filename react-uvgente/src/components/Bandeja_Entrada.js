import add_image from '../media/agregar_img.jpg'
import lista_icono from '../media/lista_icono.png'
import precio_pfp from '../media/precio_icon.jpg'
import categoria_pfp from '../media/categoria_icon.jpg'
import estado_pfp from '../media/estado_icon.jpg'
import destacado_pfp from '../media/destacado_icon.jpg'

const Bandeja_Entrada = () => {
    return(
        <div id="inboxpage">
            <div id="pfp">
                <img src={add_image} alt="picadd_image" className='pfp_Bandeja_Entrada' />
            </div>
            <div id="profileinfo">
                <div id="Productname">*Título:____________________*</div>
                <div id="Descripcion">
                    <p>Descripción:</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra mi a fringilla posuere. Aenean pulvinar, dui nec ultrices cursus, tellus lectus fermentum lacus, sed finibus enim mauris ut sapien. Phasellus vulputate nulla ac sollicitudin ultricies. Nam ultricies pellentesque elementum. Aliquam iaculis mauris diam, sed volutpat elit porta quis. Ut efficitur vulputate dictum. Morbi aliquam vehicula molestie. Fusce lacinia dapibus ante non luctus.</p>
                </div>
            </div>
            <div id="inbox">
                <div id="headerinbox">
                    <p id="tituloinbox">Datos de venta</p>
                    <img src={lista_icono} alt="listaiconbox" className='inboxIcon' />
                </div>
                <div className="inboxMessages">
                    <div className="Messages">
                        <img src={precio_pfp} alt="pfp1" className='mail_pfp' />
                        <p>Precio</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra mi a fringilla posuere. Aenean pulvinar, dui nec ultrices cursus, tellus lectus fermentum lacus, sed finibus enim mauris ut sapien. Phasellus vulputate nulla ac sollicitudin ultricies. </p>
                    </div>
                    <div className="Messages">
                        <img src={categoria_pfp} alt="pfp2" className='mail_pfp' />
                        <p>Categoría  ᐁ</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra mi a fringilla posuere. Aenean pulvinar, dui nec ultrices cursus, tellus lectus fermentum lacus, sed finibus enim mauris ut sapien. Phasellus vulputate nulla ac sollicitudin ultricies. </p>
                    </div>
                    <div className="Messages">
                        <img src={estado_pfp} alt="pfp3" className='mail_pfp' />
                        <p>Estado  ᐁ</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra mi a fringilla posuere. Aenean pulvinar, dui nec ultrices cursus, tellus lectus fermentum lacus, sed finibus enim mauris ut sapien. Phasellus vulputate nulla ac sollicitudin ultricies. </p>
                    </div>
                    <div className="Messages">
                        <img src={destacado_pfp} alt="pfp3" className='mail_pfp' />
                        <p>Destacar Publicación  ᐁ</p>
                        <p> </p>
                        <p>Si/no </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

Bandeja_Entrada.defaultProps = {
   
}

export default Bandeja_Entrada