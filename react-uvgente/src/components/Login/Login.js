
import { Component } from 'react';
import './Login_style.css';
import Swal from 'sweetalert2';
import banner from '../../media/register_banner.png';
import withReactContent from 'sweetalert2-react-content';
import { Link, Router, Route, Routes } from 'react-router-dom';
import Singup from '../Signup/Singup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MySwal = withReactContent(Swal);

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.enviar = this.enviar.bind(this);
  }

  changeEmail($event) {
    const newValue = $event.target.value;
    this.setState({ email: newValue });
  }

  changePassword($event) {
    const newValue = $event.target.value;
    this.setState({ password: newValue });
  }

  enviar($event) {
    $event.preventDefault();

    if (this.state.email !== '' && this.state.password !== '') {
      let message = JSON.stringify(this.state);
      fetch('http://localhost:8080/login', {
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
          if (data.msg === 'Login Succes') {
            MySwal.fire({
              icon: 'success',
              title: 'Registro',
              text: data.msg,
              footer: 'ok',
            });
            // eslint-disable-next-line no-restricted-globals
            window.location = '/';
          } else {
            MySwal.fire({
              icon: 'warning',
              title: 'Ups...',
              text: data.msg,
              footer: 'Revise que los campos esten bien',
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
                "Ingresa a UVGente, para ver los productos y servicios que la
                comunidad UVG tiene para ofrecerte"
              </p>
            </Container>
          </Col>
          <Col className="text-center mt-4 mb-4" sm={6}>
            <Container className="faq">
              <p className="titulos">Inicia Sesion</p>
              <Form className="App" onSubmit={this.handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Correo UVG</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={this.state.email}
                    onChange={this.changeEmail}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                    value={this.state.password}
                    onChange={this.changePassword}
                  />
                </Form.Group>

                <Container>
                  <Button
                    id="Entrada"
                    className="mt-2"
                    variant="success"
                    onClick={this.enviar}
                  >
                    Iniciar Sesión
                  </Button>
                  <br />
                  <br />
                  <Router>
                    <Routes>
                      <Route path="/signup" element={<Singup />} />
                      <br />
                      <br />
                      <Link to="/registrar-organizaciones">
                        Registrar organizacion
                      </Link>
                    </Routes>
                  </Router>
                </Container>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
import { Component } from 'react';
import './Login_style.css';
import Swal from 'sweetalert2';
import banner from '../../media/register_banner.png';
import withReactContent from 'sweetalert2-react-content';
import { Link, Router, Route, Routes } from 'react-router-dom';
import Singup from '../Signup/Singup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MySwal = withReactContent(Swal);

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.enviar = this.enviar.bind(this);
  }

  changeEmail($event) {
    const newValue = $event.target.value;
    this.setState({ email: newValue });
  }

  changePassword($event) {
    const newValue = $event.target.value;
    this.setState({ password: newValue });
  }

  enviar($event) {
    $event.preventDefault();

    if (this.state.email !== '' && this.state.password !== '') {
      let message = JSON.stringify(this.state);
      fetch('http://localhost:8080/login', {
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
          if (data.msg === 'Login Succes') {
            MySwal.fire({
              icon: 'success',
              title: 'Registro',
              text: data.msg,
              footer: 'ok',
            });
            // eslint-disable-next-line no-restricted-globals
            window.location = '/';
          } else {
            MySwal.fire({
              icon: 'warning',
              title: 'Ups...',
              text: data.msg,
              footer: 'Revise que los campos esten bien',
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
                "Ingresa a UVGente, para ver los productos y servicios que la
                comunidad UVG tiene para ofrecerte"
              </p>
            </Container>
          </Col>
          <Col className="text-center mt-4 mb-4" sm={6}>
            <Container className="faq">
              <p className="titulos">Inicia Sesion</p>
              <Form className="App" onSubmit={this.handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Correo UVG</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={this.state.email}
                    onChange={this.changeEmail}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                    value={this.state.password}
                    onChange={this.changePassword}
                  />
                </Form.Group>

                <Container>
                  <Button
                    id="Entrada"
                    className="mt-2"
                    variant="success"
                    onClick={this.enviar}
                  >
                    Iniciar Sesión
                  </Button>
                  <br />
                  <br />
                  <Router>
                    <Routes>
                      <Route path="/signup" element={<Singup />} />
                      <br />
                      <br />
                    </Routes>
                  </Router>
                </Container>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
