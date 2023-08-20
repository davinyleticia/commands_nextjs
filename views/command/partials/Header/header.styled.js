import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  background: rgba(255, 251, 112, 0.827);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Name = styled.span`
  font-family: "Roboto";
  font-size: 1.5rem;
  color: #ffffff;
`;

export const Proficiency = styled.span`
  font-family: "Roboto";
  font-size: 1.5rem;
  color: #d5d5d5;
`;


export const Text = styled.div`
    size: 10px;
  @media screen and (max-width: 600px) {
  size: 16px;
  }
`;

