import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import AgregarProducto from '../components/Mis_Ventas/AgregarProducto';
import CardsVentas from '../components/Mis_Ventas/CardsVentas';
import EditarProductos from '../components/Mis_Ventas/EditarProducto';
import FloatingAgregar from '../components/Mis_Ventas/FloatingAgregar';
import CardVenta from '../components/Mis_Ventas/NewCards_Ventas';
import React from "react"

describe("Rendering pagina de ajustes" , ()=> {

  it("renders the AgregarProducto page", ()=> {
    render(<AgregarProducto />);
  })

  it('renders the CardsVentas page', () => {
    render(<CardsVentas title="Articulos" />);
  })
  
  it('renders the EditarProducto page', () => {
    render(<EditarProductos />);
  })
  
  it('renders the FlaotingAgregar page', () => {
    render(<FloatingAgregar />);
  })
  
  it('renders the NewCards_Ventas page', () => {
    render(<CardVenta />);
  })

})