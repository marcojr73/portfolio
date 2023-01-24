import styled from "styled-components"

const ContainerSkills = styled.section`
    width: 82.5vw;
    height: 100vh;
    margin-left: 17vw;

    ul{
        margin: auto;
        margin-top: 3%;
        width: 70%;
        height: 60%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-row-gap: 10px;
        grid-column-gap: 10px;
    }

    li{
        background-color: var(--secondary-color);
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--primary-color);
        border-radius: 6px;
        position: relative;
        overflow: hidden;
    }

    li:hover{
        border-bottom: 10px solid var(--primary-color);
        transition-duration: 1s;
    }
    
    p{
        margin-top: 8%;
        font-size: 2rem;
        text-align: center;
    }
    
    .icon {
        margin-top: 18%;
        font-size: 3rem;
    }

    .styled{
        margin-top: 5%;
        font-size: 5rem;
    }
`

export default ContainerSkills