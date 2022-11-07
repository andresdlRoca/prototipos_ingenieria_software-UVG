import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFilter } from 'react-icons/fa';
import './new-ventas-style.css';
import CardVenta from './CardVenta';
import BookExample from '../../media/book_example.jpg';

const NewVentas = (props) => {
  const [isTopVentas, setIsTopVentas] = useState(true);
  const [products, setProduts] = useState([
    {
      title: 'a',
      description: 'b',
      prod_rate: 1,
      price: 100,
      src_img: 'a',
      name: 'c',
    },
    {
      title: 'a',
      description: 'b',
      prod_rate: 1,
      price: 100,
      src_img:
        'https://megamitensei.fandom.com/wiki/Path_of_Da%27at?file=Mementos_Dungeon_Art_P5R_2.png',
      name: 'c',
      onTopVentas: true,
    },
  ]);
  useEffect(() => {
    fetch('http://localhost:8080/get-products', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      referrerPolicy: 'no-referrer',
    });
  });
  return (
    <div id="main-container-new-ventas">
      <div className="title-and-filters-wrapper">
        <button className="titulo-pagina-new-ventas">
          <p className="new-p">{props.title}</p>
          <FaFilter />
        </button>
      </div>

      <div id="productos-main-container-wrapper">
        <div id="productos-main-container">
          {products.map((venta) => {
            return <CardVenta product={venta} image={BookExample} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default NewVentas;
