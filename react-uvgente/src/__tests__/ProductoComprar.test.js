import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CardVenta from '../components/ProductoComprar/New_ProductC';
import Producto_Comprar from '../components/ProductoComprar/Producto_Comprar';

test('renders card venta', () => {
  render(<CardVenta />);
});

test('renders the Producto Comprar page', () => {
  render(<Producto_Comprar />);
});
