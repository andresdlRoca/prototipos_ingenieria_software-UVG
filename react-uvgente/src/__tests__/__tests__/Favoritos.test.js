import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Favoritos from '../components/Favoritos/Favorites';
import React from "react"

test('renders the Favoritos page', () => {
  render(<Favoritos />);
});
