import React, { useState, useEffect, useRef } from "react";
import './Preguntas.css';
import emailicon from "../../media/mail_icon.png";

export default function Pregunta4() {

    return (
        <>
            <div className="AyudaWrap">
                <div className="FAQ">
                    ¿Cómo editar mi perfil?    
                    <ul className="FAQList">
                        <span class="ref">Ingresando a la página de tu perfil, encontrarás las opciones para editar
                        tu foto de perfil, descripción, contactos y enlaces externos.
                        </span>
                    </ul>
                </div>
                <div className="ContactSupport">
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