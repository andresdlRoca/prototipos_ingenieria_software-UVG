import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AgregarProducto from '../components/Mis_Ventas/AgregarProducto';
import CardsVentas from '../components/Mis_Ventas/CardsVentas';
import EditarProductos from '../components/Mis_Ventas/EditarProducto';
import FloatingAgregar from '../components/Mis_Ventas/FloatingAgregar';
import CardVenta from '../components/Mis_Ventas/NewCards_Ventas';
import { MemoryRouter } from 'react-router-dom';

test('renders the AgregarProducto page', () => {
  render(<AgregarProducto />);
  const test1 = screen.getByTestId('Submit');
  userEvent.type(screen.getByPlaceholderText('Nombre del producto'), 'roberto');
  userEvent.type(screen.getByPlaceholderText('Precio del producto'), '100');
  userEvent.type(screen.getByPlaceholderText('Categoria'), '100');
  userEvent.type(screen.getByPlaceholderText('Descripcion'), '100');
  fireEvent.click(test1);
});

test('renders the CardsVentas page', () => {
  render(<CardsVentas />, { wrapper: MemoryRouter });
});

test('renders the EditarProducto page', () => {
  render(<EditarProductos />);
  const test1 = screen.getByTestId('Submit');
  userEvent.type(screen.getByPlaceholderText('Nombre del producto'), 'roberto');
  userEvent.type(screen.getByPlaceholderText('Precio del producto'), '100');
  userEvent.type(screen.getByPlaceholderText('Categoria'), '100');
  userEvent.type(screen.getByPlaceholderText('Descripcion'), '100');
  fireEvent.click(test1);
});

test('renders the FlaotingAgregar page', () => {
  render(<FloatingAgregar />, { wrapper: MemoryRouter });
  const test1 = screen.getByTestId('floatingagregar-test');
  fireEvent.click(test1);
});

test('renders the NewCards_Ventas page', () => {
  render(<CardVenta />);
});
