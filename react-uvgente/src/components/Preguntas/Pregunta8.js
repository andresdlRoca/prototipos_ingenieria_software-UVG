import React, { useState, useEffect, useRef } from "react";
import './Preguntas.css';
import emailicon from "../../media/mail_icon.png";

export default function Pregunta6() {

    return (
        <>
            <div className="AyudaWrap">
                <div className="FAQ">
                    ¿Cómo cambio mi tipo de contacto principal?    
                    <ul className="FAQList">
                        <span class="ref">Desde la página de configuraciones, la cual se puede acceder desde la 
                        barra lateral en la parte inferior, encontrarás la información de tu cuenta, como tu correo, contraseña,
                        contacto principal y correo de contacto, ahí encontrarás la opción de editar tu contacto principal, así como la 
                        demás información.
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