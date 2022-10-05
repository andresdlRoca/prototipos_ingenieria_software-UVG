import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CardVenta from '../components/Crear_publicacion/CardVenta';
import CrearPublicacion from '../components/Crear_publicacion/CrearPublicacion';
import FloatingAgregar from '../components/Crear_publicacion/FloatingAgregar';
import Cards_Ventas from '../components/Crear_publicacion/Cards_Ventas';
import React from "react"

test('renders the cards de ventas', () => {
  render(<CardVenta />);
});

test('renders the crear publicacion page', () => {
  render(<CrearPublicacion />);
});

test('renders the floating agregar page', () => {
  render(<FloatingAgregar />);
});

test('renders the new cards page', () => {
  render(<Cards_Ventas />);
});
