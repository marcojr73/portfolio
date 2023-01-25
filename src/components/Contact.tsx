import React from "react"
import { Fade } from "react-awesome-reveal"
import { useTranslation } from "react-i18next"
import ContainerContacts from "../styles/containers/ContainerContacts"

import {BsGithub, BsLinkedin, BsWhatsapp}from "react-icons/bs"
import {MdOutlineMailOutline} from "react-icons/md"



function Contact() {

    const { t } = useTranslation()

    return (
        <ContainerContacts>
            <footer>
                <Fade delay={750} cascade damping={1e-1} triggerOnce={true} >
                    <h1 id="contacts">{t("contact-1")}<br /><Fade delay={2000} cascade damping={1e-1} triggerOnce={true}>
                        <h1>{t("contact-2")}</h1>
                    </Fade>
                    </h1>
                </Fade>
                <Fade delay={3000} cascade damping={1e-1} triggerOnce={true} >
                    <h2>{t("contact-me")}</h2>
                    <div className="social-box">
                        <div className="social" onClick={() => window.open("https://www.linkedin.com/in/marcojr73/")}>
                            <BsLinkedin/>
                            <p>Linkedin</p>
                        </div>
                        <div className="social" onClick={() => window.open("https://github.com/marcojr73")}>
                            <BsGithub/>
                            <p>GitHub</p>
                        </div>
                        <div className="social" onClick={() => window.open("mailto:marco.junior@engenharia.ufjf.br")}>
                            <MdOutlineMailOutline/>
                            <p>Email</p>
                        </div>
                        <div className="social" onClick={() => window.open("https://wa.me/5532984640142?")}>
                            <BsWhatsapp/>
                            <p>Whatsapp</p>
                        </div>
                    </div>
                </Fade>
            </footer>
        </ContainerContacts>
    )
}

export default Contact
