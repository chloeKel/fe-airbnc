import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
  width: 100vw;
  height: 18vh;
  display: grid;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
`;

export const StyledLogo = styled.img`
  height: 80%;
  width: auto;
  background: transparent;
`;

export const StyledNavBar = styled.div`
  height: 20%;
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  text-align: center;
  background: transparent;
  border: 1px solid #2a5faf;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  position: relative;
  text-decoration: none;
  padding: 2px 0;
  color: #2a5faf;
  font-size: 1.1rem;
  font-weight: 700;

  &.active {
    background-color: #2a5faf;
    color: #fefce8;
  }

  &.hover {
    background-color: #2a5faf;
    color: #fefce8;
  }
`;
