import React, { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import './MensajeUI.css';

export default function MensajeUI({ chequearVisibilidad, cerrarChat }) {

    const [username, setUsername] = useState('Usuario');
    const [messages, setMessages] = useState([]);
    const internalUI = useRef();

    let msgsource = messages

    const enviar = (event) => {
        if(event.key === 'Enter' && event.target.value != '') {
            let mensajeEnviado = {"MSGs" : event.target.value};
            event.target.value='';
            msgsource = messages;
            msgsource.push(mensajeEnviado);
            setMessages([...msgsource]);
            setTimeout(() => {
                internalUI.current.scrollTop=internalUI.current.scrollHeight;
            }, 100)
            
        }
    }

    return (
        <>
        <div id='message_container' className={chequearVisibilidad ?  "chatVisible" : "chatInvisible" }>
        </div>

        <div id="mainMessageUI" className={chequearVisibilidad ? "chatVisible" : "chatInvisible" }>
            <button onClick={cerrarChat}>Cerrar</button>
            <h1>{username}</h1>
            <div className='internalMSG' ref={internalUI}>
                {messages.map(message =>(
                    <div className="MSGBubble" >{message.MSGs}</div>
                ))}
                
            </div>
            <input  type="text" 
                    id="inputMSG" 
                    className='inputMensajes' 
                    placeholder='Escribe un mensaje' 
                    onKeyPress={enviar}
                    maxLength="120"
                    >
                    </input>
            
        </div>  
        </>
        
    );

}

