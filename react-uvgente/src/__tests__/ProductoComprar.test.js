import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CardVenta from '../components/ProductoComprar/New_ProductC';
import Producto_Comprar from '../components/ProductoComprar/Producto_Comprar';
import React from 'react';

describe('Rendering ProductoComprar section', () => {
  it('renders the Producto Comprar page', () => {
    // eslint-disable-next-line react/jsx-pascal-case
    render(<Producto_Comprar />);
  });
});
