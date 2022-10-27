import '@testing-library/jest-dom';
import CardVenta from '../components/Crear_publicacion/NewCards_Ventas';
import CrearPublicacion from '../components/Crear_publicacion/CrearPublicacion';
import FloatingAgregar from '../components/Crear_publicacion/FloatingAgregar';
import Cards_Ventas from '../components/Crear_publicacion/Cards_Ventas';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('renders the cards de ventas', () => {
  render(<CardVenta />);
});

test('renders the crear publicacion page', () => {
  render(<CrearPublicacion />);
  userEvent.type(screen.getByPlaceholderText('Título'), 'rober');
  userEvent.type(screen.getByPlaceholderText('Producto o Servicio?'), 'rober');
  userEvent.type(screen.getByPlaceholderText('Categoria'), 'rober');
  userEvent.type(screen.getByPlaceholderText('Descripcion'), 'rober');
  const test = screen.getByTestId('Submit');
  fireEvent.click(test);
});

test('renders the floating agregar page', () => {
  render(<FloatingAgregar />, { wrapper: MemoryRouter });
});

test('renders the new cards page', () => {
  render(<Cards_Ventas />);
});
