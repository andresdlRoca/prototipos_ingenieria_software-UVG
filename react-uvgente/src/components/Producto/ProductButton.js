import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { useImage } from "react-image";



const ProductButton = (props) => {
  const { id, name, rate } = props.user;
  const { title, description, status, price, state } = props.product;
  return (
    <div>
      <a class="btn btn-primary" role="button">Ver Perfil</a>
      <a class="btn btn-primary" role="button">Crear Chat</a>
    </div>
    
    
  );
};

export default CardCompra;
