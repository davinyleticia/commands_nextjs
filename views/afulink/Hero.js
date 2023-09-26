import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Depositions from './components/Depositions/Depositions';
import Parceria from './components/parceria/Parceria';

const Hero = () => {
  return (
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">O que fazemos...</p>
              <h1 className="mb-5 font-weight-normal line-height-1_4">Tranformando o mundo através do <span className="text-primary font-weight-medium">Código</span></h1>
              <p className=" mb-1 pb-2">Nós somos especialistas em aulas <strong>in company</strong> e <strong>desenvolvimento de software personalizado</strong>. Transformamos sua equipe em talentos digitais e criamos soluções tecnológicas sob medida.</p>
              <p className=" mb-5 pb-2">Vamos conversar?</p>
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
        <hr></hr>
        <Depositions/>
      </Container>
  );
}

export default Hero;