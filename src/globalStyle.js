import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
    }

    body {
       font-size:62.5%;
        display: block;
        font-family: 'Roboto', sans-serif;
    }

    h1 { 
        font-size: 2.2em; 
    } 
     
    h2 { 
        font-size: 2.0em;     
    } 
        
    h3 { 
        font-size: 1.8em; 
    } 
        
    h4 { 
        font-size: 1.6em;     
    } 
        
    h5 { 
        font-size: 1.4em;     
    } 
        
    p { 
        font-size: 1.2em;     
    }

`;

export default GlobalStyle;
