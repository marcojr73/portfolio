import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    :root{
        --background-color: ${props => props.theme.colors.backgroundColor};
        --primary-color: ${props => props.theme.colors.primary};
        --secondary-color: ${props => props.theme.colors.secondary};
        --third-color: ${props => props.theme.colors.third};
        --text-color: ${props => props.theme.colors.textColor};
        background-color: var(--background-color);
        font-family: "Rajdhani", sans-serif;
    }

    body::-webkit-scrollbar {
        width: 8px;
    }
	
    body { 
        overflow-x: hidden; 
    }

    body::-webkit-scrollbar-track {
        background: var(--background-color);
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--primary-color);
        border-radius: 5px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    h1, h2{
        cursor: default;
    }

    input, textarea{
        border: none;
        border-radius: 3px;
        font-size: 0.8vw;
        padding: 0px 0px 0px 4%;
        color: var(--text-color);
        background-color: var(--background-color);
        cursor: auto;
    }

    button{
        cursor: pointer;
        border: none;
    }

    input:focus, textarea:focus{
        border-top: none;
        border-left: none;
        border-right: none;
        box-shadow: 0 0 0 0;
        outline: 0;
    }


    a{
        text-decoration: none;
        color: var(--text-color)
    }

    .title{
        color: var(--text-color);
        font-size: 4rem;
        padding-top: 8%;
        text-align: center;
    }
    
`