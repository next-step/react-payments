import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
        justify-content: center;
        background-color: #e5e5e5;
    }

    #root {
        background-color: #fff;
        width: 375px;
        min-width: 375px;
        height: 700px;
        position: relative;
        border-radius: 15px;
    }

    .App {
        height: 100%;
        padding: 16px 24px;
    }
`;

export default GlobalStyle;
