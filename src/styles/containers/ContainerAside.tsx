import styled from "styled-components"

const ContainerAside = styled.aside`
    width: 17vw;
    height: 100vh;
    background-color: var(--secondary-color);
    position: fixed;

    header{
        width: 100%;
        height: 40vh;
        background-color: var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        color: white;
        font-family: "Jost";
    }
    
    img{
        border-radius: 50%;
        width: 70%;
    }
    
    .acronyms{
        font-size: 2.5rem;
        font-weight: bold;
    }
`

export default ContainerAside