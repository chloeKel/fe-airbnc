import styled from "styled-components";

export const PopUpOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(254, 252, 232, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

export const PopUpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #fefce8;
  gap: 1rem;
  padding: 2rem;
  max-width: 300px;
  color: #2a5faf;
  border: 1px solid #2a5faf;
`;
