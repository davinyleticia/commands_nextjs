import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { GrSend } from 'react-icons/gr';
import { Btn, Input } from './certificacao.styled';

const FeatureBox = (props) => {
  return (
    <>
    {
      props.features.map((feature, key) =>
      (feature.id % 2 !== 0) ?
        <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
          <Col md={5} >
            <div>
              <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                {feature.isInput ?
                <Btn>
                <Input placeholder='Digite o Código' />
                <button className="btn btn-warning mt-3">Validar <GrSend /></button>
                </Btn>
                : 
                <a href={feature.link} className="f-16 text-warning">Read More <span className="right-icon ml-2">&#8594;</span></a>}
              </div>
            </Col>
        </Row>
      :
      <Row key={key} className="align-items-center mt-5">
        <Col md={6}>
          <div className="mb-4">
            <div className="my-4">
              <i className="mdi mdi-account-group"></i>
            </div>
            <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
            <p className="text-muted mb-3 f-15">{feature.desc}</p>
            <a href={feature.link} className="f-16 text-warning">Read More <span className="right-icon ml-2">&#8594;</span></a>
          </div>
        </Col>
        <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
          <div>
            <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
          </div>
        </Col>
      </Row>
      )
    }
    </>
  );
}

const Certificacao = () => {

  const features = [
    {id : 1, img : "./images/45.png", title : "Validar Certificado", desc : "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", link : "/", isInput: true},
    {id : 2, img : "./images/Group Members.png", title : "Fazer Prova de Certificação", desc : "Sed perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo excepturi sint occaecati cupiditate architecto.", link : "/",  isInput: false},
  ];

  return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Certificação / Validar certificado</span></h3>
              <p className="text-muted">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
}

export default Certificacao;
