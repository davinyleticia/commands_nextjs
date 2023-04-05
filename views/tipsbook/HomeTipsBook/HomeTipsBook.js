import React from "react";
import { Container, Row, Col } from "reactstrap";
import { GrSend } from "react-icons/gr";
import { Btn, Input, Button } from "./HomeTipsBook.styled";

const FeatureBox = () => {
  return (
    <>
      <Row md={{ size: 6, offset: 1 }} className="justify-content-center">
        <Btn>
          <Input placeholder="E-mail" />
          <Button
            as="a"
            href="https://sysapp.afu.link"
          >
            Inscrever-se (Grátis) <GrSend />
          </Button>
        </Btn>
      </Row>
      <Row className="justify-content-center section">
      Junte-se à nossa turma de 122.018 leitores ativos
      </Row>
    </>
  );
};

const HomeTipsBook = () => {
  return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <div patchEvent className="font-weight-normal text-dark">
                <img src="images/logo-tp.svg" />
              </div>
            </div>
          </Col>
        </Row>
        <h4 className="title text-center mb-5">
        Notícias de Tecnologia para quem não tem tempo de ler notícias.
        </h4>
        <FeatureBox />
      </Container>
    </section>
  );
};

export default HomeTipsBook;
