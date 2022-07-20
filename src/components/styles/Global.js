import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;1,700&display=swap'); 

    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'DM Sans', sans-serif;
        font-size: 1.125rem;
        font-weight: 400;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: ${({ theme }) => theme.colors.bodyBackground};
    }

    img {
        max-width: 100%;
    }

`

export default GlobalStyles