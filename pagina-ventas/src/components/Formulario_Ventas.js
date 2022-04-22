import React from "react";

function FormularioVenta(props) {
    return(props.trigger) ? (
        <div className="formulario">
            <div className="formulario-inner">
                <button className="close-btn">Cerrar</button>
                {props.children}
            </div>
        </div>
    ):"";
}

export default FormularioVenta