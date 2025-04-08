import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
  top: 0;
  bottom: 0;
  position: fixed;
  width: 100vw;
  height: 20vh;
  display: grid;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fefce8;
`;

export const StyledLogo = styled.img`
  height: 80%;
  width: auto;
  background: transparent !important;
`;

export const StyledNavBar = styled.div`
  height: fit-content;
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  text-align: center;
  background: #fefce8;
  border-bottom: 1px solid #2a5faf;
  padding-bottom: 0.5rem;
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
