import React, { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { useImage } from 'react-image';
import DefaultImageUser from '../../media/cat_pp.jpg';

const CardVenta = (props) => {
  console.log(props);
  const { title, description, prod_rate, price, src_img, name } = props;
  console.log(props.src_img);
  return (
    <div className={'card-item-on-main'}>
      <div className="left-side-card-item" data-testid="left-side-card-item">
        <div
          className="card-item-image-space"
          style={
            props.image
              ? {
                  backgroundImage: `url(${props.image})`,
                  backgroundSize: 'cover',
                }
              : {}
          }
        >
          {!src_img && <FaQuestion className="question-mark-no-image" />}
        </div>
        <div className="price-item-card-space">Q{price}</div>
      </div>
      <div className="right-side-card-item">
        <div className="item-product-title">{title}</div>
        <div className="item-product-description">{description}</div>
        <div className="item-product-rate">Calificacion: {prod_rate}/5</div>
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

export default CardVenta;
