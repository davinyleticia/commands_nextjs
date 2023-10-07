import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import TBIco from "./components/ico/tb";
import { Banner, Text, Title } from "./styled";
import Adsense from "./components/adsense/adsense";

const Detail = ({ itemsApi }) => {
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
            <a href="../">
              <TBIco />
              <p>TipsBook</p>
            </a>
          </Banner>
          <hr></hr>
          <React.Fragment>
            <>
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
              <Adsense/>
            </>
          </React.Fragment>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default Detail;
