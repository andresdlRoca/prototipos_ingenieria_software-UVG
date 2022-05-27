import React, { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import profile_pic from '../../media/cat_pp.jpg'
import mail_icon from '../../media/mail_icon.png'
import fulano_pfp from '../../media/fulano.jpg'
import gato_pfp from '../../media/gatopfpinbox.jpg'
import ferrari_pfp from '../../media/ferraripfp.jpg'
import MensajeUI from './MensajeUI.js';
import './Bandeja_Entrada.css';


export default function Bandeja_Entrada() {

    const[ventanaChat, setVentanaChat] = useState(false);
    const [currentChatUser, setCurrentChatUser] =useState("");

        const abrirChat = (name) => {
            setVentanaChat(true);
            setCurrentChatUser(name);
        }

        const cerrarChat = () => {
            setVentanaChat(false);
        }

    return(
        <>
        <div id="inboxpage">
            <MensajeUI chequearVisibilidad={ventanaChat} cerrarChat={cerrarChat} nombre_usuario ={currentChatUser}/>
            <div id="inbox">
                <div id="headerinbox">
                    <p id="tituloinbox">Bandeja de entrada</p>
                    <img src={mail_icon} alt="mailiconinbox" className='inboxIcon' />
                </div>
                <div className="inboxMessages">
                    <div className="Messages" onClick={() => abrirChat("Fulanito")}>
                        <img id="profileImg" src={fulano_pfp} alt="pfp1" className='mail_pfp' />
                        <p id="profileName">Fulanito Fulano</p>
                        <p id="sentMessage">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra mi a fringilla posuere. Aenean pulvinar, dui nec ultrices cursus, tellus lectus fermentum lacus, sed finibus enim mauris ut sapien. Phasellus vulputate nulla ac sollicitudin ultricies. </p>
                    </div>
                    <div className="Messages" onClick={() => abrirChat("Maria")}>
                        <img id="profileImg" src={gato_pfp} alt="pfp2" className='mail_pfp' />
                        <p id="profileName" >Maria Elisa</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra mi a fringilla posuere. Aenean pulvinar, dui nec ultrices cursus, tellus lectus fermentum lacus, sed finibus enim mauris ut sapien. Phasellus vulputate nulla ac sollicitudin ultricies. </p>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

