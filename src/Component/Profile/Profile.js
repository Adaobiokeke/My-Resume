import React from 'react'
import Picture from "../Profile/Avatar"
import Description from "../Description/Description"
import "./profile.css"
import Header from "../Profile/Header"
import Skills from "../Skills/skills"
import Experience from "../Experience/experience"
import Education from "../Education/education"

const Profile = () => {
    return (
        <div className="full-profile">
            <div className="profile-bar">
            <Picture/>
            <Header title = "Adaobi Okeke"/>
            <Header title = "Frontend Developer"/>
            <Description title="I am a young dynamic, intelligent and process-driven individual with strong communication and interpersonal skills that is easily adaptable to different learning styles. A team player, self-starter with hands-on experience in designing, planning, managing and supporting core/enterprise banking & professional services systems, retail banking solutions and digital transformation projects."/>
            </div>
            <div className="details-div">
               <Skills title="Skills"/> 
               <Experience title="Experience"/> 
               <Education title ="Education"/>
            </div>
        </div>
    )
}

export default Profile
