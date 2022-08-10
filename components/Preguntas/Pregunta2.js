import React, { useState, useEffect, useRef } from "react";
import './Preguntas.css';
import emailicon from "../../media/mail_icon.png";

export default function Pregunta2() {

    return (
        <>
            <div className="AyudaWrap">
                <div className="faq">
                    ¿Cómo comprar un articulo?    
                    <ul className="faqlist">
                        <span class="ref">Para comprar un artículo, primero debe seleccionar la publicación del articulo de
                        su interes, la cual tendrá la opcion de contactarse mediante UVGente con el vendedor para realizar
                        la transacción del produto y/o servicio
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