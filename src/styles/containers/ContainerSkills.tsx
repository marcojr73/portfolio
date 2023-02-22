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
        border-bottom: 12px solid var(--primary-color);
        text-shadow: 0 0 8px var(--primary-color), 0 0 8px var(--primary-color);
        transition-duration: 0.4s;
    }
    
    p{
        margin-top: 8%;
        font-size: 2rem;
        text-align: center;
        cursor: default;
    }
    
    .icon {
        margin-top: 18%;
        font-size: 3rem;
    }

    .styled{
        margin-top: 5%;
        font-size: 5rem;
    }

    @media only screen and (max-width: 614px){
        width: 100vw;
        height: 130vh;
        margin-left: 0;

        ul{
            width: 100%;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
        }

        p{
            font-size: 1rem;
        }

        .icon{
            margin-top: 5%;
            font-size: 2rem;
        }
    }
`

export default ContainerSkills