import React from 'react';
import { Container, Row, Col } from "reactstrap";


const About = () => {

  return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">Sobre <span className="text-warning">Nós</span></h3>
              <p className="text-muted">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h5 className="font-weight-light line-height-1_6 text-dark mb-4">“A educação exige os maiores cuidados, porque influi sobre toda a vida.”</h5><p>Sêneca,  filósofo, advogado e escritor.</p>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Nossa Missão</h6>
                <p className="text-muted font-weight-light">Ser lider em certificação e gerenciamento de estratégia em treinamentos nas empresas e escola</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Nossa Visão</h6>
                <p className="text-muted font-weight-light">ser Interuptivo, inclusivo, aproximar culturas e povos atraves do compatilhamento do conhecimento</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;