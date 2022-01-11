import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        list-style: none;

    }
 

    :root {
  --theme-green: #badc58;
  --theme-blue1:#1D164D;
  --theme-blue2:#2D3561;
}

img{
    display:block;
    max-width:100%;
}
    h1,h2{
        font-family: 'Montserrat', sans-serif;
    }

   button,p,input,li{
        font-family: 'Mulish', sans-serif;
    }

    body, html, #root {
        height: 100%;
    }

    button {
        border: none;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
 
`;
export default GlobalStyles;
