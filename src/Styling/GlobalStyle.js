import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400; 

   
  color: #213547;
   background-color: #ffffff;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

* {
margin: 0;
padding: 0;
}

a {
  font-weight: 500;
  color: #000000;
  text-decoration: inherit;
}

a:hover {
 color: #747bff;
}
`;
