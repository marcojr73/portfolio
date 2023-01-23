import React from "react"
import ContainerAside from "../styles/containers/ContainerAside"

import {BsGithub, BsLinkedin, BsMoonStarsFill, BsSunFill} from "react-icons/bs"
import {SiLichess} from "react-icons/si"
import Switch from "react-switch"

function Aside(){
    return (
        <ContainerAside>
            <header>
                <img src="src/assets/images/me.jpeg" alt="" />
                <p className="acronyms">Marco jr</p>
                <p>Desenvolvedor full stack</p>
            </header>
            <ul>
                <li>Sobre</li>
                <li>Habilidade</li>
                <li>Projetos</li>
                <li>Contato</li>
                <li>
                    <BsLinkedin className="icon"/>
                    <BsGithub className="icon"/>
                    <SiLichess className="icon"/>
                </li>
            </ul>
            <section className="presets">
                <div className="language">
                    <button>PT</button>
                    <button>EN</button>
                </div>
                <Switch
                className="switch"
                    onChange={() => null}
                    checked={false}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    offColor={"#FFFFFF"}
                    onColor={"var(--primary-color);"}
                    checkedHandleIcon={<BsMoonStarsFill className="icon-theme"/>}
                    uncheckedHandleIcon={<BsSunFill className="icon-theme"/>}
                />
            </section>
        </ContainerAside>
    )
}

export default Aside