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

    header, ul, li, .presets, .language, .switch {
        display: flex;
    }

    header, ul, .presets {
        flex-direction: column;
    }

    ul, li, .presets {
        justify-content: center;
    }
    

    header{
        width: 100%;
        height: 40vh;
        background-color: var(--primary-color);
        align-items: center;
        justify-content: space-around;
        color: white;
        font-family: "Jost";
    }
    
    img{
        border-radius: 50%;
        width: 70%;
    }

    p{
        font-size: 1.2rem
    }
    
    .acronyms{
        font-size: 3rem;
        font-weight: bold;
    }

    ul{
        padding-top: 15%;
        width: 100%;
        height: 45vh;
        font-family: "Rajdhani";
        color: var(--text-color);
    }

    li{
        height: 15%;
        align-items: center;
        border-top: 1px solid var(--primary-color);
        cursor: pointer;
    }
    
    li:last-child{
        padding-top: 13%;
    }

    .list-item:hover{
        box-shadow: inset 0px 11px 8px -10px var(--primary-color),
                    inset 0px -11px 8px -10px var(--primary-color); ;
        transition-duration: 0.4s;
        transition-timing-function: ease-in-out;
    }
    
    .icon{
        margin: 0 1rem 0 1rem;
        font-size: 1.5rem;
        color: var(--primary-color);
        cursor: pointer
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
`

export default ContainerAside