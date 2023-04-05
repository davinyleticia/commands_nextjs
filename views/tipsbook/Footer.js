import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  
  return (
      <Container>
        <Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">2022 - 2023 © TIPSBOOK -  Todos direitos reservado, logomarca e o nome é protegido por direito de patente</p>
            </div>
          </Col>
        </Row>
      </Container>
  );
}

export default Footer;