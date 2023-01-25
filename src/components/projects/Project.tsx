import React, { useState } from "react"
import { Tproject } from "../../interfaces"
import { GrFormNext } from "react-icons/gr"
import {IoIosArrowBack} from "react-icons/io"


function Project({ project }: { project: Tproject }) {
    const [indexPicture, setIndexPicture] = useState(0)

    function nextIndexPicture() {
        if (indexPicture < project.pictures.length - 1) {
            setIndexPicture(indexPicture + 1)
        } else {
            setIndexPicture(0)
        }
    }

    function previewIndexPicture() {
        if (indexPicture < 1) {
            setIndexPicture(project.pictures.length - 1)
        } else {
            setIndexPicture(indexPicture - 1)
        }
    }

    return (
        <div className="project">
            <div className="carousel">
                <div className="controller" onClick={() => previewIndexPicture()}></div>
                <IoIosArrowBack className="icon"/>
                <img src={project.pictures[indexPicture]} alt="screenshot" />
                <div className="controller" onClick={() => nextIndexPicture()} ></div>
                <GrFormNext className="icon"/>
            </div>
            <div className="description" onClick={() => window.open(project.link)}>
                <p className="project-title">{project.title}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-icons">
                    {
                        project.technologies.map((Tech, index) => {
                            return <Tech className="project-icon" key={index}/>
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default Project
