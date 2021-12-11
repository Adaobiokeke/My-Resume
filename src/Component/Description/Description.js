import React from 'react'
import "./Discription.css"

const Description = (props) => {
    return (
        <div>
            <div className="description-div">
            {props.title}
            </div>
        </div>
    )
}

export default Description
