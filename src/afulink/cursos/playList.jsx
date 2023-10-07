import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";

import {
  Banner,
  Card,
  Li, Text,
  TitleProject,
  Ul,
  Url
} from "./styled";

const PlayList = ({ itemsApi }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <hr></hr>
      {isClient ? (
        <Container>
          <Banner>
            <a href="./cursos">
            <Image src={`./images/logo.svg`} width={100} height={100} />
              <p>Cursos</p>
            </a>
          </Banner>
          <hr></hr>
          <React.Fragment>
            <Ul>
              {itemsApi?.map((item) => (
                <Li key={item.id}>
                  <Url href={`cursos/${item.slug}`}>
                    <img
                      src={item.image || "/images/fundo-cursos.png"}
                      alt={item.name}
                    />
                    <Card>
                      <TitleProject>{item.title.rendered}</TitleProject>
                      <Text
                        dangerouslySetInnerHTML={{
                          __html: item.excerpt.rendered || "Sem descrição",
                        }}
                      />
                    </Card>
                  </Url>
                </Li>
              ))}
            </Ul>
          </React.Fragment>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default PlayList;
