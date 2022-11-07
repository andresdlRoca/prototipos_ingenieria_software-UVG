import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ProductButton from '../components/Producto/ProductButton';
import React from "react"

describe("Renders ProductButton" , ()=> {
  
  it('renders the ProductButton', () => {
    render(<ProductButton />);
  })
  
})