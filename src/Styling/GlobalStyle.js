import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
-moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
box-sizing: border-box;
}

body {
background: #fefce8;
font-family: 'Satoshi', sans-serif;
font-weight: 500;
color: #2a5faf;
font-size: 16px;
}
`;

export const StyledBody = styled.div`
  width: 100vw;
  position: relative;
  top: ${({ $height }) => $height};
`;
