import React, { useContext } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Home from './pages/Home/Home';

const GlobalStyle = createGlobalStyle`
    body {
        font-family:-apple-system,BlinkMacSystemFont,San Francisco,Helvetica Neue,Helvetica,Ubuntu,Roboto,Noto,Segoe UI,Arial,sans-serif;
        margin:0;
        padding:0;
        line-height:1.6;
    }

    html {
        padding:0;
        margin:0;
    }
`;

const theme = {
    heroTextColor: '#ffffff',
    heroInputTextColor: '#111',
    heroInputContainerBgColor: '#ffffff',
    heroSVGsFill: '#767676',
};

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Home />
        </ThemeProvider>
    );
}
