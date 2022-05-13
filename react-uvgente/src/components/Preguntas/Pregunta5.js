import React, { useState, useEffect, useRef } from "react";
import './Preguntas.css';
import emailicon from "../../media/mail_icon.png";

export default function Pregunta5() {

    return (
        <>
            <div className="AyudaWrap">
                <div className="FAQ">
                    ¿Cómo cambio mi foto de perfil?    
                    <ul className="FAQList">
                        <span class="ref">desde la página Mi perfil, encontarás la opción de cambia foto de perfil 
                        al lado de tu foto actual, luego deberás seleccionar tu nueva foto y confirmarla para que
                        sea visible.
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