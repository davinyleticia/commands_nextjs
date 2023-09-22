import React from "react";
import { Container } from "reactstrap";
import { Title } from "../../command/components/NotificationsCard/Notifications.styled";

const Blog = ({ itemsApi }) => {
  console.log(itemsApi);
  return (
    <Container>
      <React.Fragment>
        {itemsApi.map((elem) => {
          <Title>{elem.title.rendered}</Title>;
        })}
      </React.Fragment>
    </Container>
  );
};

export default Blog;
