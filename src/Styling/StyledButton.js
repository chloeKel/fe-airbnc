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

  button:hover {
    background-color: rgb(63, 63, 63);
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
