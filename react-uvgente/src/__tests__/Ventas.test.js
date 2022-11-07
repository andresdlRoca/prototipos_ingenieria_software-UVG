import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Ventas from '../components/Ventas/NewVentas';
import AgregarProducto from '../components/Mis_Ventas/AgregarProducto';
import CardsVentas from '../components/Mis_Ventas/CardsVentas';
import FloatingAgregar from '../components/Mis_Ventas/FloatingAgregar';
import EditarProductos from '../components/Mis_Ventas/EditarProducto';

describe('Rendering pagina de ventas', () => {
  it('Render Ventas', () => {
    render(<Ventas />);
  });

  it('Render Mis Ventas', () => {
    render(<AgregarProducto />);
  });

  it('Render Pagina de agregar producto', () => {
    render(<EditarProductos />);
  });
});
test('renders the pagina principal', () => {
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve) =>
      resolve({
        json: () => {
          return [
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
          ];
        },
      })
    );
  });
  render(<Ventas />);
});

test('rendersthe pagina principal', () => {
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      reject('error');
    });
  });
  render(<Ventas />);
});
