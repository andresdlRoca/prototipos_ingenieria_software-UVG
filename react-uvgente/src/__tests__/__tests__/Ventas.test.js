import { render, screen, fireEvent } from "@testing-library/react"
import React from "react"
import Ventas from '../components/Ventas/NewVentas';
import AgregarProducto from "../components/Mis_Ventas/AgregarProducto";
import CardsVentas from "../components/Mis_Ventas/CardsVentas";
import FloatingAgregar from "../components/Mis_Ventas/FloatingAgregar";
import EditarProductos from "../components/Mis_Ventas/EditarProducto";

describe("Rendering pagina de ventas" , ()=> {

  it("Render Ventas", ()=> {
    render(<Ventas />);
  })

  it("Render Mis Ventas", ()=> {
    render(<AgregarProducto />)
  })

  it("Render Pagina de agregar producto", () => {
    render(<EditarProductos />)
  })

})