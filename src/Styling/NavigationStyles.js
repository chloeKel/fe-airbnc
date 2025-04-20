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
  text-decoration: none;
  color: #2a5faf;
  background-color: transparent !important;
  outline: none;
  box-shadow: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  span {
    position: relative;
    display: inline-block;
  }

  &:hover,
  &:focus,
  &.active {
    font-weight: 800;
  }

  &:hover span::before,
  &:focus span::before,
  &.active span::before {
    font-weight: 800;
  }
`;
