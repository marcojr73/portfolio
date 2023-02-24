import React from "react"
import { Bounce, Fade, JackInTheBox, Roll, Slide } from "react-awesome-reveal"
import { useTranslation } from "react-i18next"
import ContainerContacts from "../styles/containers/ContainerContacts"

import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { MdOutlineMailOutline } from "react-icons/md"

import emailjs from "@emailjs/browser"
import { SiLichess, SiRiotgames } from "react-icons/si"
import { toast } from "react-toastify"

function Contact() {
    const { t } = useTranslation()

    const sendEmail = (e: any) => {
        e.preventDefault()
        if (e.target[0].value && e.target[1].value) {
            try {
                emailjs.sendForm(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID, e.target, import.meta.env.VITE_APP_PUBLIC_KEY)
                toast("Mensagem enviada")
            } catch (error) {
                toast.error("Ocorreu um erro ao enviar a mensagem")
            }
            e.target.reset()
        } else toast.error("Vocẽ não preencheu corretamente os campos")
    }


    return (
        <ContainerContacts>
            <footer>
                <Fade delay={1500} cascade damping={1e-1} triggerOnce={true}>
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
                            <li className="media" onClick={() => window.open("https://www.linkedin.com/in/marcojr73/")}>
                                <span></span><span></span><span></span><span></span>
                                <BsLinkedin className="icon" />
                                <p>Linkedin</p>
                            </li>
                            <li className="media" onClick={() => window.open("https://github.com/marcojr73")}>
                                <span></span><span></span><span></span><span></span>
                                <BsGithub className="icon" />
                                <p>GitHub</p>
                            </li>
                            <li className="media" onClick={() => window.open("https://wa.me/5532984640142?")}>
                                <span></span><span></span><span></span><span></span>
                                <BsWhatsapp className="icon" />
                                <p>Whatsapp</p>
                            </li>
                            <li className="media" onClick={() => window.open("mailto:marco.junior@engenharia.ufjf.br")}>
                                <span></span><span></span><span></span><span></span>
                                <MdOutlineMailOutline className="icon" />
                                <p>Email</p>
                            </li>
                            <li className="media" onClick={() => window.open("https://lichess.org/@/oxidaks")}>
                                <span></span><span></span><span></span><span></span>
                                <SiLichess className="icon" />
                                <p>Lichess</p>
                            </li>
                            <li className="media" onClick={() => window.open("https://www.op.gg/summoners/br/FiatUno2013")}>
                                <span></span><span></span><span></span><span></span>
                                <SiRiotgames className="icon" />
                                <p>League of Legends</p>
                            </li>
                        </div>
                    </section>
                </section>
            </footer>
        </ContainerContacts >
    )
}

export default Contact
