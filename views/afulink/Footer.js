import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  const links = [
    { id : 1, title : "Rede Social",
      child : [
          { title : "Linkedin", link : "https://www.linkedin.com/company/afulink/" },
          { title : "Instagram", link : "https://www.instagram.com/afulink/" },
          { title : "Twiter", link : "https://www.twiter.com/afulink/" },
          { title : "Youtube", link : "/" }
      ]
    },
    { id : 2, title : "docs",
      child : [
          { title : "FAQs", link : "/" },
          { title : "Politica de Privacidade", link : "/" },
      ]
    },
  ];
  
  return (
    <section className="footer section">
      <Container>
        <Row>
          <Col lg={4}>
              <div className="mb-4">
                <p className="text-muted mt-4 mb-2">Contato:</p>
                <h6 className="text-muted font-weight-normal">team@afu.link</h6>
              </div>
          </Col>
          <Col lg={8}>
            <Row>
              {
                links.map((link, key) =>
                  <Col key={key} md={4}>
                    <h6 className="text-dark mb-3">{link.title}</h6>
                    <ul className="list-unstyled company-sub-menu">
                      {
                        link.child.map((fLink, key) =>
                          <li key={key}><a href={fLink.link}>{fLink.title}</a></li>
                        )
                      }
                    </ul>
                  </Col>
                )
              }
              
              <Col md={4}>
                <h6 className="text-dark mb-3">Local</h6>
                <p className="text-muted f-14">Feito com ❤️ São Paulo - Brasil</p>
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-linkedin"></i></a></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">2020 - 2023 © Afulink Informática. Todos direitos reservado, logomarca e o nome é protegido por direito de patente</p>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;