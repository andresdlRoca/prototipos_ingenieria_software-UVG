import React, { useState, useEffect, useRef } from "react";
import './Ayuda.css';
import emailicon from "../../media/mail_icon.png";
import { Link } from 'react-router-dom';

export default function Ayuda() {

    return (
        <>
            <div className="AyudaWrap">
                <div className="FAQ">
                    Preguntas Frecuentes
                    <ul className="FAQList">
                        <Link to="/Pregunta1">¿Como vender un articulo?</Link>
                        <li> </li>
                        <Link to="/Pregunta2">¿Como comprar un articulo?</Link>
                        <li> </li>
                        <Link to="/Pregunta3">¿Como ver el perfil de otro usuario?</Link>
                        <li> </li>
                        <Link to="/Pregunta4">¿Como edito mi perfil?</Link>
                        <li> </li>
                        <Link to="/Pregunta5">¿Como cambio mi foto de perfil?</Link>
                        <li> </li>
                        <Link to="/Pregunta6">¿Como ver detalles de un producto/servicio?</Link>
                        <li> </li>
                        <Link to="/Pregunta7">¿Como reinicio mi contraseña?</Link>
                        <li> </li>
                        <Link to="/Pregunta8">¿Como cambio mi tipo de contacto principal?</Link>
                        <li> </li>
                        <Link to="/Pregunta9">¿Como puedo filtrar mis busquedas?</Link>
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