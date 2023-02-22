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
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: var(--text-color);
    }

    h1{
        font-size: 4rem;
        font-weight: bold;
    }
    
    p{
        margin-top: 7%;
        font-size: 1.5rem;
        cursor: default;
    }

    a{
        background-color: var(--primary-color);
        width: 20%;
        height: 100%;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5%;
        margin-top: 5%;
        font-size: 1.5rem;
        margin-left: 80%;
    }

    @media only screen and (max-width: 614px){
        width: 100vw;
        margin-left: 0;

        h1{
            font-size: 2.5rem;
        }

        p{
            font-size: 1rem;
        }

        .about{
            align-items: center;
            width: 80%;
        }

        a{
            width: 100%;
            padding: 0 20px;
            margin-left: 0;
            margin-top: 20%;
        }
    }

`

export default ContainerAbout