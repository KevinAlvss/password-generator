import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
    }

    html, body{
        background-color: #040F2D;
        height:100vh;
        width: 100vw;
    }

    html, body, input, button{
        color: #CACDD7;
    }

    button{
        border: none;
        cursor: pointer;
    }

`