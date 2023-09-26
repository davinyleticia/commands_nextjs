import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Titulo = styled.h4`
  padding-top: 1rem;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0 3rem 0;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`

border: 5px solid #1011;
padding: 1rem;
width: 100%;
border-radius: 10px;
img {
    margin: 0 1rem;
  };
  spam{
    display: flow;
    text-align: center;
  }
`;
