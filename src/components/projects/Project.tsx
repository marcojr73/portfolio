import React, { useState } from "react"
import { Tproject } from "../../interfaces"
import { GrFormNext } from "react-icons/gr"
import {IoIosArrowBack} from "react-icons/io"
import { useTranslation } from "react-i18next"
import {FiLink} from "react-icons/fi"


function Project({ project }: { project: Tproject }) {
    const [indexPicture, setIndexPicture] = useState(0)
    const {t} = useTranslation()
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
                <div className="controller" onClick={() => previewIndexPicture()}>
                    <IoIosArrowBack className="icon"/>
                </div>
                <img src={project.pictures[indexPicture]} alt="screenshot" />
                <div className="controller" onClick={() => nextIndexPicture()} >
                    <GrFormNext className="icon"/>
                </div>
            </div>
            <div className="description" onClick={() => window.open(project.link)}>
                <p className="project-title">{project.title}</p>
                <FiLink className="link"/>
                <p className="project-description">{t(project.description)}</p>
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
