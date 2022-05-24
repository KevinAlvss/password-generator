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

        @media (max-width: 1366px) {
            font-size: 93.75%;
        }

        @media (max-width: 1080px){
            font-size: 80%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }

    }

    html, body, input, button{
        color: #CACDD7;
    }

    button{
        border: none;
        cursor: pointer;
    }

`