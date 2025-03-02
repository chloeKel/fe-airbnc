import styled from "styled-components";

export const PopUpOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopUpContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  color: black;
`;

export const PopUpButton = styled.button`
  margin-top: 15px;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }
`;

// export const PopUpButton = styled.button`
//   margin-top: 15px;
//   padding: 10px 15px;
//   background-color: #ff5a5a;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 1rem;

//   &:hover {
//     background-color: #e04a4a;
//   }
// `;
