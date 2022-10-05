import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Producto_Form from '../components/form/Producto_Form';
import ProductoForm from '../components/productoForm/ProductoForm';
import ServicioForm from '../components/productoForm/ServicioForm';
import React from "react"

test('renders the ProductForm page', () => {
  render(<ProductoForm />);
});

test('renders the Product_Form page', () => {
  render(<Producto_Form />);
});

test('renders the Service_Form page', () => {
  render(<ServicioForm />);
});
