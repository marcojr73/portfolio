import styled from "styled-components"

const ContainerProjects = styled.section`
    width: 82.5vw;
    margin-left: 17vw;

    .projects-square{
        width: 80%;
        height: 80%;
        margin: auto;
        margin-top: 5%;
        border-radius: 10px;
    }
    
    .project{
        background-color: var(--secondary-color);
        width: 100%;
        height: 35vh;
        display: flex;
        margin-bottom: 3%;
    }

    .carousel{
        width: 50%;
        height: 100%;
        position: relative;
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
        width: 100%;
        height: 100%;
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
            font-size: 1rem;
        }

        .project{
            flex-direction: column;
            height: 50vh;
            margin-bottom: 30px;
        }

        .carousel, .description{
            width: 100%;
        }

    }




    
`

export default ContainerProjects