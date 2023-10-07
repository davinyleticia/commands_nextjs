import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  margin: 0 1rem 0 0 !important;
  width: 21rem;
  @media (max-width: 600px) {
    margin: 2rem;
  }
`;

export const Btn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  @media (max-width: 819px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  margin: 0 !important;
  @media (max-width: 600px) {
    margin: 2rem;
  }
`;
