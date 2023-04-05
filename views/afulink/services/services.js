import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  BtnCard,
  Card,
  Content,
  Description,
  Img,
  List,
  Title,
} from "./services.styled";

const Services = () => {
  const services = [
    {
      img: "images/logo-tp.svg",
      desc: "Assina nossa newlleter mesal, e segue nas nossas redes, um local com dicas para todos os gosto.",
      url: "https://tipsbook.info/home",
      website: true,
    },
    {
      img: "images/logo-devicescodes.svg",
      desc: "local com códigos para seu projeto open-source.",
      url: "https://studies.codes",
      website: true,
    },
    {
      img: "images/logo-consult.svg",
      desc: "Consultoria para sua empresa, com melhor equipe para criar projeto de software educacional",
      url: null,
      website: false,
    },
    {
      img: "images/logo-servicesemail.svg",
      desc: "oferecemos serviços de configuração de e-mail cooporativo",
      url: null,
      website: false,
    },
    {
      img: "images/logo-cloud.svg",
      desc: "oferecemos serviços de hospedagem em cloud",
      url: null,
      website: false,
    },
  ];

  const RenderCard = ({ service }) => {
    return (
      <>
        <Img
          width="120px"
          src={service.img}
          className="text-dark font-weight-normal pt-1 mb-4"
        />
        <Description className="text-muted mb-4">{service.desc}</Description>
      </>
    );
  };

  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                Nosso <span className="text-warning">Serviços</span>
              </h3>
              <p className="text-muted">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book
              </p>
            </div>
          </Col>
        </Row>
        <Content>
          <List>
            {services.map((service, key) =>
              service.website ? (
                <BtnCard href={service.url}>
                  {" "}
                  <Title>Nosso Website</Title>
                  <RenderCard service={service} />
                </BtnCard>
              ) : null
            )}
          </List>
          <List>
            {services.map((service, key) =>
              service.website === false ? (
                <Card>
                  <Title>Serviços Empresariais</Title>
                  <RenderCard service={service} />
                </Card>
              ) : null
            )}
          </List>
        </Content>
      </Container>
    </section>
  );
};

export default Services;
