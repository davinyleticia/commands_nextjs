import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { Content, Description, Title } from './curso.styled';

const Curso = () => {
  const services = [
    { title : "Bash Básico", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", url: 'https://google.com' },
    { title : "FileSytem LInux", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", url: 'https://google.com'},
    { title : "Primeira Lei de Ohm", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", url: 'https://google.com'},
    { title : "Arquitetura Básica do Computador", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", url: 'https://google.com'},
    { title : "Reactjs Básico", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", url: 'https://google.com'},
    { title : "Custom Hooks Reactjs", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", url: 'https://google.com'},
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Cursos</span></h3>
              <p className="text-muted">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <Content href={service.url}>
                  <Title className="text-dark font-weight-normal pt-1 mb-4">{service.title}</Title>
                  <Description className="text-muted mb-4">{service.desc}</Description>
                </Content>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}

export default Curso;