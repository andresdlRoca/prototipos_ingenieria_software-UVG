import React, { useState } from "react"
import { FaQuestion } from "react-icons/fa"
import { useImage } from "react-image"
import DefaultImageUser from "../../media/cat_pp.jpg"
import dots from "../../media/dot.png"
import "./Producto_Comprar.css"
import carrito from "../../media/carrito.png"

const CardVenta = (props) => {
  const { title, description, prod_rate, price, state } = props.product
  return (
    <div className="card-item-on-ventaArt">
      <div className="left-side-card-itemArt">
        <div
          className="card-item-image-spaceArt"
          style={
            props.productImage
              ? {
                  backgroundImage: `url(${props.productImage})`,
                  backgroundSize: "cover",
                }
              : {}
          }
        >
          {!props.productImage && (
            <FaQuestion className="question-mark-no-imageArt" />
          )}
        </div>

        <div className="price-item-card-spaceArt">Q{price}</div>
      </div>
      <div className="right-side-card-itemArt">
        <div className="item-product-titleArt">{title}</div>
        <div className="item-product-descriptionArt">{description}</div>
        <div className="state-item-card-spaceArt">Estado: {state}</div>
        <div className="state-item-button-spaceArt">
          Añadir al carrito
          <img src={carrito} className="cart" />
        </div>
      </div>
    </div>
  )
}

export default CardVenta
