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
    

    header{
        width: 100%;
        height: 40vh;
        background-color: var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
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
        width: 100%;
        height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: "Rajdhani";
        color: white;
    }

    li{
        height: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid var(--primary-color);
    }
    
    li:last-child{
        justify-content: center;
        padding-top: 13%;
    }
    
    .icon{
        margin: 0 1rem 0 1rem;
        font-size: 1.5rem;
        color: var(--primary-color);
    }

    .presets{
        width: 100%;
        height: 20vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .language{
        display: flex;
        padding-bottom: 5%;
    }

    button{
        width: 3rem;
        height: 2rem;
        margin-left: 0.5rem;
        border-radius: 3px;
    }

    .switch{
        margin-bottom: 10%;
        display: flex;
    }
    .icon-theme{
        font-size: 1.2rem;
        margin-left: 12%;
        margin-top: 10%;
        color: var(--dark-color);
    }
`

export default ContainerAside