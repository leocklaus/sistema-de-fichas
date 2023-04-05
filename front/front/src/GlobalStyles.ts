import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
        font-family: 'Inter', sans-serif;
    }

    :root{
        --main-bg: #D9D9D9;
        --box-bg: #F3F3F3;
        --titles-bg: #DCA2E1;
        --logo-color: #E22AF2;
        --text-color: #000;
        --add-button-plus-color: #A3A0A0;
        --button-bg: #E22AF2;
        --header-border: #7B7B7B;
        --transaction-item-bg: #ededed;
    }


`;

export default GlobalStyles;