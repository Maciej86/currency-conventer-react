import { createGlobalStyle } from "styled-components";
import background from "./background.webp";

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
  box-sizing: border-box;
}

*,
::before,
::after {
  box-sizing: inherit;
}

input,
select {
  font-family: "IBM Plex Sans Condensed", sans-serif;
  font-size: 16px;
  color: rgb(69, 69, 69);
}

.pageTemplate {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("${background}") center no-repeat;
  background-size: cover;
  font-family: "IBM Plex Sans Condensed", sans-serif;
  font-size: 18px;
  color: rgb(29, 29, 29);
  text-align: center;
}

@media (max-width: 800px) {
  html {
    height: auto;
  }

  .pageTemplate {
    height: 800px;
  }
}

.rootApp {
  width: 700px;
}

@media (max-width: 1200px) {
  .rootApp {
    width: 70%;
  }
}

@media (max-width: 900px) {
  .rootApp {
    width: 90%;
  }
}

`;
