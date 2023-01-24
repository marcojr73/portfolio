import React from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Projects from "../components/projects/projects"
import Skills from "../components/skills/skills"

function Content(){
    return (
        <>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </>
    )
}

export default Content