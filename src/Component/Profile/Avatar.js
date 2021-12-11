import React from 'react'
import mypix from "../Assets/mypix.png";
import "./Avatar.css"

const Avatar = () => {
    return (
        <div>
            <div className="avatar-div">
            <img src={mypix} alt="Avatar"  className="avatar"/>
            </div>
        </div>
    )
}

export default Avatar
