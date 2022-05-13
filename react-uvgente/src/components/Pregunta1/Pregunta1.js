import React, { useState, useEffect, useRef } from "react";
import './Pregunta1.css';
import emailicon from "../../media/mail_icon.png";

export default function Pregunta1() {

    return (
        <>
            <div className="AyudaWrap">
                <div className="FAQ">
                    ¿Cómo vender un articulo?    
                    <ul className="FAQList">
                        <span class="ref">Para poner en venta un artículo y/o servicio, debe dirigirse a la pestaña "Vender" 
                        en la barra superior, seguidamente elegir entre articulo y servicio y llenar el formulario con la 
                        informacion necesaria para realizar una publicacion en la página 
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