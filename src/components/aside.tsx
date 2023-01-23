import React from "react"
import ContainerAside from "../styles/containers/ContainerAside"

function Aside(){
    return (
        <ContainerAside>
            <header>
                <img src="src/assets/images/me.jpeg" alt="" />
                <p className="acronyms">Marco jr</p>
                <p>Desenvolvedor full stack</p>
            </header>
        </ContainerAside>
    )
}

export default Aside