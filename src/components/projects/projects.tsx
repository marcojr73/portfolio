import React, {useState} from "react"
import {useTranslation} from "react-i18next"
import ContainerProjects from "../../styles/containers/ContainerProjects"
import Project from "./Project"

import geoQuizDto from "../../dtos/projects/geoQuizDto"
import wolfManager from "../../dtos/projects/wolf-manager"
import ngCashDto from "../../dtos/projects/ngCashDto"
import tweterooDto from "../../dtos/projects/tweterooDto"
import drivenPassDto from "../../dtos/projects/drivenPassDto"
import linkrDto from "../../dtos/projects/linkrDto"
import chegaLogoDto from "../../dtos/projects/chegaLogoDto"
import tracklitDto from "../../dtos/projects/tracklitDto"


function Projects() {
    const {t} = useTranslation()
    const [hidden, setHidden] = useState(true)

    function toggleHidden() {
        setHidden(!hidden)
        if (!hidden) {
            document.getElementById("hidden")?.scrollIntoView({behavior: "smooth"})
        }
    }

    return (
        <ContainerProjects>
            <h1 id="projects" className="title">{t("projetos")}</h1>
            <section className={`projects-square ${hidden ? "hidden" : ""}`}>
                <Project project={chegaLogoDto}/>
                <Project project={tracklitDto}/>
                <div id="hidden"></div>
                <Project project={wolfManager}/>
                <Project project={geoQuizDto}/>
                <Project project={ngCashDto}/>
                <Project project={drivenPassDto}/>
                <Project project={linkrDto}/>
                <Project project={tweterooDto}/>
            </section>
            <button onClick={() => toggleHidden()}>{hidden ? "Mostrar mais" : "Mostrar menos"}</button>
        </ContainerProjects>
    )
}

export default Projects
