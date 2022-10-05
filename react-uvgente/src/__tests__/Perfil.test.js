import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import MiPerfil from '../components/MiPerfil/MiPerfil';
import React from "react"

describe("Renders perfil" , ()=> {

  it('renders the Mi perfil page', () => {
    render(<MiPerfil />);
  })

})
