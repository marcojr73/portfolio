import React from "react"
import { useTranslation } from "react-i18next"
import ContainerProjects from "../../styles/containers/ContainerProjects"
import Project from "./Project"


function Projects(){
    const {t} = useTranslation()
    return(
        <ContainerProjects>
            <h1 className="title">{t("Projects")}</h1>

            <Project/>
        </ContainerProjects>
    )
}

export default Projects
