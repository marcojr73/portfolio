import styled from "styled-components"

const ContainerAbout = styled.section`
    width: 82vw;
    height: 100vh;
    margin-left: 17vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .about{
        width: 60%;
        height: 40%;
        display: flex;
        flex-direction: column;
        color: var(--text-color)
    }

    h1{
        font-size: 3rem;
        font-weight: bold;
    }
    
    p{
        margin-top: 7%;
        font-size: 1.5rem;
    }

    a{
        background-color: var(--primary-color);
        width: 20%;
        height: 15%;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

export default ContainerAbout