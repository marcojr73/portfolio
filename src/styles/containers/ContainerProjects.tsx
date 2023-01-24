import styled from "styled-components"

const ContainerProjects = styled.section`
    width: 82.5vw;
    height: 100vh;
    margin-left: 17vw;

    .projects-square{
        width: 80%;
        height: 80%;
        margin: auto;
        margin-top: 5%;
    }

    .slider{
        margin: 0 auto;
        width: 800px;
        height: 400px;
        overflow: hidden;
    }

    .slides{
        display: flex;
        width: 400%;
        height: 400px;
    }

    .slides input{
        display: none;
    }

    .slide {
        width: 25%;
        position: relative;
    }

    .slide img{
        width: 800px;
    }

    .manual-navigation{
        position: absolute;
        width: 800px;
        margin-top: -40px;
        display: flex;
        justify-content: center;
    }

    .manual-btn{
        border: 2px solid black;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
        transition: 1s;
    }

    .manual-btn:not(:last-child){
        margin-right: 40px;
    }

    .manual-btn:hover{
        background-color: #000;
    }


    #radio1:checked ~ .first{
        margin-left: 0;
    }

    #radio2:checked ~ .first{
        margin-left: -25%;
    }

    #radio3:checked ~ .first{
        margin-left: -50%;
    }

    #radio4:checked ~ .first{
        margin-left: -75%;
    }
`

export default ContainerProjects