import styled from "styled-components"

const ContainerProjects = styled.section`
    width: 82.5vw;
    margin-left: 17vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15vh;

    h1{
        margin-bottom: 7vh;
    }

    .projects-square{
        width: 100%;
        margin: auto;
        overflow: hidden;
        transition: height 1.2s;
    }

    .hidden{
        height: 175vh;
    }

    button{
        width: 20%;
        height: 5vh;
        border-radius: 5px;
        background-color: var(--primary-color);
        color: var(--text-color);
        border: 2px solid var(--secondary-color);
        font-size: 1.1rem;
    }

    .project{
        background-color: var(--secondary-color);
        width: 80%;
        height: 35vh;
        display: flex;
        margin: 3% auto 5% auto;
        transition-duration: 0.4s;
    }

    .carousel{
        width: 50%;
        height: 100%;
        position: relative;
        transition-duration: 0.4s;
        transition: all 0.5s cubic-bezier(0.680, -0.550, 0.265, 1.550); 
        z-index: 5;
        background-color: var(--secondary-color);
    }

    .carousel:hover{ 
        transform: scale(1.3); 
    }

    .icon{
        font-size: 2rem;
        pointer-events: none;
    }

    .controller{
        position: absolute;
        width: 2.5vw;
        height: 2.5vw;
        background-color: gray;
        border-radius: 50%;
        top: 40%;
        margin: 3%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        opacity: 0.9;
    }

    .controller:not(:first-child){
        right: 0;
    }

    img{
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        max-width: 100%;
        height: 100%;
        z-index: -1;
    }

    .description{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: var(--text-color);
        position: relative;
        cursor: pointer;
    }

    .link{
        position: absolute;
        top: 8%;
        right: 5%;
        font-size: 2rem;
    }

    .project-title{
        font-size: 2.5rem;
    }

    .project-description{
        font-size: 1.5rem;
        text-align: center;
        width: 80%;
    }

    .project-icons{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .project-icon{
        font-size: 2rem;
    }

    .project-icon:not(:last-child){
        margin-right: 2%;
    }

    @media only screen and (max-width: 614px){
        width: 100vw;
        margin-left: 0;

        .projects-square{
            width: 100%;
            height: 430vh;
        }

        button{
            margin: 5%;
            width: 50%;
            font-size: 1rem;
        }

        .hidden{
            height: 210vh;
        }

        .project-title{
            font-size: 1.5rem;
        }

        .project-description{
            font-size: 0.8rem;
            text-align: center;
            width: 80%;
        }

        .project-icon{
            font-size: 5rem;
        }

        .project{
            flex-direction: column;
            height: 50vh;
            margin-bottom: 30px;
            width: 100%;
        }

        .carousel, .description{
            width: 100%;
        }

        .controller{
            width: 10vw;
            height: 10vw;
        }

        .project-icon{
            font-size: 2rem;
        }

        .carousel:hover{ 
            transform: scale(1); 
        }
    }
`

export default ContainerProjects