import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import RegistroOrg from '../components/RegistroOrganizacion/RegistroOrg';
import React from "react"

test('renders the Registro organización page', () => {
  render(<RegistroOrg />);
});
