import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import NotFound from "./components/NotFound/NotFound";
import Pagination from "./components/Pagination/Pagination";
import {
  Container,
  Content,
  Description,
  Dot,
  Footer,
  Li,
  LinkTag,
  SearchTitle,
  Text,
  TitleProject,
  Ul,
  Url,
} from "./home-command.styled";

export default function HomeCommad({ id }) {
  const [itemsApi, setItemsApi] = useState([]);
  const [tagSearch, setTagSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let abortController = new AbortController();

    function getAPI() {
      //   fetch("https://command.views.page/api/command")
      fetch(`./api/${tagSearch || "bashBasico"} `)
        .then(async (res) => {
          if (!res.ok) {
            setItemsApi([]);
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

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    setTagSearch(id);
  }, [router]);

  // When user submits the form, save the favorite number to the local storage
  const play = useCallback(
    (value) => {
      router.push(pathname + "?" + createQueryString("id", value));
    },
    [searchParams]
  );

  return (
    <Container>
      <Content>
        <Description>
          Tag Disponíveis:{" "}
          <LinkTag onClick={() => play("bashBasico")}>#BashBasico</LinkTag>
          {""}
          <LinkTag onClick={() => play("git")}>#Git</LinkTag>
        </Description>

        <SearchTitle>Resultado: {tagSearch} </SearchTitle>
        {itemsApi.length > 0 && (
          <>
            <Ul>
              {currentItems.map((item) => (
                <Li key={item.id}>
                  <Url>
                    <TitleProject>{item.name}</TitleProject>
                    <Text>{item.description || "Sem descrição"}</Text>
                    <Text>
                      <Dot />
                      {item.language || "Sem especificação"}
                    </Text>
                  </Url>
                </Li>
              ))}
            </Ul>{" "}
            <Pagination
              totalPages={totalPages}
              handleClick={handleClick}
              currentPage={currentPage}
            />
          </>
        )}
      </Content>

      {itemsApi.length === 0 && <NotFound />}
      <Footer>
        Todos direitos reservados -{" "}
        <a href="mailto://team@afu.link">Feedback</a> - By Afu.link - feito com
        ❤️ São Paulo - Brasil
      </Footer>
    </Container>
  );
}
