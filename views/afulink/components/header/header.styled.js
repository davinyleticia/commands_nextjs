import { NavItem } from "reactstrap";
import styled from "styled-components";

export const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarHeader = styled.a`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-decoration: none;
  color: #000;
  &:hover {
    color: #000;
    text-decoration: none;
  }
  h1 {
    :after {
      content: "®️";
      font-size: 1rem;
      position: relative;
      top: -1.4rem; /* Adjust the value to position it as desired */
    }
  }
`;

export const Item = styled(NavItem)`
  padding-left: 0 !important;
  padding-right: 50px;
`;

export const Marca = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start !important;
  height: 1rem;
  padding: 0 0 1rem 0;
`;
