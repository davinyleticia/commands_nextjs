import React from "react";
import {
  Container,
  Content,
  Data,
  Description,
  Fragment,
  Title,
} from "./Notifications.styled";

function NotificationsCard({ dateString, title, isActive, description }) {
  return (
    <Container active={isActive}>
      <Content>
        <Fragment>
          <Title>{title}</Title>
          <Data>{dateString}</Data>
        </Fragment>
        <Description>{description}</Description>
      </Content>
    </Container>
  );
}

export default NotificationsCard;
