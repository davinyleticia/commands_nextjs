import React, { useEffect, useMemo, useState } from "react";
import Pagination from "./components/Pagination/Pagination";
import {
  Container,
  Content,
  Ul,
  Li,
  TitleProject,
  Url,
  Text,
  Dot,
  Description,
  SearchTitle,
  LinkTag,
  Footer,
} from "./home-command.styled";

export default function HomeCommad() {
  const [itemsApi, setItemsApi] = useState([]);
  const [tagSearch, setTagSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let abortController = new AbortController();

    function getAPI() {
    //   fetch("https://command.views.page/api/command")
    fetch(`./api/${tagSearch || 'git'} `)
        .then(async (res) => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          var data = await res.json();
          setItemsApi(data);
        })
        .catch((e) => console.log(e));
    }

    getAPI();

    return () => abortController.abort();
  }, [tagSearch]);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(
    itemsApi.slice().sort((a, b) => new Date(b.mes) - new Date(a.mes)).length /
      itemsPerPage
  );
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = itemsApi
    .slice()
    .slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    let value;
    // Get the value from local storage if it exists
    value = localStorage.getItem("tag_search") || "bashBasico";
    setTagSearch(value);
  }, []);

  // When user submits the form, save the favorite number to the local storage
  useEffect(() => {
    localStorage.setItem("tag_search", tagSearch);
  }, [tagSearch]);

  return (
    <Container>
      <Content>
        <Description>
          Tag Disponíveis:{" "}
          <LinkTag onClick={() => setTagSearch("bashBasico")}>
            #BashBasico
          </LinkTag>{""}
          <LinkTag onClick={() => setTagSearch("git")}>#Git</LinkTag>
        </Description>

        <SearchTitle>Resultado: {tagSearch} </SearchTitle>
        <Ul>
          {currentItems.map((item) => (
            <Li key={item.id}>
              <Url>
                <TitleProject>
                  {item.name}
                </TitleProject>
                <Text>{item.description || "Sem descrição"}</Text>
                <Text>
                  <Dot />
                  {item.language || "Sem especificação"}
                </Text>
              </Url>
            </Li>
          ))}
        </Ul>
      </Content>
      <Pagination
        totalPages={totalPages}
        handleClick={handleClick}
        currentPage={currentPage}
      />
      <Footer>
        Todos direitos reservados - <a href="mailto://team@afu.link">Feedback</a> - By Afu.link - feito com ❤️ São Paulo - Brasil
      </Footer>
    </Container>
  );
}
