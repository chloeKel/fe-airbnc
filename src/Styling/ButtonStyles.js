import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled.button`
  width: 100%;
  position: relative;
  width: ${({ $width }) => $width};
  height: auto;
  padding: 0.5rem 0;
  text-align: center;
  border-right: 1px solid #2a5faf;
  border-bottom: 1px solid #2a5faf;
  border-left: ${({ $borderleft }) => $borderleft || "transparent"};
  border-top: ${({ $bordertop }) => $bordertop || "transparent"};
  color: ${({ $color }) => $color || "#2a5faf"};
  background: ${({ $background }) => $background || "#fefce8"};
  font-family: "Satoshi", sans-serif;
  font-weight: 500;
  color: #2a5faf;
  font-size: 16px;
  transition: opacity 0.3s ease;
  outline: none;
  box-shadow: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover,
  &:active,
  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
    -webkit-appearance: none;
    appearance: none;
  }
`;

export const StyledFaveButtonContainer = styled.div`
  position: absolute;
  bottom: 3px;
  right: 6px;
  z-index: 1;
`;

export const StyledFavouriteButton = styled.button`
  background: ${({ $asset }) => `url(${$asset})`};
  background-size: contain;
  background-repeat: no-repeat;
  width: 40px;
  height: 32px;
  transition: opacity 0.3s ease;
  background-color: transparent !important;
  border: none;
  outline: none;
  box-shadow: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover,
  &:active,
  &:focus,
  &:focus-visible {
    background-color: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    -webkit-appearance: none;
    appearance: none;
  }
`;

export const StyledBackArrow = styled(Link)`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1000;
  background: url("/assets/blueLeftArrow.svg") no-repeat center;
  background-size: contain;
  padding: 0;
  display: inline-block;
  text-decoration: none;
  box-sizing: border-box;
  border: none;
  transition: opacity 0.3s ease;
  outline: none;
  box-shadow: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover,
  &:active,
  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
    -webkit-appearance: none;
    appearance: none;
  }
`;
