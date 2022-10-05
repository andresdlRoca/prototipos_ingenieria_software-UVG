import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
// import Login from '../components/Login/Login';
import App from '../App';
import React from "react"


describe("Renders the landing page" , ()=> {
  
  it('renders the landing page', () => {
    render(<App />);
  })

})