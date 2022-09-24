import { render, screen } from "@testing-library/react"
import React from "react"
import Ventas from '../components/Ventas/NewVentas';
import CartasVentas from "../components/Ventas/CardVenta";

describe("Rendering pagina de ventas" , ()=> {

  it("Render Ventas", ()=> {
    render(<Ventas />);
  })

})