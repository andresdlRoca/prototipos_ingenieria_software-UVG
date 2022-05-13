import { Component } from "react";
import './sign_up_style.css'
import banner from '../../media/register_banner.png'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
//import  { Navigate, Link } from 'react-router-dom'

const MySwal = withReactContent(Swal)

class Singup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      text4: "",
    };
    this.changeUsername = this.changeUsername.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeText4 = this.changeText4.bind(this);
    this.enviar = this.enviar.bind(this);
  }


  changeUsername($event) {
    const newValue = $event.target.value;
    this.setState({ username: newValue });
  }

  changeEmail($event) {
    const newValue = $event.target.value;
    this.setState({ email: newValue });
  }

  changePassword($event) {
    const newValue = $event.target.value;
    this.setState({ password: newValue });
  }

  changeText4($event) {
    const newValue = $event.target.value;
    this.setState({ text4: newValue });
  }

  enviar($event) {
    $event.preventDefault();

    if (
      this.state.username !== "" &&
      this.state.email !== "" &&
      this.state.password !== "" &&
      this.state.text4 !== ""
    ) {

      let message = JSON.stringify(this.state);
      fetch("http://localhost:8080/register", {
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
          if (data.msg === "El usuario fue registrado correctamente!!") {
            MySwal.fire({
              icon: 'success',
              title: 'Registro',
              text: data.msg,
              footer: 'ok'
            })
          }
        })
    } else {
      MySwal.fire({
        icon: 'warning',
        title: 'Ups...',
        text: 'Parece que olvido llenar todos los campos',
        footer: 'Por favor llene todos los campos'
      })
    }

  }

  render() {
    return (
      <section className="vh-100" id="main_section">
        <div className="container h-100 " id="form-signup-wrapper">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" id="special_card">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registrate</p>

                      <form className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="username" className="form-control"
                              value={this.state.username}
                              onChange={this.changeUsername}
                            />
                            <label className="form-label" htmlFor="username">Nombre de usuario</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="email-r" className="form-control"
                              value={this.state.email}
                              onChange={this.changeEmail}
                            />
                            <label className="form-label" htmlFor="email">Correo electrónico</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="password-r" className="form-control"
                              value={this.state.password}
                              onChange={this.changePassword} />
                            <label className="form-label" htmlFor="password">Contraseña</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="confirm-password" className="form-control"
                              value={this.state.text4}
                              onChange={this.changeText4}
                            />
                            <label className="form-label" htmlFor="confirm-password">Ingrese de nuevo la contraseña</label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg " id="green_bar_tt"
                            onClick={this.enviar}
                          >Register</button>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src={banner} className="img-fluid" alt="Sample" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Singup;