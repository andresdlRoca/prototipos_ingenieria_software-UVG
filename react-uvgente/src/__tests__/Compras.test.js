import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CardCompra from '../components/Compras/CardCompra';
import NewCompra from '../components/Compras/NewCompra';
import React from 'react';

describe('Renders compras', () => {
  it('renders the new compra page', () => {
    render(<NewCompra />);
  });
});
