import { createGlobalStyle } from "styled-components";

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
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
width: 100vw;
height: 100vh;
font-family: 'Satoshi', sans-serif;
font-weight: 600;
color: #2a5faf;
}
`;
