import React from "react"
import { useTranslation } from "react-i18next"
import ContainerAbout from "../styles/containers/ContainerAbout"

import cv from "../assets/pdfs/cv-marcojuniormelo.pdf"

function About(){

    const {t} = useTranslation()

    return (
        <ContainerAbout>
            <section className="about">
                <h1>{t("bem-vindo")}<br />{t("bem-vindo-2")}</h1>
                <p>{t("apresentacao")}</p>
                <a href={cv} download="cv-marco-jr">Baixar CV</a>
            </section>
        </ContainerAbout>
    )
}

export default About