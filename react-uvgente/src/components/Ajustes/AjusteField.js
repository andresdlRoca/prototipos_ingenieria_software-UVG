import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

        <Container
          className="editentry"
          data-testid="EDIT"
          onClick={() => setEntry(content)}
        >
          Editar
        </Container>
      </Col>
    </Row>
  );
}

export default AjusteField;
