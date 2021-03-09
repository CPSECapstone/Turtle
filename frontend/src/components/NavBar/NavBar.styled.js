import styled from 'styled-components';
import { Link } from "react-router-dom";

export const MainNav = styled.a`
  align-items: center;
  background: gray;
  display: flex;
  flex-flow: row nowrap;
  -webkit-font-smoothing: antialiased;
  height: 60px;
  padding: 0 30px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
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
  
  export const StyledLinked = styled(Link)`
    font-family: 'Trebuchet MS', sans-serif;
    color: white;
    text-decoration: none;
    height: 100%;
    padding: 0px 20px;
    
    :hover {
      color: black;
      transition: all 0.3s ease;
    }
  `;

export const Header = styled.h2`
    text-align: center;
    color: black;
    font-family: 'Trebuchet MS', sans-serif;
    :hover {
        cursor: pointer;
    }
`;

export const NavItemLocation = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-left: auto;
    justify-content: space-between;
`;