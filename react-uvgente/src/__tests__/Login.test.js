/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

 import { render, screen } from "@testing-library/react"
 import React from "react"
 import Login from '../components/Login/Login';
 
 describe("Rendering landing page" , ()=> {
 
   it("Render Login", ()=> {
     render(<Login />);
 
   })
 })
 
  