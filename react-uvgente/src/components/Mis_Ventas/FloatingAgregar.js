import React, { useState } from 'react'
import "./Cards_Ventas.css"
import addproduct from "../../media/add.png";

const FloatingAgregar = (props) => {

    return(
        <div className="addproduct">
            <img src={addproduct} alt="addproduct ic" />
        </div>
    )
}

export default FloatingAgregar