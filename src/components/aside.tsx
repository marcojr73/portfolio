import React, { useContext } from "react"
import ContainerAside from "../styles/containers/ContainerAside"

import { BsGithub, BsLinkedin, BsMoonStarsFill, BsSunFill, BsWhatsapp } from "react-icons/bs"
import Switch from "react-switch"
import { useTranslation } from "react-i18next"
import { themeContext } from "../context/themeContext"
import darkTheme from "../styles/themes/darkTheme"
import lightTheme from "../styles/themes/lightTheme"

import me from "../assets/images/me.jpeg"

function Aside() {
    const { t, i18n } = useTranslation()
    const { theme, setTheme } = useContext(themeContext)

    function toggleTheme() {
        setTheme(theme.title === "light" ? darkTheme : lightTheme)
    }

    return (
        <ContainerAside>
            <header>
                <img src={me} alt="person" />
                <h1>Marco júnior</h1>
                <div className="wrapper">
                    <div className="static">{t("desenvolvedor")}</div>
                    <div className="dynamic">
                        <ul>
                            <li>Full stack</li>
                            <li>Front end</li>
                            <li>Back end</li>
                            <li>Mobile</li>
                        </ul>
                    </div>
                </div>
            </header>
            <ul className="list">
                <li className="list-item" key={"about"} onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>{t("sobre")}</li>
                <li className="list-item" key={"skills"} onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })} >{t("habilidades")}</li>
                <li className="list-item" key={"projects"} onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} >{t("projetos")}</li>
                <li className="list-item" key={"contact"} onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}>{t("contato")}</li>
                <li key={"social"} className="list-item social">
                    <BsLinkedin className="icon" onClick={() => window.open("https://www.linkedin.com/in/marcojr73")} />
                    <BsGithub className="icon" onClick={() => window.open("https://github.com/marcojr73")} />
                    <BsWhatsapp className="icon" onClick={() => window.open("https://wa.me/5532984640142?")} />
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
                    checkedHandleIcon={<BsMoonStarsFill className="icon-theme" />}
                    uncheckedHandleIcon={<BsSunFill className="icon-theme" />}
                />
            </section>
        </ContainerAside>
    )
}

export default Aside