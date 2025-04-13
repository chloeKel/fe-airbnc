import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  position: relative;
  width: ${({ $width }) => $width};
  height: auto;
  cursor: pointer;
  padding: 0.5rem 0;
  text-align: center;
  background: transparent;
  border-right: 1px solid #2a5faf;
  border-bottom: 1px solid #2a5faf;
  border-left: ${({ $borderleft }) => $borderleft || "transparent"};
  border-top: ${({ $bordertop }) => $bordertop || "transparent"};
  outline: none;
  color: #2a5faf;
  font-size: 1rem;
  font-weight: 500;
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
  background-color: transparent !important;
  outline: none;
  width: 40px;
  height: 32px;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
`;
