import React, { useState } from 'react';
import './Producto_Comprar.css';
import CardVenta from './New_ProductC';
import libro from '../../media/tutorios.jpg';
import libro2 from '../../media/book_example.jpg';

const Producto_Comprar = () => {
  const [isCardsVentas, setIsCardsVentas] = useState(false);
  const [cardsVentasInfo, setCardsVentasInfo] = useState([
    {
      user: {
        id: 10,
        name: 'Luis Gomez',
      },
      product: {
        id: 1,
        title: 'Libro 1',
        description:
          'Este es el mejor libro de todos, por favor comprarlo pq esta mamadisimo si que si',
        price: 200,
        state: 'Usado',
      },
    },
    {
      user: {
        id: 9,
        name: 'Luis Gomez',
      },
      product: {
        id: 1,
        title: 'Libro 1',
        description:
          'Este es el mejor libro de todos, por favor comprarlo pq esta mamadisimo si que si',
        price: 200,
        state: 'Usado',
      },
    },
  ]);
  return (
    <div id="main-container-articulos">
      <div id="articulos-main-container-wrapper">
        <div id="articulos-main-container">
          {cardsVentasInfo.map((venta) => {
            let src = venta.user.id === 10 ? libro2 : null;
            return (
              <CardVenta
                product={venta.product}
                user={venta.user}
                productImage={src}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

Producto_Comprar.defaultProps = {};

export default Producto_Comprar;
