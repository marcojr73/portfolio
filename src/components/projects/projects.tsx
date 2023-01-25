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


function Projects(){
    const {t} = useTranslation()
    return(
        <ContainerProjects>
            <h1 className="title">{t("Projects")}</h1>
            <section className="projects-square" >
                <Project project={geoQuizDto}/>
                <Project project={wolfManager}/>
                <Project project={ngCashDto}/>
                <Project project={drivenPassDto}/>
                <Project project={linkrDto}/>
                <Project project={tweterooDto}/>
            </section>
        </ContainerProjects>
    )
}

export default Projects
