import styled from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  align-self: center;
  background-color: #ffffff;
  border: 1px solid #1007fa;
  border-radius: 30px;
  cursor: pointer;
  font-family: "Fraunces", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-variation-settings: "SOFT" 0, "WONK" 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 20px;
  color: #1007fa;
  padding: 0 18px;
  line-height: 35px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &::after {
    content: "";
    position: absolute;
    width: 70%;
    transform: translateX(-50%) scaleX(0);
    height: 1px;
    bottom: 7px;
    left: 50%;
    background-color: #fa7807;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1);
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
  background-color: transparent !important;
  outline: none;
  width: 40px;
  height: 32px;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
`;
