import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
// import MiPerfil from '../components/MiPerfil/MiPerfil';
import NavBar from '../components/new-nav-bar/NavBar';
import NewNavBarItem from '../components/new-nav-bar/NewNavBarItem';
import React from "react"

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

test('renders the Navbar', () => {
  render(<NavBar />);
});

describe("render navbar test", () => {

  it('renders the Navbar', () => {
    render(<NavBar />);
  })
  
  it('renders the newnavbaritem', () => {
    render(<NewNavBarItem />);
  })

})
