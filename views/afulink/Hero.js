import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Parceria from './parceria/Parceria';

const Hero = () => {
  return (
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">O que fazemos...</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">Tranformando o mundo através do <span className="text-primary font-weight-medium">Código</span></h1>
              <p className="text-muted mb-1 pb-2">Solução para sua marca na web, temos a melhor consultoria para alavancar a sua marca no mundo digital.</p>
              <p className="text-muted mb-4 pb-2">Venha fazer um orçamento conosco.</p>
              <a href="mailto://team@afu.link#" className="btn btn-warning">
                Contato<span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/images/Group Members.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
        <hr></hr>
        <Parceria/>
      </Container>
  );
}

export default Hero;