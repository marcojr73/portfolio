import styled from "styled-components"

const ContainerContacts = styled.section`
    width: 82.5vw;
    height: 100vh;
    margin-left: 17vw;
    margin-top: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    footer{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        color: var(--text-color);
    }
    
    #contacts{
        font-size: 4rem;
        font-weight: bold;
        color: var(--text-color);
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 40vh;
    }
    
    h2{
        font-size: 1.8rem;
        margin: 5vh auto;
    }

    .contact-me{
        width: 100%;
        height: 60vh;
        background-color: var(--secondary-color);
        display: flex;
    }

    form{
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input{
        width: 70%;
        height: 10%;
        margin: 0 0 5%;
    }

    textarea{
        padding-top: 3%;
        width: 70%;
        height: 40%;
        resize: none;
    }

    button{
        margin: 5%;
        width: 50%;
        height: 10%;
        background-color: var(--primary-color);
        font-size: 1.5rem;
        border-radius: 5px;
        font-size: 0.8vw;
        color: var(--text-color);
    }

    .social-box{
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .social{
        margin: 0 auto;
        display: grid;
        width: 70%;
        height: 70%;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 5% 2%;
    }

    p{
        margin: 6% 0 0 0;
    }
    
    .icon, p{
        cursor: pointer;
    }
    
    .media{
        background-color: var(--background-color);
        display: flex;
        flex-direction: column;
        font-size: 2rem;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        cursor: pointer;
    }

    .media:hover{
        color: var(--primary-color);
        transition-duration: 0.6s;
    }

    @media only screen and (max-width: 614px){
        width: 100vw;
        margin-left: 0;
        align-items: center;
        justify-content: center;
        height: 150vh;

        #contacts{
            margin: auto;
            font-size: 2rem;
        }

        h2{
            font-size: 1rem;
        }

        input, button, textarea{
            font-size: 1rem;
        }

        .contact-me{
            flex-direction: column;
            height: 100vh;
        }

        form, .social-box{
            width: 100%;
            height: 100%;
        }

        .social{
            width: 100%;
            margin: 0;
        }

        .media{
            font-size: 1rem;
        }
    }

`

export default ContainerContacts