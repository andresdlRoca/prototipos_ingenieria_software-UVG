import React, { useState, useEffect, useRef } from "react";
import './Preguntas.css';
import emailicon from "../../media/mail_icon.png";

export default function Pregunta6() {

    return (
        <>
            <div className="AyudaWrap">
                <div className="FAQ">
                    ¿Cómo ver detalles de un produto/servicio?    
                    <ul className="FAQList">
                        <span class="ref">Desde la página principal y las pestañas de productos, servicios y Tops 
                        prodás visualizar las publicaciones de los produtos/servicios disponibles, así como hacer uso 
                        de la barra de busqueda, basta con ingresar a una publicación de tu interes para ver la 
                        información detallada del producto.
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