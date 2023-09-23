import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import TBIco from "../ico/tb";
import { Banner, Card, Li, Text, Title, TitleProject, Ul } from "./styled";

const Detail = ({ itemsApi }) => {
 
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
            </div>
          </Banner>
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
