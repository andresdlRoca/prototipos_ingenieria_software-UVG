import { render, screen, fireEvent } from "@testing-library/react"
import React from "react"
import AjusteField from "../components/Ajustes/AjusteField";
import Ajustes from "../components/Ajustes/Ajustes";

describe("Rendering pagina de ajustes" , ()=> {

  it("Render Ajustes", ()=> {
    render(<Ajustes />);
  })

  it("Render AjustesField", ()=> {
    render(<AjusteField />)
  })

})