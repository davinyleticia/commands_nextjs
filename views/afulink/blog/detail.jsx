import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import TBIco from "../components/ico/tb";
import { Banner, Card, Li, Text, Title, TitleProject, Ul } from "./styled";

const Detail = ({ itemsApi }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <><hr></hr>
      {isClient ? (
        <Container>
          <Banner>
          <a href="../tipsbook">
              <TBIco />
              <p>TipsBook</p>
            </a>
          </Banner>
          <hr></hr>
          <React.Fragment>
            <div>
              {itemsApi?.map((item) => (
                <div key={item.id}>
                  <Title>{item.title.rendered}</Title>
                  <Text
                    dangerouslySetInnerHTML={{
                      __html: item.content.rendered || "Sem descrição",
                    }}
                  />
                </div>
              ))}
            </div>
          </React.Fragment>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default Detail;
