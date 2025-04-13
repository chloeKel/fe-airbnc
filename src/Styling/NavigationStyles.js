import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
  top: 0;
  bottom: 0;
  position: fixed;
  width: 100vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fefce8;
  border-bottom: 1px solid #2a5faf;
  z-index: 999;
`;

export const StyledLogo = styled.img`
  height: 80%;
  width: auto;
  background: transparent !important;
`;

export const StyledNavBar = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  text-align: center;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  position: relative;
  text-decoration: none;
  padding: 0.5rem 0;
  color: #2a5faf;
  font-size: ${({ $fontsize }) => $fontsize || "1rem"};

  &.active {
    background-color: #2a5faf;
    color: #fefce8;
  }

  &.hover {
    background-color: #2a5faf;
    color: #fefce8;
  }
`;
