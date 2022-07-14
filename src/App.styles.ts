import styled, { createGlobalStyle } from "styled-components";
// import BGImage from "../src/images/sunset.png";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        backdrop-filter: blur(5px);
    }

    * { 
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score {
        color: #212121;
        font-size: 2rem;
        font-family: 'Chewy', cursive;
        margin: 0;
    }

    h1 {
        font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        background-color: #212121;
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(5px 5px #616161);
        font-size: 10rem;
        font-weight: 400;
        text-align: center;
        margin: 20px;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
    }

    .next {
        max-width: 140px;
    }

    .start:hover, .next:hover {
        background: linear-gradient(180deg, #ffcc91, #fff);
    }

    .start:active {
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    }

    .next:active {
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    }




`