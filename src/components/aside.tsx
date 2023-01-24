import React, { useContext } from "react"
import ContainerAside from "../styles/containers/ContainerAside"

import {BsGithub, BsLinkedin, BsMoonStarsFill, BsSunFill} from "react-icons/bs"
import {SiLichess} from "react-icons/si"
import Switch from "react-switch"
import { useTranslation } from "react-i18next"
import { themeContext } from "../context/themeContext"
import darkTheme from "../styles/themes/darkTheme"
import lightTheme from "../styles/themes/lightTheme"

function Aside(){
    const {t, i18n} = useTranslation()
    const {theme, setTheme } = useContext(themeContext)

    function toggleTheme() {
        setTheme(theme.title === "light" ? darkTheme : lightTheme)
    }

    return (
        <ContainerAside>
            <header>
                <img src="src/assets/images/me.jpeg" alt="person"/>
                <p className="acronyms">Marco jr</p>
                <p>{t("DevDescription")}</p>
            </header>
            <ul>
                <li key={"about"} >{t("Sobre")}</li>
                <li key={"skills"} >{t("Habilidades")}</li>
                <li key={"projects"} >{t("Projetos")}</li>
                <li key={"contact"} >{t("Contato")}</li>
                <li key={"social"} >
                    <BsLinkedin className="icon" onClick={() => window.open("https://www.linkedin.com/in/marcojr73")}/>
                    <BsGithub className="icon" onClick={() => window.open("https://github.com/marcojr73")}/>
                    <SiLichess className="icon" onClick={() => window.open("https://lichess.org/@/oxidaks")}/>
                </li>
            </ul>
            <section className="presets">
                <div className="language">
                    <button className={i18n.language == "pt" ? "selected" : ""} onClick={() => i18n.changeLanguage("pt")}>PT</button>
                    <button className={i18n.language == "en" ? "selected" : ""} onClick={() => i18n.changeLanguage("en")}>EN</button>
                </div>
                <Switch
                className="switch"
                    width={70}
                    onChange={toggleTheme}
                    checked={theme.title === "dark"}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    offColor={"#FFFFFF"}
                    onColor={"#FFFFFF"}
                    checkedHandleIcon={<BsMoonStarsFill className="icon-theme"/>}
                    uncheckedHandleIcon={<BsSunFill className="icon-theme"/>}
                />
            </section>
        </ContainerAside>
    )
}

export default Aside