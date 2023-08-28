import React from "react";
import { Container, Row, Col } from "reactstrap";
import { GrSend } from "react-icons/gr";
import { Btn, Input, Button } from "./login.styled";

const FeatureBox = () => {
  return (
    <>
      <Row md={{ size: 6, offset: 1 }} className="justify-content-center">
        <Btn>
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" />
          <Button as="a" href="https://app.afu.link" className="btn btn-warning mt-3">
            login <GrSend />
          </Button>
        </Btn>
      </Row>
      <Row className="justify-content-center section">
        <a href="">Esqueci a senha</a>
      </Row>
    </>
  );
};

const Login = () => {
  const features = [
    {
      id: 1,
      img: "./images/45.png",
      title: "Validar Certificado",
      desc: "Valida aqui o seu certificado emitido pela AfuLink, o nosso sistema anti-fraude atrela um código único para cada certficado",
      link: "/",
      isInput: true,
    },
    {
      id: 2,
      img: "./images/Group Members.png",
      title: "Fazer Prova de Certificação",
      desc: "Sed perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo excepturi sint occaecati cupiditate architecto.",
      link: "/",
      isInput: false,
    },
  ];

  return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                {"Login "}
                <span className="text-warning">Interno</span>
              </h3>
              <p className="text-muted">Sistema para o nosso clientes</p>
            </div>
          </Col>
        </Row>
        <FeatureBox />
      </Container>
    </section>
  );
};

export default Login;
