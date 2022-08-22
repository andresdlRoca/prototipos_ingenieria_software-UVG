import React, { useState } from 'react'
import "./Cards_Ventas.css"
import addproduct from "../../media/add.png";
import { Link } from 'react-router-dom'
const FloatingAgregar = (props) => {
    return(
        <div className="addproduct" onClick={() => console.log("Hola")}>
            <Link className="Link-to-publicar-articulo" to="/publicar-articulos">
                <img src={addproduct} alt="addproduct ic" />
            </Link>
        </div>
    )
}

export default FloatingAgregar