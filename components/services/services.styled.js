import styled from "styled-components";

export const BtnCard = styled.a`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  padding: 0.5rem;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  &:hover {
    text-decoration: none;
    border: 1px solid #528854;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  padding: 0.5rem;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
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
