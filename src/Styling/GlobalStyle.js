import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-width: 320px;
  min-height: 100vh;
  max-width: 400px;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

* {
margin: 0;
padding: 0;
}

`;
