import { createGlobalStyle } from 'styled-components';
import { Colors } from './UI/variables';

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    min-height: 100%;
  }

  body {
    background-color: ${Colors.darkBackground};
    font-family: Inter, sans-serif;
    line-height: 1.5;
    color: ${Colors.textColor};
    -webkit-font-smoothing: antialiased;
  }
  
  a {
    text-decoration: none;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }
`;
