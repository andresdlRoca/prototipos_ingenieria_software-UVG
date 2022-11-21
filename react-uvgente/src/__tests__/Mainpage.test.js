import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import NewPaginaPrincipal from '../components/NewPaginaPrincipal/NewPaginaPrincipal';
import { MemoryRouter } from 'react-router-dom';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

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
  render(<NewPaginaPrincipal />, { wrapper: MemoryRouter });
});

test('rendersthe pagina principal', () => {
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      reject('error');
    });
  });
  render(<NewPaginaPrincipal />, { wrapper: MemoryRouter });
});
