import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { useImage } from "react-image";
import DefaultImageUser from "../../media/cat_pp.jpg";

const CardCompra = (props) => {
  const { id, name, rate } = props.user;
  const { title, description, status, price, state } = props.product;
  return (
    <div className="card-item-on-venta">
      <div className="left-side-card-item">
        <div
          className="card-item-image-space"
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
            <FaQuestion className="question-mark-no-image" />
          )}
        </div>
        <div className="price-item-card-space">Q{price}</div>
      </div>
      <div className="right-side-card-item">
        <div className="item-product-title">{title}</div>
        <div className="item-product-rate">Estado: {status}</div>
        <div className="seller-info-wrapper4">
          <div className="pp-for-seller-space">
            <img
              src={DefaultImageUser}
              className="seller-profile-pic-on-card-sell"
            />
          </div>
          <div className="name-space-for-seller">{name}</div>
        </div>
      </div>
    </div>
  );
};

export default CardCompra;
