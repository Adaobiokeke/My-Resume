import React from 'react'
import {experienceData} from "./experienceData"
// import "./experience.css"

const skills = (props) => {
    return (
        <div>
            <h1 className="skill">{props.title}</h1> 
           {experienceData && experienceData.map((experience,index)=>
           <div>
           <ul>
               <li><b> Organization:{experience.Organization}</b></li>
               <li><b> Position Held:{experience.PositionHeld}</b></li>
               <li><b> Druation:{experience.Druation}</b></li>
           </ul>
           </div>
           )}

           
        </div>
    )
}

export default skills
