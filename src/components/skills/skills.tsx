import React from "react"
import { Fade, Slide } from "react-awesome-reveal"
import { useTranslation } from "react-i18next"
import ContainerSkills from "../../styles/containers/ContainerSkills"
import Skill from "./skill"

import SkillsDto from "./SkillsDto"

function Skills() {
    const { t } = useTranslation()
    return (
        <ContainerSkills>
            <h1 className="title">{t("Habilidades")}</h1>
            <Fade delay={0} duration={500} cascade damping={1e-1}>
                <ul>
                    {
                        SkillsDto.map(skill => {
                            return (
                                <Skill key={skill.title} title={skill.title} Icon={skill.icon} />
                            )
                        })
                    }
                </ul>
            </Fade>
        </ContainerSkills>
    )
}

export default Skills