import React from "react"
import { useTranslation } from "react-i18next"
import ContainerSkills from "../styles/containers/ContainerSkills"

function Skills(){
    const {t} = useTranslation()
    return (
        <ContainerSkills>
            <h1 className="title">{t("Habilidades")}</h1>
        </ContainerSkills>
    )
}

export default Skills