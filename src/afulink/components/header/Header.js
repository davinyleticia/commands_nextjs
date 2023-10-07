import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavLink,
  Container,
} from "reactstrap";
import { NavbarHeader, Image, Item, Marca } from "./header.styled";

const Header = ({ url = '/', isTipsbook }) => {
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
         {!isTipsbook && (<NavbarHeader href={url}>
            <Image src={`${url}/images/logo.svg`} width={40} height={40} />
            <h1>afulink</h1>
          </NavbarHeader>)}
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
             {!isTipsbook ?( <Item>
                <NavLink href="/">Home</NavLink>
              </Item>
              ):(
                <Item>
                <NavLink href="/">Afulink</NavLink>
              </Item>)}
              <Item>
                <NavLink href="https://visite.la">Visite.la</NavLink>
              </Item>
              <Item>
                <NavLink href={`${url}/tipsbook`}>TipsBook</NavLink>
              </Item>
              <Item>
                <NavLink href={`${url}/cursos`}>Cursos</NavLink>
              </Item>
              {/* <NavItem>
                <NavLink href={`${url}/login-sys`}>Login</NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
