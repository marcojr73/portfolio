import React from "react"
import { useTranslation } from "react-i18next"
import ContainerAbout from "../styles/containers/ContainerAbout"

import cv from "../assets/pdfs/cv-marcojuniormelo.pdf"
import { Fade } from "react-awesome-reveal"

function About() {

    const { t } = useTranslation()

    return (
        <ContainerAbout>
            <section id="about" className="about">
                <Fade delay={750} cascade damping={1e-1} triggerOnce={true} >
                    <h1>{t("bem-vindo")}<br />
                    <Fade delay={2500} cascade damping={1e-1} triggerOnce={true} >
                        <span>{t("bem-vindo-2")}</span>
                    </Fade>
                    </h1>
                </Fade>
                <Fade delay={4500} cascade damping={1e-1} triggerOnce={true} >
                    <p>{t("apresentacao")}</p>
                    <a href={cv} download="cv-marco-jr">{t("download")}</a>
                </Fade>
            </section>
        </ContainerAbout>
    )
}

export default About