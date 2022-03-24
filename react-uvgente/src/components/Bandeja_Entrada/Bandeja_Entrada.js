import profile_pic from '../../media/cat_pp.jpg'
import mail_icon from '../../media/mail_icon.png'
import fulano_pfp from '../../media/fulano.jpg'
import gato_pfp from '../../media/gatopfpinbox.jpg'
import ferrari_pfp from '../../media/ferraripfp.jpg'
import MensajeUI from './MensajeUI.js'

const Bandeja_Entrada = () => {
    return(
        
        <div id="inboxpage">
            <MensajeUI />
            <div id="pfp">
                <img src={profile_pic} alt="profilepicbandejaentrada" className='pfp_Bandeja_Entrada' />
            </div>
            <div id="profileinfo">
                <div id="Username">Luis Pedro Gonzalez Aldana</div>
                <div id="Tipouser">Estudiante UVG</div>
                <div id="Descripcion">
                    <p>Sobre mi:</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra mi a fringilla posuere. Aenean pulvinar, dui nec ultrices cursus, tellus lectus fermentum lacus, sed finibus enim mauris ut sapien. Phasellus vulputate nulla ac sollicitudin ultricies. Nam ultricies pellentesque elementum. Aliquam iaculis mauris diam, sed volutpat elit porta quis. Ut efficitur vulputate dictum. Morbi aliquam vehicula molestie. Fusce lacinia dapibus ante non luctus.</p>
                </div>
            </div>
            <div id="inbox">
                <div id="headerinbox">
                    <p id="tituloinbox">Bandeja de entrada</p>
                    <img src={mail_icon} alt="mailiconinbox" className='inboxIcon' />
                </div>
                <div className="inboxMessages">
                    <div className="Messages">
                        <img src={fulano_pfp} alt="pfp1" className='mail_pfp' />
                        <p>Fulanito Fulano</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra mi a fringilla posuere. Aenean pulvinar, dui nec ultrices cursus, tellus lectus fermentum lacus, sed finibus enim mauris ut sapien. Phasellus vulputate nulla ac sollicitudin ultricies. </p>
                    </div>
                    <div className="Messages">
                        <img src={gato_pfp} alt="pfp2" className='mail_pfp' />
                        <p>Maria Elisa</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra mi a fringilla posuere. Aenean pulvinar, dui nec ultrices cursus, tellus lectus fermentum lacus, sed finibus enim mauris ut sapien. Phasellus vulputate nulla ac sollicitudin ultricies. </p>
                    </div>
                    <div className="Messages">
                        <img src={ferrari_pfp} alt="pfp3" className='mail_pfp' />
                        <p>Jose Hernandez</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra mi a fringilla posuere. Aenean pulvinar, dui nec ultrices cursus, tellus lectus fermentum lacus, sed finibus enim mauris ut sapien. Phasellus vulputate nulla ac sollicitudin ultricies. </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

Bandeja_Entrada.defaultProps = {
   
}

export default Bandeja_Entrada;