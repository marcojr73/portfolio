import styled from "styled-components"

const ContainerAside = styled.aside`
    width: 17vw;
    height: 100vh;
    background-color: var(--secondary-color);
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid var(--primary-color);

    .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        overflow: hidden;
    }

    .static{
        font-size: 2rem;
    }

    .wrapper .dynamic {
        margin-left: 3%;
        height: 25%;
        overflow: hidden;
    }

    .wrapper .dynamic li{
        font-size: 2rem; 
        position: relative;
        top: 0;
        animation: slider 8s steps(4) infinite;
    }
    
    @keyframes slider {
        100%{
            top: -8rem;
        }        
    }

    .wrapper .dynamic li::after {
        content: "";
        position: absolute;
        background-color: var(--primary-color);
        width: 100%;
        height: 100%;
        left: 0;
        border-left: 2px solid white;
        animation: typing-bar 2s steps(10) infinite;
    }
    
    @keyframes typing-bar {
        40%, 60%{
            left: 99.5%;
        }   
        100%{
            left: 0;
        }     
    }

    .wrapper .dynamic li:nth-child(4)::after{
        animation-name: typing-bar-shrink;
    }
    
    @keyframes typing-bar-shrink {
        40%, 60%{
            left: 70%;
        }   
        100%{
            left: 0;
        }  
    }

    header, .list, .list-item, .presets, .language, .switch {
        display: flex;
    }

    header, .list, .presets {
        flex-direction: column;
    }

    .list, .list-item, .presets {
        justify-content: center;
    }
    

    header{
        width: 100%;
        height: 40vh;
        background-color: var(--primary-color);
        align-items: center;
        justify-content: space-around;
        color: white;
        font-family: "Amatic SC";
        cursor: default;
    }
    
    img{
        border-radius: 50%;
        width: 50%;
        margin-top: 10%;
    }

    p{
        font-size: 2rem;
        text-align: center;
    }

    
    h1{
        font-weight: bold;
        font-size: 3rem;
    }

    .list{
        padding-top: 15%;
        width: 100%;
        height: 45vh;
        font-family: "Rajdhani";
        color: var(--text-color);
    }

    .list-item{
        height: 15%;
        align-items: center;
        border-top: 1px solid var(--primary-color);
        cursor: pointer;
    }
    
    .list-item:last-child{
        padding-top: 13%;
    }

    .list-item:hover{
        box-shadow: inset 0px 11px 8px -10px var(--primary-color),
                    inset 0px -11px 8px -10px var(--primary-color); ;
        transition-duration: 0.4s;
        transition-timing-function: ease-in-out;
    }

    .social:hover{
        box-shadow: none;
    }
    
    .icon{
        margin: 0 1rem 0 1rem;
        font-size: 1.5rem;
        color: var(--primary-color);
        cursor: pointer
    }

    h1:hover, .wrapper:hover{
        text-shadow: 0 0 8px #FFF;
        transition-duration: 0.4s;
        transition-timing-function: ease-in-out;
    }

    .presets{
        width: 100%;
        height: 15vh;
        align-items: center;
    }

    .language{
        padding-bottom: 5%;
    }

    button{
        width: 3rem;
        height: 1.8rem;
        margin-left: 0.5rem;
        border-radius: 3px;
    }

    .switch{
        margin-bottom: 10%;
    }

    .icon-theme{
        font-size: 1.2rem;
        margin-left: 12%;
        margin-top: 10%;
        color: var(--dark-color);
    }

    .selected{
        background-color: var(--primary-color);
    }

    @media only screen and (max-width: 614px){
        width: 100vw;
        position: relative;

        .wrapper .dynamic {
            height: 55%;
        }
    }

    
`

export default ContainerAside