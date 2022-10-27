import React, { useState } from 'react';
import './Cards_Ventas.css';
import CardVenta from './NewCards_Ventas';
import libro from '../../media/tutorios.jpg';
import libro2 from '../../media/book_example.jpg';

const Cards_Ventas = () => {
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
        id: 10,
        name: 'Luis Gomez',
      },
      product: {
        title: 'Servicio 1',
        description:
          'Fugiat do reprehenderit elit sit deserunt ad irure anim quis tempor.',
        price: 150,
        state: '-',
      },
    },
    {
      user: {
        id: 10,
        name: 'Luis Gomez',
      },
      product: {
        title: 'Libro 2',
        description:
          'Este es el mejor libro de todos, por favor comprarlo pq esta mamadisimo si que si',

        price: 500,
        state: 'Usado',
      },
    },
    {
      user: {
        id: 10,
        name: 'Luis Gomez',
      },
      product: {
        title: 'Libro 3',
        description:
          'Fugiat do reprehenderit elit sit deserunt ad irure anim quis tempor.',
        price: 500,
        state: 'Usado',
      },
    },
    {
      user: {
        id: 10,
        name: 'Luis Gomez',
      },
      product: {
        title: 'Servicio 2',
        description:
          'Fugiat do reprehenderit elit sit deserunt ad irure anim quis tempor. ',
        price: 500,
        state: '-',
      },
    },
  ]);
  return (
    <div id="main-container-articulos">
      <div id="articulos-main-container-wrapper">
        <div id="articulos-main-container">
          <CardVenta
            product={{
              title: 'Servicio 2',
              description:
                'Fugiat do reprehenderit elit sit deserunt ad irure anim quis tempor. ',
              price: 500,
              state: '-',
            }}
            user={{
              id: 100,
              name: 'Luis Gomez',
            }}
          />
          {cardsVentasInfo.map((venta) => {
            let src = venta.user.id === 10 ? libro2 : null;
            return (
              <>
                <CardVenta
                  product={venta.product}
                  user={venta.user}
                  productImage={src}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Cards_Ventas.defaultProps = {};

export default Cards_Ventas;
