import React, { Fragment, useState } from 'react'
import "./Cards_Ventas.css"

const CrearPublicacion = (props) => {

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
        console.log("Datos: \nNombre: "+ productInfo.nombre)
        console.log("Precio: " + productInfo.precio)
        console.log("Categoria: " + productInfo.categoria)
        console.log("Descripcion: " + productInfo.descripcion)
    }


    return(
        <Fragment>
            <h1 className='textVender'>Crear Publicación</h1>
            <form className='formProducto' onSubmit={handleSumbit}>
                <div className='pregunta'>
                    <input type="text" placeholder="Título" className="formInput" onChange={handleChange} name="nombre"></input>
                </div>
                <div className='pregunta'>
                    <input type="text" placeholder="Producto o Servicio?" className="formInput" onChange={handleChange} name="precio"></input>
                </div>
                <div className='pregunta'>
                    <input type="text" placeholder="Categoria" className="formInput" onChange={handleChange} name="categoria"></input>
                </div>
                <div className='pregunta'>
                    <input type="text" placeholder="Descripcion" className="formInput" onChange={handleChange} name="descripcion"></input>
                </div>
                <button type="sumbit" className='buttonSumbit' data-testid="Submit">Continuar</button>
            </form>
        </Fragment>
        
    )

}

export default CrearPublicacion