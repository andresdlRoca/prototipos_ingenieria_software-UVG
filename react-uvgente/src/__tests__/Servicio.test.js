import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CardServicios from '../components/Servicio/CardServicios';
import NewServicio from '../components/Servicio/NewServicio';

test('renders servicios card', () => {
  render(<CardServicios />);
});

test('renders NewServicio', () => {
  render(<NewServicio />);
});
