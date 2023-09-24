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
`;

export const Item = styled(NavItem)`
padding-left: 0 !important;
padding-right: 50px ;

`