import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import TBIco from "../components/ico/tb";
import { Banner, Text, Title } from "./styled";

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
            <a href="../tipsbook">
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
