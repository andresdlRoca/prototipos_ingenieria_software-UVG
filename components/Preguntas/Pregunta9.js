import React, { useState, useEffect, useRef } from "react";
import './Preguntas.css';
import emailicon from "../../media/mail_icon.png";

export default function Pregunta6() {

    return (
        <>
            <div className="AyudaWrap">
                <div className="faq">
                    ¿Cómo filtar mis busquedas?    
                    <ul className="faqlist">
                        <span class="ref">Del lado izquierdo a la par de la barra de busqueda encontrarás el botón de filtros,
                        el cual te desplegará los filtros disponibles y pordrás seleccionar los que desees, y cuando relices
                        tu próxima busqueda serán aplicados en tus resultados.
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