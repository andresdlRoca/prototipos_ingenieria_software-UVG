import { Component } from 'react';
import './sign_up_style.css';
import banner from '../../media/register_banner.png';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/esm/Button';

const MySwal = withReactContent(Swal);

class Singup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      text4: '',
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
      this.state.username !== '' &&
      this.state.email !== '' &&
      this.state.password !== '' &&
      this.state.text4 !== ''
    ) {
      let message = JSON.stringify(this.state);
      fetch('http://localhost:8080/register', {
        method: 'POST',
        mode: 'cors',
        body: message,
        headers: {
          'Content-Type': 'application/json',
        },
        referrerPolicy: 'no-referrer',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.msg === 'El usuario fue registrado correctamente!!') {
            MySwal.fire({
              icon: 'success',
              title: 'Registro',
              text: data.msg,
              footer: 'Se registro correctamente',
            });
            window.location = '/';
          } else {
            MySwal.fire({
              icon: 'warning',
              title: 'Usuario ya registrado',
              text: 'Este nombre ya esta usado. Ingrese otro nombre',
              footer: 'Revise sus datos',
            });
          }
        });
    } else {
      MySwal.fire({
        icon: 'warning',
        title: 'Ups...',
        text: 'Parece que olvido llenar todos los campos',
        footer: 'Por favor llene todos los campos',
      });
    }
  }

  render() {
    return (
      <Container>
        <Row className="flex">
          <Col className="mt-4 mb-4" sm={6}>
            <Container className="align-middle">
              <img
                src={banner}
                className="fix-image align-middle"
                alt="Sample"
              />
              <p className="fix-p">
                "En UVGente, queremos que la comunidad UVG encuentre lo que esta
                buscando"
              </p>
            </Container>
          </Col>
          <Col className="text-center mt-4 mb-4" sm={6}>
            <Container className="faq">
              <p className="titulos">Registrate</p>
              <form className="mx-1 mx-md-4">
                <div className="d-flex flex-row mb-4">
                  <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="username">
                      Nombre de usuario
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      value={this.state.username}
                      onChange={this.changeUsername}
                    />
                  </div>
                </div>

                <div className="text-center mb-4">
                  <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="email">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email-r"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmail}
                    />
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="password">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      id="password-r"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.changePassword}
                    />
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="confirm-password">
                      Ingrese de nuevo la contraseña
                    </label>
                    <input
                      type="password"
                      id="confirm-password"
                      className="form-control"
                      value={this.state.text4}
                      onChange={this.changeText4}
                    />
                  </div>
                </div>
                <Row className="mb-4 mt-4 text-center">
                  <Col>
                    <Button
                      variant="warning"
                      type="button"
                      className="mb-3"
                      href="\login"
                    >
                      Cancelar
                    </Button>
                  </Col>
                  <Col>
                    <button
                      type="button"
                      className="btn btn-primary"
                      id="green_bar_tt"
                      onClick={this.enviar}
                    >
                      Registrarse
                    </button>
                  </Col>
                </Row>
              </form>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Singup;
