import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        --bg-color-1-rgb: rgb(30,30,50);
        --bg-color-2-rgb: rgb(51, 48, 97);
        --fg-color-rgb: rgb(234, 237, 255);
      
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: var(--fg-color-rgb);
        background-image: linear-gradient(90deg, var(--bg-color-1-rgb),var(--bg-color-2-rgb) 75%);
        color: #333333;
        font-size: 16px;
    }
`;