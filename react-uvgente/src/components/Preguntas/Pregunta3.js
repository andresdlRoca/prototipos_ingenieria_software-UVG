import React, { useState, useEffect, useRef } from "react";
import './Preguntas.css';
import emailicon from "../../media/mail_icon.png";

export default function Pregunta3() {

    return (
        <>
            <div className="AyudaWrap">
                <div className="faq">
                    ¿Cómo ver el perfil de otro usuario?    
                    <ul className="faqlist">
                        <span class="ref">Estando en la publicación de un producto o servicio, al hacer click en el ícono
                        del usuario que creo la publicación se podrá acceder a su perfil, así como la opción de agregarlo
                        a su lista de favoritos.
                        </span>
                    </ul>
                </div>
                <div className="consupport">
                    Contactar a Soporte
                    <div className="EmailSupport">
                        <p>Correo Electronico</p>
                        <p className="highlighted">uvgente@soporte.edu.gt</p>
                        <img src={emailicon} alt="Email"></img>
                    </div>
                    <div className="PhoneSupport">
                        <p>Numero Telefonico</p>
                        <p className="highlighted">+502 8005 6598</p>
                        <p className="highlighted">+502 7852 6245</p>
                    </div>
                </div>
            </div>
        </>
        
    );

}