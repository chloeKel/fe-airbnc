import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% { opacity: 0; }
  10% { opacity: 1; }
  25% { opacity: 1; }
  35% { opacity: 0; }
  100% { opacity: 0; }
`;

export const StyledLoadingDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StyledLoader = styled.img`
  width: 15vw;
  height: auto;
  background: transparent;
  position: absolute;
  opacity: 0;
  animation-name: ${animation};
  animation-duration: 2s;
  animation-delay: ${({ $delay }) => $delay};
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  margin-top: 100px;
`;
