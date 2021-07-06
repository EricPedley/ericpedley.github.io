import React, {useEffect} from 'react'
import CSS from "csstype"

interface CardProps {
    title: string,
    description: string
    sourceLink: string
    demoLink: string
    imgURL: string
}

function Card({title,description,sourceLink,demoLink,imgURL}: CardProps) {
    const backgroundStyle: CSS.Properties = {
        backgroundImage: `url("${imgURL}")`,
        backgroundColor:'grey',
        content: "",
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundSize:'cover',
        backgroundPosition:'center',
        filter: 'blur(2px) brightness(70%)',
        transition: 'opacity 1s'
    }
    useEffect(()=> {
        console.log("shit loaded?")
    })
    return (
        <div className="card">
            <div style = {backgroundStyle}></div>
            <div className="card-content"></div>
        </div>
    )
}