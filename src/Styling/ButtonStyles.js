import styled from "styled-components";

export const StyledButton = styled.button`
  text-decoration: none;
  background-color: #ffffff;
  color: #000000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }

  @media (min-width: 768px) {
    padding: 0.25em 0.75em;
  }
`;

export const StyledFavouriteButton = styled.button`
  background: ${({ $asset }) => `url(${$asset})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent !important;
  outline: none;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
  position: absolute;
  bottom: 30px;
  right: 10px;
  z-index: 1;
`;
