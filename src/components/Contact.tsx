import React, { useState } from "react"
import { Fade } from "react-awesome-reveal"
import { useTranslation } from "react-i18next"
import ContainerContacts from "../styles/containers/ContainerContacts"

import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { MdOutlineMailOutline } from "react-icons/md"

import emailjs from "@emailjs/browser"
import { SiLichess, SiRiotgames } from "react-icons/si"
import { toast } from "react-toastify"
import Loader from "../utils/loader"

function Contact() {
    const { t } = useTranslation()

    const sendEmail = (e: any) => {
        e.preventDefault()
        try {
            emailjs.sendForm(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID, e.target, import.meta.env.VITE_APP_PUBLIC_KEY)
            toast("Mensagem enviada")
        } catch (error) {
            toast.error("Ocorreu um erro ao enviar a mensagem")
        }
        e.target.reset()
    }


    return (
        <ContainerContacts>
            <footer>
                <Fade delay={1000} cascade damping={1e-1} triggerOnce={true} >
                    <h1 id="contacts">{t("contact-1")}<br /><Fade delay={2500} cascade damping={1e-1} triggerOnce={true}>
                        <h1>{t("contact-2")}</h1>
                    </Fade>
                    </h1>
                </Fade>
                <section className="contact-me">
                    <form onSubmit={sendEmail}>
                        <h2>{t("send-me message")}</h2>
                        <input type="email" name="from_name" placeholder={t("email") || ""} />
                        <textarea name="message" placeholder={t("message") || ""} />
                        <button type="submit">{t("enviar")}</button>
                    </form>
                    <section className="social-box">
                        <h2>{t("contact-me")}</h2>
                        <div className="social">
                            <div className="media" onClick={() => window.open("https://www.linkedin.com/in/marcojr73/")}>
                                <BsLinkedin className="icon" />
                                <p>Linkedin</p>
                            </div>
                            <div className="media" onClick={() => window.open("https://github.com/marcojr73")}>
                                <BsGithub className="icon" />
                                <p>GitHub</p>
                            </div>
                            <div className="media" onClick={() => window.open("mailto:marco.junior@engenharia.ufjf.br")}>
                                <MdOutlineMailOutline className="icon" />
                                <p>Email</p>
                            </div>
                            <div className="media" onClick={() => window.open("https://wa.me/5532984640142?")}>
                                <BsWhatsapp className="icon" />
                                <p>Whatsapp</p>
                            </div>
                            <div className="media" onClick={() => window.open("https://lichess.org/@/oxidaks")}>
                                <SiLichess className="icon" />
                                <p>Lichess</p>
                            </div>
                            <div className="media" onClick={() => window.open("https://www.op.gg/summoners/br/FiatUno2013")}>
                                <SiRiotgames className="icon" />
                                <p>League of Legends</p>
                            </div>
                        </div>
                    </section>
                </section>
            </footer>
        </ContainerContacts>
    )
}

export default Contact
