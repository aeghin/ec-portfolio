import React from 'react';
import './AboutMe.css';
import image from '../../images/IMG_1446.jpg'

export default function AboutMe() {
    return (
        <div className="test1">
            <h1 className="text-warning">ABOUT ME</h1>
            <p>Hi! I am Edward, a full-stack web developer.</p>
            <img src={image} alt="Edward C"></img>
        </div>        
    )
}
