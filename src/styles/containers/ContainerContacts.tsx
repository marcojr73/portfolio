import styled from "styled-components"

const ContainerContacts = styled.section`
    width: 82.5vw;
    height: 100vh;
    margin-left: 17vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    footer{
        width: 60%;
        height: 60%;
        margin-top: 12%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: var(--text-color);
    }
    
    h1{
        font-size: 4rem;
        font-weight: bold;
        color: var(--text-color);
    }

    h2{
        font-size: 1.8rem;
    }

    .social-box{
        display: flex;
        width: 100%;
        font-size: 3rem;
        color: var(--primary-color);
        background-color: var(--secondary-color);
        padding: 5%;
        border-radius: 25px;
    }

    .social{
        margin-right: 12%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

`

export default ContainerContacts