import Container from 'react-bootstrap/esm/Container';
import profile_pic from '../../media/cat_pp.jpg';
import five_stars_image from '../../media/five_stars_rate.png';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';

const MiPerfil = () => {
  return (
    <Container>
      <Row className="flex">
        <Col className="mt-4 mb-4" sm={6}>
          <Container>
            <img
              src={profile_pic}
              alt="profilepic"
              className="pp_into_side_bar_card_main_content"
            />
            <Container className="valoracion-container">
              <p className="titulos">Valoracion</p>
              <img
                src={five_stars_image}
                alt="profilepic"
                className="five_start_into_main_content"
              />
            </Container>
          </Container>
        </Col>
        <Col className="mt-4 mb-4" sm={6}>
          <Container className="faq">
            <h4>Geralt Hernandez</h4>
            <h4>Estudiante UVG</h4>
            <h4>Ingeniería en Ciencias de la Computacion y TI</h4>
            <h4> Sobre mi:</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
              amet tellus eleifend, rutrum purus vel, faucibus tellus. Maecenas
              efficitur lacus a aliquet scelerisque. Aenean vitae tincidunt
              magna.
            </p>
            <p>
              <Container className="contacts_Profile">Contactos:</Container>
              <br />
              Correo electronico: <br />
              hern19856@uvg.edu.gt
              <br />
              Telefono celular: <br />
              +502 6942 0502
              <br />
              <br />
              Enlaces Externos:
              <br />
              <a href="https://www.linkedin.com/in/luis-pedro-gonzalez-aldana-3462311ab">
                Linkedin
              </a>{' '}
              <br />
              <a href="https://github.com/LPELCRACK896">Github</a>
            </p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default MiPerfil;
