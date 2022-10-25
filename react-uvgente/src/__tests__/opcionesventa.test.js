import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import OpcionDeVenta from '../components/opciones_de_venta/opcionDeVenta';
import OpcionesDeVenta from '../components/opciones_de_venta/OpcionesDeVenta';
import userEvent from '@testing-library/user-event';

test('renders the opcion_de_venta', () => {
  render(<OpcionDeVenta />);
});

test('renders the opciones_de_venta', () => {
  render(<OpcionesDeVenta />);
});

test('testoption1', () => {
  render(<OpcionesDeVenta />);
  const object1 = screen.getByTestId('Opcion1');
  const object2 = screen.getByTestId('Opcion2');
  fireEvent.click(object1);
  fireEvent.click(object2);
  const object3 = screen.getByTestId('Opcion3');
  const object4 = screen.getByTestId('Opcion4');
  fireEvent.click(object3);
  fireEvent.click(object4);
});
