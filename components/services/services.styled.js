import styled from "styled-components";

export const BtnCard = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  margin: 0.5rem;
  padding: 0.5rem;
  &:hover {
    text-decoration: none;
    border: 1px solid #528854;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  margin: 0.5rem;
  padding: 0.5rem;
  &:hover {
    text-decoration: none;
    border: 1px solid #528854;
  }
`;

export const Title = styled.h4`
  display: flex;
  font-size: 1.2rem;
  font-weight: 600;
  color: #000;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: #000 !important;
  text-align: center;
`;

export const Img = styled.img`
  width: 120px;
  height: 120px;
`;
export const Content = styled.div`

`;

export const List = styled.div`
    display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: center;
  grid-row-gap: 1rem;
  margin: 2rem 0px;
  width: 100%;
`;
