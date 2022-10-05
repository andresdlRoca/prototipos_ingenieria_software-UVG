import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from "react"
import Singup from '../components/Signup/Singup';

describe("Renders SignUp" , ()=> {

  it('renders the sign up sequence', () => {
    render(<Singup />);
  })

})