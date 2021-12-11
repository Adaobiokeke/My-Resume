import React from 'react'
import {skillData} from "./skillsData"
import "./skills.css"

const skills = (props) => {
    return (
        <div>
           {skillData && skillData.map((skill,index)=>
           <div>
               <h1 className="skill">{props.title}</h1> 
           <ul>
               <li><b> Programiming Language:{skill.ProgrammingLanguage}</b></li>
               <li><b> MarkUp Languages:{skill.MarkUpLanguages}</b></li>
               <li><b> Library:{skill.Library}</b></li>
           </ul>
           </div>
           )}

           
        </div>
    )
}

export default skills
