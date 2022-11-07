import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Ayuda from '../components/Ayuda/Ayuda';
import React from "react"

test('renders the Ayuda page', () => {
  render(<Ayuda />);
});
