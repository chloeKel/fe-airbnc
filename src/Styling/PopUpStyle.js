import styled from "styled-components";

export const PopUpOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PopUpContent = styled.div`
  background: #2a5faf;
  padding: 1rem;
  text-align: center;
  max-width: 300px;
  border: 1px solid #fefce8;
  color: #fefce8;
`;
