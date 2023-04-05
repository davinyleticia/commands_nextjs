import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

const Header = () => {
  return (
    <div className={`header${sticky ? "sticky" : ""}`}>
      <Navbar light expand="md">
        <Container>
          <Nav className="m-auto" navbar>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">Sobre</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
