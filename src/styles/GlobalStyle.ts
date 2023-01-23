import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    :root{
        --background-color: ${props => props.theme.colors.backgroundColor};
        --primary-color: ${props => props.theme.colors.primary};
        --secondary-color: ${props => props.theme.colors.secondary};
        --third-color: ${props => props.theme.colors.third};
        background-color: var(--background-color);
        font-family: "Rajdhani', sans-serif";
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    
`