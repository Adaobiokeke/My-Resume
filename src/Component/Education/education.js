import React from 'react'
import {educationData} from "./educationData"
import "./education.css"

const skills = (props) => {
    return (
        <div>
            <h1 className="skill">{props.title}</h1> 
           {educationData && educationData.map((education,index)=>
           <div>
           <ul>
               <li><b> Institution:{education.Institution}</b></li>
               <li><b> Degree Obtained:{education.DegreeObtained}</b></li>
               <li><b> Major:{education.Major}</b></li>
               <li><b> Date Obtained:{education.DateObtained}</b></li>
           </ul>
           </div>
           )}

           
        </div>
    )
}

export default skills
