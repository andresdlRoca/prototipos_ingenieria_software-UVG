import React, { useState } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';

function AjusteField({ content, variable_content }) {
  const [entryState, setEntry] = useState('');

  return (
    <Row className="mt-4 mb-4">
      <Col sm={8}>{content}</Col>
      <Col sm={4}>
        <Container
          contentEditable={entryState === content}
          className={entryState === content ? 'DataEntry enabled' : 'DataEntry'}
        >
          {variable_content}
        </Container>

        <Container className="editentry" onClick={() => setEntry(content)}>
          Editar
        </Container>
      </Col>
    </Row>
  );
}

export default AjusteField;
