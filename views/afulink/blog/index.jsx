import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import TBIco from "../ico/tb";
import {
  Banner,
  Card,
  Li,
  Text,
  TitleProject,
  Ul,
} from "./styled";

const Blog = ({ itemsApi }) => {
  console.log(itemsApi?.map((elem) => elem));
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])


  return (<>{isClient ? (
    <Container>
      <Banner>
        <TBIco />
      </Banner>
      <React.Fragment>
        <Ul>
          {itemsApi?.map((item) => (
            <Li key={item.id}>
              <img src={item.image} alt={item.name} />
              <Card>
                <TitleProject>{item.title.rendered}</TitleProject>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: item.excerpt.rendered || "Sem descrição",
                  }}
                />
              </Card>
            </Li>
          ))}
        </Ul>
      </React.Fragment>
    </Container>
  ): 'Prerendered'}</>);
};

export default Blog;
