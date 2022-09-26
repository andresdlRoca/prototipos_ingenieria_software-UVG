import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Favoritos from '../components/Favoritos/Favorites';

test('renders the products and services on favorites', () => {
  render(<Favoritos />);
  expect(screen.queryByText(/Productos/)).toBeInTheDocument();
  expect(screen.queryByText(/Servicios/)).toBeInTheDocument();
});
