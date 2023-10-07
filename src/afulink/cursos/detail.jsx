import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { BannerDetail, Text } from "./styled";

const Detail = ({ itemsApi }) => {
  const [isClient, setIsClient] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <hr></hr>
      {isClient ? (
        <Container>
          <React.Fragment>
            <>
              <div>
                {itemsApi?.map((item) => (
                  <div key={item.id}>
                    <BannerDetail>
                      <Image
                        src={`../../images/logo.svg`}
                        width={100}
                        height={100}
                      />
                      <p>Cursos/ {item.title.rendered}</p>
                    </BannerDetail>
                    <hr></hr>
                    <Text
                      dangerouslySetInnerHTML={{
                        __html: item.content.rendered || "Sem descrição",
                      }}
                    />
                  </div>
                ))}
              </div>
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
