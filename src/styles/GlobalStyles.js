import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';
import './normalize.css';
export const GlobalStyles = createGlobalStyle`
 

    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body{
        user-select: none;
        font-family: "Inter", serif;
        color: aliceblue;
        max-width: 1440px;
        margin: 0 auto;
        background-color: ${COLORS.dark};
    }

`;
