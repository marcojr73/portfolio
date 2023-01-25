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
        position: absolute;
        top: 50%;
        font-size: 2rem;
        pointer-events: none;
    }

    .controller{
        position: absolute;
        width: 15%;
        height: 100%;
        background-color: white;
        opacity: 0;
    }

    .controller:hover{
        opacity: 0.4;
        transition: 1s;
        transition-timing-function: ease-in-out;
    }

    .controller:not(:first-child){
        right: 0;
        top: 0;
    }

    img{
        width: 100%;
        height: 100%;
    }

    .icon:not(:first-child){
        right: 5%;
    }

    .icon:not(:last-child){
        left: 5%;
    }

    .description{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: var(--text-color);
        cursor: pointer;
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




    
`

export default ContainerProjects