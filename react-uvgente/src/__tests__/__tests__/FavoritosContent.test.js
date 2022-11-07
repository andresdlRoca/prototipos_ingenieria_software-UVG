/* eslint-disable testing-library/prefer-presence-queries */
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Favoritos from '../components/Favoritos/Favorites';
import React from "react"

test('renders the products and services on favorites', () => {
  render(<Favoritos />);
  expect(screen.queryByText(/Productos/)).toBeInTheDocument();
  expect(screen.queryByText(/Servicios/)).toBeInTheDocument();
});
