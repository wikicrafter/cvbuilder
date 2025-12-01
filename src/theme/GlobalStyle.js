import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    word-wrap: break-word;
  }

  html {
    font-size: 62.5%;
    line-height: 1.2;
    /* Footer support */
    position: relative;
    min-height: 100%;
  }

  body {
    font-family: "Nunito", sans-serif;
    font-size: 1.4rem;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.dark};
  }

  header {
    font-size: 2.4rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    width: 100%;
  }

  button,
  input, 
  textarea {
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }

  button {
    cursor: pointer;
  }

  /* Print styling to remove default margins and enforce A4 size */
  @page {
    size: A4;
    margin: 0;
  }

  @media print {
    html,
    body {
      margin: 0;
      background: #fff;
    }

    #root {
      margin: 0;
      padding: 0;
    }
  }
`;

export default GlobalStyle;
