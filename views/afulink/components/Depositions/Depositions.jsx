import React from "react";
import DIOIco from "../ico/dio";
import ReprogramaIco from "../ico/reprograma";
import TodasLetrasIco from "../ico/todasletras";
import { Card, Container, Content, Titulo } from "./Depositions.styled";

// import { Container } from './styles';

function Depositions() {
  return (
    <Container>
      <Titulo>Depoimentos</Titulo>
      <Content>
        <Card>
          <p>
            Eu tive o privilégio de trabalhar com a equipe da Afulink para criar
            um software sob medida para a minha empresa e gostaria de
            compartilhar a minha experiência. Desde o primeiro contato até a
            entrega final, a Afulink demonstrou um comprometimento excepcional
            com o sucesso do projeto. Eles começaram por entender profundamente
            as nossas necessidades e objetivos específicos, o que foi
            fundamental para o sucesso do projeto.
          </p>
          <spam>Marcela Serra</spam>
        </Card>
      </Content>
    </Container>
  );
}

export default Depositions;
