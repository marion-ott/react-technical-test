import React from 'react'
import './global.scss'

const Video = (props) => (
    <video className="Video" autoPlay loop muted playsInline>
        <source type="video/mp4" src={`${props.src}.mp4`}/>
        <source type="video/webm" src={`${props.src}.WebM`}/>
    </video>
)

export default Video