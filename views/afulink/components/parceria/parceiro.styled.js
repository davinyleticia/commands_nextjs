import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Titulo = styled.h2`
  padding-top: 1rem;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
justify-content: space-between;
  margin: 3rem 0;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  img {
    margin: 0 1rem;
  }
`;
