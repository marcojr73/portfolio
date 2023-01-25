import React from "react"
import { Fade } from "react-awesome-reveal"
import { useTranslation } from "react-i18next"
import ContainerSkills from "../../styles/containers/ContainerSkills"
import Skill from "./skill"

import SkillsDto from "../../dtos/skills/index.ts"

function Skills() {
    const { t } = useTranslation()
    return (
        <ContainerSkills>
            <h1 className="title" id="skills">{t("habilidades")}</h1>
            <Fade delay={0} duration={750} cascade damping={1e-1}>
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