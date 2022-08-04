import React, { Fragment, useState } from 'react'
import "./Cards_Ventas.css"

const AgregarProducto = (props) => {

    const [productInfo, sumbitProductInfo] = useState({
        nombre: '',
        precio: '',
        categoria: '',
        descripcion: ''
    })

    const handleChange = (event) => {
        sumbitProductInfo({
            ...productInfo,
            [event.target.name] : event.target.value
        })
    }

    const handleSumbit = (event) => {
        event.preventDefault()
        console.log("Datos: "+ productInfo.nombre)
    }


    return(
        <Fragment>
            <h1>Vender producto</h1>
            <form className='formProducto' onSubmit={handleSumbit}>
                <div className='pregunta'>
                    <input type="text" placeholder="Nombre del producto" className="formInput" onChange={handleChange} name="nombre"></input>
                </div>
                <div className='pregunta'>
                    <input type="text" placeholder="Precio del producto" className="formInput" onChange={handleChange} name="precio"></input>
                </div>
                <div className='pregunta'>
                    <input type="text" placeholder="Categoria" className="formInput" onChange={handleChange} name="categoria"></input>
                </div>
                <div className='pregunta'>
                    <input type="text" placeholder="Descripcion" className="formInput" onChange={handleChange} name="descripcion"></input>
                </div>
                <button type="sumbit" className='buttonSumbit'>Continuar</button>
            </form>
            <ul>
                <li>{productInfo.nombre}</li>
                <li>{productInfo.precio}</li>
                <li>{productInfo.categoria}</li>
                <li>{productInfo.descripcion}</li>
            </ul>
        </Fragment>
    )

}

export default AgregarProducto