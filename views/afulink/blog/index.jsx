import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import TBIco from "../ico/tb";
import { Banner, Card, Li, Text, TitleProject, Ul, Url } from "./styled";

const Blog = ({ itemsApi }) => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <Container>
          <Banner>
            <div>
              <TBIco />
              <p>TipsBook</p>
            </div>
          </Banner>
          <hr></hr>
          <React.Fragment>
            <Ul>
              {itemsApi?.map((item) => (
                <Li key={item.id}>
                  <Url href={`tipsbook/${item.slug}`}>
                    <img src={item.image || './images/fundo.jpg'} alt={item.name} />
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

export default Blog;
