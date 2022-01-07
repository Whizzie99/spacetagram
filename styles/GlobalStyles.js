import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* VARS */
    :root{
        --font-stack-1: 'Nunito', sans-serif;
        --font-stack-2: 'Pacifico', cursive;
        --box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
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