import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0;
  background-color: #fff;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  width: 80%;
  min-height: 78vh;

  @media screen and (max-width: 600px) {
    padding: 5px;
  }
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  margin: 2rem 0px;

  @media screen and (max-width: 1341px) {
    grid-template-columns: 50% 50%;
  }


  @media screen and (max-width: 887px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  word-break: break-word;
  margin: 10px 10px 20px;
  /* box-shadow: 1px 1px 1px 2px gray; */
  border: 1px solid gray;
  gap: 5px;
  border-radius: 10px;
  padding: 10px;

  &:hover {
    background: #ffa;
    opacity: 0.8;
  }

  @media (max-width: 760px) {
    font-size: 13px;
    min-height: 8rem;
  }
`;

export const TitleProject = styled.strong`
  max-width: 10rem;
`;

export const Url = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
  border: none;
  text-decoration: none;
  gap: 1rem;
  color: #000;
  cursor: pointer;
  padding: 0 0.5rem;

  &:hover {
    color: #001;
  }
`;

export const Text = styled.p`
  text-align: start;
  margin: 0.5rem 0;
  max-width: 17rem;
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

export const Description = styled.strong`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  color: #000;
  size: 20px;
  padding: 1rem;
  max-width: 26rem;
`;

export const ProjectContent = styled.div`
  width: 100%;
`;

export const Hr = styled.hr`
  width: 89%;
`;

export const SearchTitle = styled.p`
  text-align: start;
  color: #000;
  size: 10px;
  padding: 1rem;
`;

export const LinkTag = styled.a`
  cursor: pointer;
  padding: 0 0.5rem;

  &:hover {
    color: #000;
  }
`;
