import '@testing-library/jest-dom';
import {
  getByPlaceholderText,
  getByText,
  render,
  fireEvent,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Producto_Form from '../components/form/Producto_Form';
import ProductoForm from '../components/productoForm/ProductoForm';
import ServicioForm from '../components/productoForm/ServicioForm';

test('renders the Product_Form page', () => {
  render(<Producto_Form />);
});

test('rsend producto form', () => {
  render(<ProductoForm />);
  const req = jest.fn(),
    res = { redirect: jest.fn() },
    next = jest.fn();
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve) =>
      resolve({
        json: () => {
          return { msg: 'El producto fue registrado con exito' };
        },
      })
    );
  });
  userEvent.type(screen.getByTestId('nombre_del_producto'), 'rober');

  userEvent.type(
    screen.getByPlaceholderText('Agregue una descripcion'),
    'rober'
  );
  expect(screen.getByPlaceholderText('Agregue una descripcion').value).toBe(
    'rober'
  );

  userEvent.type(screen.getByPlaceholderText('100.00'), '20');
  expect(screen.getByPlaceholderText('100.00').value).toBe('0.0120');

  userEvent.upload(screen.getByTestId('file'), 'rober');

  const colorButton = screen.getByTestId('submitProductoForm');
  fireEvent.click(colorButton);
});

test('send producto form', () => {
  render(<ProductoForm />);
  const req = jest.fn(),
    res = { redirect: jest.fn() },
    next = jest.fn();
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve) =>
      resolve({
        json: () => {
          return { msg: 'El producto fu registrado con exito' };
        },
      })
    );
  });

  const colorButton = screen.getByTestId('submitProductoForm');
  fireEvent.click(colorButton);
});

test('renders the Service_Form page', () => {
  render(<ServicioForm />);
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve) =>
      resolve({
        json: () => {
          return { msg: 'El producto fue registrado con exito' };
        },
      })
    );
  });
  userEvent.type(screen.getByPlaceholderText('Agregue un nombre'), 'rober');

  userEvent.type(
    screen.getByTestId('descripcion_del_Servicio'),
    'abababababab'
  );

  userEvent.type(screen.getByPlaceholderText('100.00'), '20');
  expect(screen.getByPlaceholderText('100.00').value).toBe('20');

  const colorButton = screen.getByTestId('submitServicioForm');
  fireEvent.click(colorButton);
});

test('send producto fom', () => {
  render(<ProductoForm />);
  const req = jest.fn(),
    res = { redirect: jest.fn() },
    next = jest.fn();
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve) =>
      resolve({
        json: () => {
          return { msg: 'El producto fu registrado con exito' };
        },
      })
    );
  });

  const colorButton = screen.getByTestId('submitProductoForm');
  fireEvent.click(colorButton);
});

test('renders the fake Service_Form page', () => {
  render(<ServicioForm />);
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve) =>
      resolve({
        json: () => {
          return { msg: 'El producto fue registrado con exio' };
        },
      })
    );
  });
  const colorButton = screen.getByTestId('submitServicioForm');
  fireEvent.click(colorButton);
});
