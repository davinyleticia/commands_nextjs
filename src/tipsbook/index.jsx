import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import Adsense from "./components/adsense/adsense";
import TBIco from "./components/ico/tb";
import {
  Banner,
  Card,
  Li, NewLatter,
  Text,
  TitleProject,
  Ul,
  Url
} from "./styled";

const Blog = ({ itemsApi }) => {
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
            <a href="./">
              <TBIco />
              <p>TipsBook</p>
            </a>
          </Banner>
          <hr></hr>
          <React.Fragment>
            <Adsense/>
            <Ul>
              {itemsApi?.map((item) => (
                <Li key={item.id}>
                  <Url href={`post/${item.slug}`}>
                    <img
                      src={item.image || "./images/fundo.jpg"}
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
            <NewLatter>
              <h3>Canal TipsBook no Youtube</h3>
              <p>
                Junte-se à nossa turma também no youtube: segue, compatilhe e
                deixe o seu joinha:
              </p>
            </NewLatter>
          </React.Fragment>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default Blog;
