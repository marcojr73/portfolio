import React from "react"
import { IconType } from "react-icons"

function Skill({Icon, title}: {Icon: IconType, title: string}){
    return(
        <li>
            <p>{title}</p>
            <Icon className={`icon ${title === "Styled-comp" ? "styled" : ""}`}/>
        </li>
    )
}

export default Skill