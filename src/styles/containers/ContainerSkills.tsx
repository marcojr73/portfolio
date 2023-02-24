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

    li:hover span:first-of-type{
        position: absolute; 
        top: 0;
        left: 0px;
        width: 100%;
        height: 3px;
        background: linear-gradient(to right, transparent, var(--primary-color));
        animation: slider1 2s linear infinite;
    }

    li:hover span:nth-of-type(2){
        position: absolute; 
        top: 0;
        right: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(to bottom, transparent, var(--primary-color));
        animation: slider2 2s linear infinite;
        animation-delay: -1s;
    }

    li:hover span:nth-of-type(3){
        position: absolute; 
        bottom: 0;
        right: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(to left, transparent, var(--primary-color));
        animation: slider3 2s linear infinite;
    }

    li:hover span:last-of-type{
        position: absolute; 
        bottom: 0;
        left: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(to top, transparent, var(--primary-color));
        animation: slider4 2s linear infinite;
        animation-delay: -1s;
    }

    @keyframes slider1 {
        0%{
            transform: translateX(-100%);
        }
        100%{
            transform: translateX(100%);
        }
    }

    @keyframes slider2 {
        0%{
            transform: translatey(-100%); 
        }
        100%{
            transform: translatey(100%);
        }
    }

    @keyframes slider3 {
        0%{
            transform: translateX(100%);
        }
        100%{
            transform: translatex(-100%);
        }
    }

    @keyframes slider4 {
        0%{
            transform: translatey(100%); 
        }
        100%{
            transform: translatey(-100%);
        }
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