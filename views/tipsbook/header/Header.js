import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { NavbarHeader, Image } from "./header.styled";

const Header = ({ url }) => {
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
