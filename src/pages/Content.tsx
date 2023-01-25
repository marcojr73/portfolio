import React from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Projects from "../components/projects/projects"
import Skills from "../components/skills/skills"
import ContainerHome from "../styles/containers/containerHome"

function Content(){
    return (
        <ContainerHome>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </ContainerHome>
    )
}

export default Content