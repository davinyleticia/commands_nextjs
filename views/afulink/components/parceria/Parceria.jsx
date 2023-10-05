import React from "react";
import DIOIco from "../ico/dio";
import ReprogramaIco from "../ico/reprograma";
import TodasLetrasIco from "../ico/todasletras";
import { Container, Content, Titulo } from "./parceiro.styled";

// import { Container } from './styles';

function Parceria() {
  return (
    <Container>
      <Titulo>Clientes</Titulo>
      <Content>
        <DIOIco />
        <img
          width={110}
          height={110}
          src="https://codivas.com.br/assets/img/logo-codivas-horizontal.png"
        />
        <TodasLetrasIco />
        <ReprogramaIco />
        <img
          width={110}
          height={110}
          src="https://acordo.link/public/static/img/logo.png"
        />
      </Content>
    </Container>
  );
}

export default Parceria;
