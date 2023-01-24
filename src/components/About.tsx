import React from "react"
import { useTranslation } from "react-i18next"
import ContainerAbout from "../styles/containers/ContainerAbout"

import cv from "../assets/pdfs/cv-marcojuniormelo.pdf"
import { Fade, Slide } from "react-awesome-reveal"

function About() {

    const { t } = useTranslation()

    return (
        <ContainerAbout>
            <section className="about">
                <Fade delay={1000} cascade damping={1e-1} triggerOnce={true} >
                    <h1>{t("bem-vindo")}<br />{t("bem-vindo-2")}</h1>
                </Fade>
                <Fade delay={3000} cascade damping={1e-1} triggerOnce={true} >
                    <p>{t("apresentacao")}</p>
                    <a href={cv} download="cv-marco-jr">Baixar CV</a>
                </Fade>
            </section>
        </ContainerAbout>
    )
}

export default About