import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10rem;
  background: #1b6a94;
  padding: 1rem;
  margin: 1rem 0;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
      font-size: 3rem;
      margin: 0 1rem;
    }
  }
`;

export const Title = styled.h1`
  padding: 0 !important;
  margin: 3rem 0 !important;
  text-align: center;
`;
export const Description = styled.strong`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  color: #f1e8e8;
  size: 20px;
  padding: 1rem;
  max-width: 26rem;
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: 36% 36% 36%;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 2rem 0px;
  width: 95%;

  &::-webkit-scrollbar {
    border-radius: 10px;
    background-color: #f1e8e8;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #f1e8e8;
  }

  @media (max-width: 1265px) {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  word-break: break-word;
  margin: 10px 10px 20px;
  justify-content: flex-start;
  /* box-shadow: 1px 1px 1px 2px gray; */
  border: 1px solid #f1e8e8;
  gap: 5px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: #f0efef;

    opacity: 0.8;
  }
  img {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    width: 100%;
    height: 10rem;
  }

  @media (max-width: 1265px) {
    font-size: 13px;
    min-height: 8rem;
  }
`;

export const TitleProject = styled.strong``;

export const Url = styled.a`
    text-decoration: none;
  :hover{
    text-decoration: none;
  }
`;

export const Text = styled.p`
  text-align: start;
  margin: 0.5rem 0;
`;

export const Dot = styled.div`
  position: relative;
  top: 1px;
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid #563d7c;
  border-radius: 50%;
  background: #563d7c;
  margin-right: 1rem;
`;

export const DescriptionBtn = styled(Description)`
  cursor: pointer;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 1rem 0;
  p {
    padding: 0 1rem;
  }
  @media (max-width: 1265px) {
    justify-content: center;
  }
`;

export const GroupIcons = styled.div`
  bottom: 0;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  margin: 1rem;
`;

export const Card = styled.div`
  padding: 1rem 1.7rem  1.7rem  1.7rem ;
  display: flex
  flex-direction:column;
  justify-content: space-between;
`;
