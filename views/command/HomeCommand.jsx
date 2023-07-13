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
} from "./home-command.styled";

export default function HomeCommad() {
  const [itemsApi, setItemsApi] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let abortController = new AbortController();

    function getAPI() {
    //   fetch("https://command.views.page/api/command")
    fetch(`https://command.views.page/api/${currentPage}`)
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
  }, []);

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

  const [tagSearch, setTagSearch] = useState("");

  useEffect(() => {
    let value;
    // Get the value from local storage if it exists
    value = localStorage.getItem("tag_search") || "git";
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
                  {item.name.toUpperCase().replace(/\.|\-/g, " ")}
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
    </Container>
  );
}
