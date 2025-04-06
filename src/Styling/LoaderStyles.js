import styled from "styled-components";

export const StyledLoadingDiv = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLoader = styled.img`
  width: 15vw;
  height: auto;
  background: transparent;
  position: absolute;
  opacity: 0;
  animation-name: 0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  35% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
  animation-duration: 2s;
  animation-delay: ${(props) => props.$delay};
  animation-iteration-count: infinite;
  animation-fill-mode: both;
`;
