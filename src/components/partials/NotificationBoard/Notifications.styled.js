import styled from "styled-components";

export const Cads = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 0;
  background: rgba(255, 251, 212, 0.827);
  border-radius: 0 0 0 40px;
  padding: 1rem;
  margin-top: 5.9rem;
  z-index: 10000;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Btn = styled.button`
  font-size: 1.5rem;
  border: 1px solid #000;
  border-radius: 6px;
  background: rgba(255, 251, 12, 0.827);
  :hover{
    cursor: pointer;
    background: rgba(255, 251, 212, 0.827);
  }
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
