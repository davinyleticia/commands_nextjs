import styled from "styled-components";
import CloseIco from "../Ico/Close";

export const Container = styled.div`
  background: #ffffff;
  border-bottom: ${(props) => (props.active ? "2px solid #FF7F00" : "none")};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
`;

export const Fragment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: start;
  padding: 0 !important;
`;

export const BtnViewsAll = styled.button`
  color: #593493;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem 3rem !important;
  justify-content: center;
  border-radius: 0.5rem;
  border: solid 1px #593493;
  font-weight: 500;
  cursor: pointer;
`;

export const ContentViewsAll = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivisionLine = styled.div`
  background: #000;
  padding: 0.01rem !important;
`;

export const Content = styled.div`
  padding: 0.5rem !important;
  width: 25rem;

  @media screen and (max-width: 600px) {
    width: 18rem;
  }
`;

export const ContentInfo = styled.div`
  padding-left: 1rem !important;
  margin: 0 !important;
`;

export const Title = styled.h4`
  padding: 0 !important;
  margin: 0 !important;
`;

export const Data = styled.div`
  padding: 0 !important;
  margin: 0 !important;
`;

export const Description = styled.div``;

export const Close = styled(CloseIco)`
  position: absolute;
  cursor: pointer;
`;

export const IcoSvg = styled.div`
  margin: 0;
  padding: 0;
`;
