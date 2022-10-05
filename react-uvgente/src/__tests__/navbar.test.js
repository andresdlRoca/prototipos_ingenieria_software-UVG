import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
// import MiPerfil from '../components/MiPerfil/MiPerfil';
import NavBar from '../components/new-nav-bar/NavBar';
import NewNavBarItem from '../components/new-nav-bar/NewNavBarItem';
import React from "react"

describe("Rendering Navbar" , ()=> {

  it('renders the Navbar', () => {
    render(<NavBar />);
  })
  
  it('renders the newnavbaritem', () => {
    render(<NewNavBarItem />);
  })

})
