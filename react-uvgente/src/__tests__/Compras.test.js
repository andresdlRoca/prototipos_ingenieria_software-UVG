import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CardCompra from '../components/Compras/CardCompra';
import NewCompra from '../components/Compras/NewCompra';

test('renders the cardcompra page', () => {
  render(<CardCompra />);
});

test('renders the new compra page', () => {
  render(<NewCompra />);
});
