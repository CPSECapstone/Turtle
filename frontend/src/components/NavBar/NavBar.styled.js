import styled from 'styled-components';
import { Link } from "react-router-dom";

export const MainNav = styled.a`
  align-items: center;
  background: gray;
  display: flex;
  flex-flow: row nowrap;
  -webkit-font-smoothing: antialiased;
  height: 50px;
  padding: 0 30px;
`;

export const NavLogo = styled.a`
    display: flex;
    height: 100%;
    margin-right: 10px;
    transition: opacity 0.2s ease-in-out;
    :hover {
      cursor: pointer;
      opacity: 0.5;
    }
    > img {
      margin: auto;
    }
  `;
  
  export const NavLink = styled.a.attrs({
    href: "/register",
    onClick: evt => {
      evt.preventDefault();
    }
  })`
    text-decoration: none;
    /* align-items: center;
    text-decoration: none;
    color: white;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    padding: 0 10px;
    text-decoration: none; */
    color: white;
    :hover {
      color: green;
    }
  `;
  
  export const StyledLinked = styled(Link)`
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    height: 100%;
    flex-flow: row nowrap;
    padding: 0 10px;
    :hover {
      color: black;
    }
  `;