import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import AgregarProducto from '../components/Mis_Ventas/AgregarProducto';
import CardsVentas from '../components/Mis_Ventas/CardsVentas';
import EditarProductos from '../components/Mis_Ventas/EditarProducto';
import FloatingAgregar from '../components/Mis_Ventas/FloatingAgregar';
import CardVenta from '../components/Mis_Ventas/NewCards_Ventas';

test('renders the AgregarProducto page', () => {
  render(<AgregarProducto />);
});

test('renders the CardsVentas page', () => {
  render(<CardsVentas />);
});

test('renders the EditarProducto page', () => {
  render(<EditarProductos />);
});

test('renders the FlaotingAgregar page', () => {
  render(<FloatingAgregar />);
});

test('renders the NewCards_Ventas page', () => {
  render(<CardVenta />);
});
