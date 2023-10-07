import React from "react";
import WarnIco from "../Ico/Warn";
import { Container } from "./index.styled";

function NotFound() {
  return (
    <Container>
      <WarnIco />
      <p>
        Não encontramos um resultado para essa busca. Verifique os dados
        informados e tente novamente.
      </p>
    </Container>
  );
}

export default NotFound;
