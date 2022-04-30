import React, { useState, useEffect, useRef } from "react";
import './Ayuda.css';
import emailicon from "../../media/mail_icon.png";

export default function Ayuda() {

    return (
        <>
            <div className="AyudaWrap">
                <div className="FAQ">
                    Preguntas Frecuentes
                    <ul className="FAQList">
                        <li>¿Como vender un articulo?</li>
                        <li>¿Como comprar un articulo?</li>
                        <li>Como ver el perfil de otro usuario?</li>
                        <li>Como edito mi perfil?</li>
                        <li>¿Como cambio mi foto de perfil?</li>
                        <li>¿Como ver detalles de un producto/servicio?</li>
                        <li>¿Como reinicio mi contraseña?</li>
                        <li>¿Como cambio mi tipo de contacto principal?</li>
                        <li>¿Como puedo filtrar mis busquedas?</li>
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