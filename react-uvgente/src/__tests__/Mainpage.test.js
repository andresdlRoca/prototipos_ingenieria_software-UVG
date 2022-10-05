import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import NewPaginaPrincipal from '../components/NewPaginaPrincipal/NewPaginaPrincipal';
import React from "react"

describe("Rendering pagina principal" , ()=> {

  it("renders the landing page", ()=> {
    render(<NewPaginaPrincipal />);
  })

})