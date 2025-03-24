import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: #ffffff;
  background-color: #000000;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    background-color: rgb(63, 63, 63);
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
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

export const StyledMenuButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  z-index: 2;
  background: ${({ $asset }) => `url(${$asset})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent !important;
  outline: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:focus {
    background-color: transparent !important;
  }
`;
