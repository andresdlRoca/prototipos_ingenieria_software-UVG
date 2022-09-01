import { Component } from "react"
import "./Login_style.css"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { Link } from "react-router-dom"
import PrivateRoute from "../PrivateRoute"

const MySwal = withReactContent(Swal)

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
    }
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.enviar = this.enviar.bind(this)
  }

  changeEmail($event) {
    const newValue = $event.target.value
    this.setState({ email: newValue })
  }

  changePassword($event) {
    const newValue = $event.target.value
    this.setState({ password: newValue })
  }

  enviar($event) {
    $event.preventDefault()

    if (this.state.email !== "" && this.state.password !== "") {
      let message = JSON.stringify(this.state)
      fetch("http://localhost:8080/login", {
        method: "POST",
        mode: "cors",
        body: message,
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.msg === "Login Succes") {
            MySwal.fire({
              icon: "success",
              title: "Registro",
              text: data.msg,
              footer: "ok",
            })
            // eslint-disable-next-line no-restricted-globals
            window.location = "/"
            PrivateRoute.auth.token = true
          } else {
            MySwal.fire({
              icon: "warning",
              title: "Ups...",
              text: data.msg,
              footer: "Revise que los campos esten bien",
            })
          }
        })
    } else {
      MySwal.fire({
        icon: "warning",
        title: "Ups...",
        text: "Parece que olvido llenar todos los campos",
        footer: "Por favor llene todos los campos",
      })
    }
  }

  render() {
    return (
      <form className="App" onSubmit={this.handleSubmit}>
        <div className="Logo">
          <div className="email">
            <label id="correo" for="email">
              Correo UVG
            </label>
            <input
              id="email"
              type="text"
              value={this.state.email}
              onChange={this.changeEmail}
            ></input>
          </div>
          <div className="password">
            <label id="contrasena" for="password">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.changePassword}
            ></input>
          </div>
          <div className="Enter">
            <button type="button" id="Entrada" onClick={this.enviar}>
              Iniciar Sesión{" "}
            </button>
          </div>
          <div className="Nuevo">
            <Link to="/signup">¿Aun no estas registrado?</Link>
          </div>
          <div className="Olvido">
            <p>¿Olvidaste tu contraseña?</p>
          </div>
        </div>
        <div className="input">
          <h1>UVGente</h1>
        </div>
      </form>
    )
  }
}

export default Login
