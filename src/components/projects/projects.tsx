import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import ContainerProjects from "../../styles/containers/ContainerProjects"
import Project from "./Project"

import geoQuizDto from "../../dtos/projects/geoQuizDto"
import wolfManager from "../../dtos/projects/wolf-manager"
import ngCashDto from "../../dtos/projects/ngCashDto"
import tweterooDto from "../../dtos/projects/tweterooDto"
import drivenPassDto from "../../dtos/projects/drivenPassDto"
import linkrDto from "../../dtos/projects/linkrDto"
import { Slide } from "react-awesome-reveal"
import chegaLogoDto from "../../dtos/projects/chegaLogoDto"
import tracklitDto from "../../dtos/projects/tracklitDto"


function Projects() {
    const { t } = useTranslation()
    const [hidden, setHidden] = useState(true)

    function toggleHidden() {
        setHidden(!hidden)
        if (!hidden) {
            document.getElementById("hidden")?.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <ContainerProjects>
            <h1 id="projects" className="title">{t("projetos")}</h1>
            <section className={`projects-square ${hidden ? "hidden" : ""}`} >
                <Slide duration={1000} direction="right" triggerOnce>
                    <Project project={chegaLogoDto} />
                </Slide>
                <Slide duration={1000} direction="right" triggerOnce>
                    <Project project={tracklitDto} />
                    <div id="hidden"></div>
                </Slide>
                <Slide duration={1000} direction="right" triggerOnce>
                    <Project project={wolfManager} />
                </Slide>
                <Slide duration={1000} direction="right" triggerOnce>
                    <Project project={geoQuizDto} />
                </Slide>
                <Slide duration={1000} direction="right" triggerOnce>
                    <Project project={ngCashDto} />
                </Slide>
                <Slide duration={1000} direction="right" triggerOnce>
                    <Project project={drivenPassDto} />
                </Slide>
                <Slide duration={1000} direction="right" triggerOnce>
                    <Project project={linkrDto} />
                </Slide>
                <Slide duration={1000} direction="right" triggerOnce>
                    <Project project={tweterooDto} />
                </Slide>
            </section>
            <button onClick={() => toggleHidden()}>{hidden ? "Mostrar mais" : "Mostrar menos"}</button>
        </ContainerProjects>
    )
}

export default Projects
