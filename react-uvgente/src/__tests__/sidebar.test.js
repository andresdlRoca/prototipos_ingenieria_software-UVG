import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from "react"
import NewSideBar from '../components/new-side-bar/NewSideBar';



describe("Rendering NewSideBar" , ()=> {
 
  it('renders the New Side Bar', () => {
    render(<NewSideBar />);
  })

})
