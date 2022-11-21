import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import CardServicios from '../components/Servicio/CardServicios';
import NewServicio from '../components/Servicio/NewServicio';

describe('Rendering Servicio', () => {
  it('renders NewServicio', () => {
    render(<NewServicio />);
  });
});
