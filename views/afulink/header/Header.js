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
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  };

  return (
    <div className={`header${sticky ? "sticky" : ""}`}>
      <Navbar light expand="md">
        <Container>
          <NavbarHeader href="/">
            <Image src="./images/logo.svg" width={40} height={40} />
            <h1>afulink</h1>
          </NavbarHeader>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/certificado">Certificação / Cursos</NavLink>
              </NavItem> */}
              {/* <NavItem>
                <NavLink href={"services"}>Nosso Serviços</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">Sobre</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="https://tipsbook.info">Tips Book</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login-sys">Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
