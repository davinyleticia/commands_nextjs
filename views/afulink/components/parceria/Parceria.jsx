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
          src="https://media.licdn.com/dms/image/C4E0BAQEuf72oTAIzDw/company-logo_200_200/0/1619578202545?e=1696464000&v=beta&t=xOEh7QVQt3MWrFwRMOKa8mgDAZCzQcbjtKlivSrjBLk"
        />
        <TodasLetrasIco />
        <ReprogramaIco />
        <img
          width={110}
          height={110}
          src="https://st.adv.br/public/static/img/logo.png"
        />
      </Content>
    </Container>
  );
}

export default Parceria;
