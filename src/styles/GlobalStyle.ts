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
        width: 6px;
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

    button{
        border: none;
    }

    a{
        text-decoration: none;
        color: var(--text-color)
    }
    
`