import { ThemeProvider, createGlobalStyle } from 'styled-components';

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

const theme = {
    linear: 'linear-gradient(97.2deg, #FF3E3E -0.24%, #972ED9 100%)',
    linearInverse: 'linear-gradient(97.2deg, #972ED9 -0.24%, #FF3E3E 100%)',
};

const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
    }

    body {
        background: black;
        color: white;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        padding: 80px 80px;
        box-sizing: border-box;
        max-width: 1300px;
        margin: auto;
        height: 100vh;
        display: flex;
        align-items: center;
    }

    #__next {
        width: 100%;
        height: 100%;
    }

    h1 {
        font-family: 'Oxanium', cursive;
    }

    img {
        user-select: none;
        pointer-events: none;
    }
`;
