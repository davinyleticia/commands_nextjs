import React from "react";
import { Container, Row, Col } from "reactstrap";
import { BtnCard, Content, Description, Img } from "./services.styled";

const Services = () => {
  const services = [
    {
      img: "images/logo-tp.svg",
      desc: "Assina nossa newlleter mesal, e segue no nossas redes, um local com dicas para todos os gosto.",
      url: "https://tipsbook.info",
    },
    {
      img: "images/logo-drives.svg",
      desc: "Site com milhares de drives, local perfeito para pesquisas",
      url: "https://drives.directory",
    },
    {
      img: "images/logo-devicescodes.svg",
      desc: "local com códigos para seu projeto open-source.",
      url: "https://devices.codes",
    },
    {
      img: "images/logo-consult.svg",
      desc: "Consultoria para sua empresa, com melhor equipe para criar projeto de software educacional",
      url: null,
    },
  ];

  const Card = ({service}) => {
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
        <Row>
          {services.map((service, key) => (
            <Col key={key} lg={4} md={6}>
              {service.url ? (
                <BtnCard href={service.url}><Card service={service}/></BtnCard>
              ) : (
                <Content><Card service={service}/></Content>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
