import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  :root {
    --body-font-size: 16px;
    --body-font-weight: 300;
    --body-line-height: 1.5;
    --body-font-family: Arial, sans-serif;
    --heading-font-family: "Quicksand", sans-serif;
    --gap: 1.5rem;
  }

  *,*::before,*::after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    font: var(--body-font-weight) var(--body-font-size)/var(--body-line-height) var(--body-font-family);
    color: ${({ theme }) => theme.colors.interface.dark};
  }

  #gatsby-focus-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
