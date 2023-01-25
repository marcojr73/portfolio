import React from "react"
import { useTranslation } from "react-i18next"
import ContainerProjects from "../../styles/containers/ContainerProjects"
import Project from "./Project"

import geoQuizDto from "./dtos/geoQuizDto"
import wolfManager from "./dtos/wolf-manager"
import ngCashDto from "./dtos/ngCashDto"
import tweterooDto from "./dtos/tweterooDto"
import drivenPassDto from "./dtos/drivenPassDto"


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
                <Project project={tweterooDto}/>
            </section>
        </ContainerProjects>
    )
}

export default Projects
