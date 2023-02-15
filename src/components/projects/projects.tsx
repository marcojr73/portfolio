import React from "react"
import { useTranslation } from "react-i18next"
import ContainerProjects from "../../styles/containers/ContainerProjects"
import Project from "./Project"

import geoQuizDto from "../../dtos/projects/geoQuizDto"
import wolfManager from "../../dtos/projects/wolf-manager"
import ngCashDto from "../../dtos/projects/ngCashDto"
import tweterooDto from "../../dtos/projects/tweterooDto"
import drivenPassDto from "../../dtos/projects/drivenPassDto"
import linkrDto from "../../dtos/projects/linkrDto"
import { Fade } from "react-awesome-reveal"
import chegaLogoDto from "../../dtos/projects/chegaLogoDto"


function Projects() {
    const { t } = useTranslation()
    return (
        <ContainerProjects>
            <h1 id="projects" className="title">{t("projetos")}</h1>
            <section className="projects-square" >
                <Fade delay={500} duration={2000}>
                    <Project project={chegaLogoDto} />
                    <Project project={geoQuizDto} />
                    <Project project={wolfManager} />
                    <Project project={ngCashDto} />
                    <Project project={drivenPassDto} />
                    <Project project={linkrDto} />
                    <Project project={tweterooDto} />
                </Fade>
            </section>
        </ContainerProjects>
    )
}

export default Projects
