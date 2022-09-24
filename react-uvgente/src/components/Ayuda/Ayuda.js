import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import './Ayuda.css';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

export default function Ayuda() {
  return (
    <Container>
      <Row>
        <Col className="text-center mt-4 mb-4">
          <Container className="faq">
            <p className="titulos">Preguntas Frecuentes</p>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>¿Como vender un articulo?</Accordion.Header>
                <Accordion.Body>
                  Para poner en venta un artículo y/o servicio, debe dirigirse a
                  la pestaña "Vender" en la barra superior, seguidamente elegir
                  entre articulo y servicio y llenar el formulario con la
                  informacion necesaria para realizar una publicacion en la
                  página.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>¿Como comprar un articulo?</Accordion.Header>
                <Accordion.Body>
                  Para comprar un artículo, primero debe seleccionar la
                  publicación del articulo de su interes, la cual tendrá la
                  opcion de contactarse mediante UVGente con el vendedor para
                  realizar la transacción del produto y/o servicio
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  ¿Como ver el perfil de otro usuario?
                </Accordion.Header>
                <Accordion.Body>
                  Estando en la publicación de un producto o servicio, al hacer
                  click en el ícono del usuario que creo la publicación se podrá
                  acceder a su perfil, así como la opción de agregarlo a su
                  lista de favoritos.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>¿Como edito mi perfil?</Accordion.Header>
                <Accordion.Body>
                  Ingresando a la página de tu perfil, encontrarás las opciones
                  para editar tu foto de perfil, descripción, contactos y
                  enlaces externos.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  ¿Como cambio mi foto de perfil?
                </Accordion.Header>
                <Accordion.Body>
                  Desde la página Mi perfil, encontarás la opción de cambia foto
                  de perfil al lado de tu foto actual, luego deberás seleccionar
                  tu nueva foto y confirmarla para que sea visible.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  ¿Como ver detalles de un producto/servicio?
                </Accordion.Header>
                <Accordion.Body>
                  Desde la página principal y las pestañas de productos,
                  servicios y Tops prodás visualizar las publicaciones de los
                  produtos/servicios disponibles, así como hacer uso de la barra
                  de busqueda, basta con ingresar a una publicación de tu
                  interes para ver la información detallada del producto.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  ¿Como reinicio mi contraseña?
                </Accordion.Header>
                <Accordion.Body>
                  Desde la página de configuraciones, la cual se puede acceder
                  desde la barra lateral en la parte inferior, encontrarás la
                  información de tu cuenta, como tu correo, contraseña, contacto
                  principal y correo de contacto, ahí encontrarás la opción de
                  editar tu contraseña, así como la demás información.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  ¿Como cambio mi tipo de contacto principal?
                </Accordion.Header>
                <Accordion.Body>
                  Desde la página de configuraciones, la cual se puede acceder
                  desde la barra lateral en la parte inferior, encontrarás la
                  información de tu cuenta, como tu correo, contraseña, contacto
                  principal y correo de contacto, ahí encontrarás la opción de
                  editar tu contacto principal, así como la demás información.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  ¿Como puedo filtrar mis busquedas?
                </Accordion.Header>
                <Accordion.Body>
                  Del lado izquierdo a la par de la barra de busqueda
                  encontrarás el botón de filtros, el cual te desplegará los
                  filtros disponibles y pordrás seleccionar los que desees, y
                  cuando relices tu próxima busqueda serán aplicados en tus
                  resultados.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        </Col>

        <Col className="text-center  mt-4 mb-4">
          <Container className="faq">
            <p className="titulos">Contactar a Soporte</p>
            <Container>
              <AiOutlineMail size={30} />
              <p>Correo Electronico</p>
              <p className="highlighted">uvgente@soporte.edu.gt</p>
              <AiOutlinePhone size={30} />
              <p>Contactos</p>
              <p className="highlighted">+502 8005 6598</p>
              <p className="highlighted">+502 7852 6245</p>
            </Container>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
