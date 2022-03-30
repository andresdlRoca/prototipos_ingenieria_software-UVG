import React from 'react';
import ReactDOM from 'react-dom';
import profile_pic from '../../media/cat_pp.jpg'
import mail_icon from '../../media/mail_icon.png'
import fulano_pfp from '../../media/fulano.jpg'
import gato_pfp from '../../media/gatopfpinbox.jpg'
import ferrari_pfp from '../../media/ferraripfp.jpg'
import MensajeUI from './MensajeUI.js'

const Bandeja_Entrada = () => {
    return(
        <>
        <MensajeUI/>
        <div id="inboxpage">
            
            <div id="inbox">
                <div id="headerinbox">
                    <p id="tituloinbox">Bandeja de entrada</p>
                    <img src={mail_icon} alt="mailiconinbox" className='inboxIcon' />
                </div>
                <div className="inboxMessages">
                    <div className="Messages">

                        <img id="profileImg" src={fulano_pfp} alt="pfp1" className='mail_pfp' />
                        <p id="profileName">Fulanito Fulano</p>
                        <p id="sentMessage">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra mi a fringilla posuere. Aenean pulvinar, dui nec ultrices cursus, tellus lectus fermentum lacus, sed finibus enim mauris ut sapien. Phasellus vulputate nulla ac sollicitudin ultricies. </p>
                    </div>
                    <div className="Messages">
                        <img id="profileImg" src={gato_pfp} alt="pfp2" className='mail_pfp' />
                        <p id="profileName" >Maria Elisa</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra mi a fringilla posuere. Aenean pulvinar, dui nec ultrices cursus, tellus lectus fermentum lacus, sed finibus enim mauris ut sapien. Phasellus vulputate nulla ac sollicitudin ultricies. </p>
                    </div>
                    <div className="Messages">
                        <img id="profileImg" src={ferrari_pfp} alt="pfp3" className='mail_pfp' />
                        <p id="profileName" >Jose Hernandez</p>
                        <p id="sentMessage">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra mi a fringilla posuere. Aenean pulvinar, dui nec ultrices cursus, tellus lectus fermentum lacus, sed finibus enim mauris ut sapien. Phasellus vulputate nulla ac sollicitudin ultricies. </p>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

Bandeja_Entrada.defaultProps = {
   
}

export default Bandeja_Entrada;