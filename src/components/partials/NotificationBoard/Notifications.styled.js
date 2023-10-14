import styled from 'styled-components';

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
  z-index:10000;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
