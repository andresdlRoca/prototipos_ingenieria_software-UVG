import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PrivateRoute from '../components/PrivateRoute';
import React from "react";

test('renders the New Side Bar', () => {
  render(<PrivateRoute />);
});
