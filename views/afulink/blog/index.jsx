import React, { useEffect, useState } from "react";
import script from "next/script";
import { GrSend } from "react-icons/gr";
import { Button, Container, Input } from "reactstrap";
import TBIco from "../components/ico/tb";
import {
  Banner,
  Card,
  Li,
  Marca,
  NewLatter,
  Text,
  TitleProject,
  Ul,
  Url,
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
            <a href="./tipsbook">
              <TBIco />
              <p>TipsBook</p>
            </a>
          </Banner>
          <hr></hr>
          <React.Fragment>
            <NewLatter>
              <h3>
                Notícias de Tecnologia para quem não tem tempo de ler notícias.
              </h3>
              <p>Junte-se à nossa turma de 115.065 leitores ativos:</p>
              <div classname=" mt-3">
                <Input placeholder="Seu E-mail Principal" />
              </div>
              <Button className="btn btn-warning mt-3">
                Inscrever-se (Grátis) <GrSend />
              </Button>
            </NewLatter>
            <amp-ad
              width="100vw"
              height="320"
              type="adsense"
              data-ad-client="ca-pub-3182119963461273"
              data-ad-slot="4888533084"
              data-auto-format="rspv"
              data-full-width=""
            >
              <div overflow=""></div>
            </amp-ad>
            <Ul>
              {itemsApi?.map((item) => (
                <Li key={item.id}>
                  <Url href={`tipsbook/${item.slug}`}>
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
