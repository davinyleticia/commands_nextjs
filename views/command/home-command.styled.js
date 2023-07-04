import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0;
  background-color: #1e2028;
  margin: 0 auto;


`;

export const Content = styled.div`

  display: flex;
  padding: 20px;
  flex-direction: column;
    max-width: 80%rem;

  @media (max-width: 600px) {
    padding: 5px;
  }
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 2rem 0px;

  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 10px;
    background-color: whitesmoke;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: darkgray;
  }

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
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
    background: #1e211a;
    opacity: 0.8;
  }

  @media (max-width: 760px) {
    font-size: 13px;
    min-height: 8rem;
  }
`;

export const TitleProject = styled.strong``;

export const Url = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background: transparent;
  border: none;
  text-decoration: none;
  gap: 1rem;
  color: #fff;
  cursor: pointer;
  padding: 0 0.5rem;

  &:hover {
    color: #fff;
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

export const Description = styled.strong`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  color: #fff;
  size: 20px;
  padding: 1rem;
`;

export const ProjectContent = styled.div`
  width: 100%;
`;

export const Hr = styled.hr`
  width: 89%;
`;

export const SearchTitle = styled.p`
  text-align: start;
  color: #ffaa;
  size: 10px;
  padding: 1rem;
`;

export const LinkTag = styled.a`
  cursor: pointer;
  padding: 0 0.5rem;

  &:hover {
    color: #007bff;
  }
`;
