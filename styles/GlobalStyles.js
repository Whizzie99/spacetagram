import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* VARS */
    :root{
        --font-stack-1: 'Nunito', sans-serif;
        --font-stack-2: 'Pacifico', cursive;
        --white: #fff;
        --black: #000;
    }

    /* RESETS */
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: var(--font-stack-1);
    }
`