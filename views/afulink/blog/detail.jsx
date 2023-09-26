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
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3182119963461273"
                crossorigin="anonymous"
              ></script>

              <ins
                class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-3182119963461273"
                data-ad-slot="4888533084"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
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
