import React from 'react';
import './Project.scss'
import BlueStain from '../../assets/blue-stain.png'
import VioletStain from '../../assets/violet-stain.png'

const Project = ({val, display}) => {

    var style = val % 2 === 0 ? "left" : "right";
    var stainImg;
    var dirContainerImg;
    var dirProject;
    var colorText;

    if (style === "left") {
        stainImg = BlueStain;
        dirContainerImg = "leftContainerImg";
        dirProject = "leftProject";
        colorText = "blue-text";
    }
    else {
        stainImg = VioletStain;
        dirContainerImg = "rightContainerImg";
        dirProject = "rightProject";
        colorText = "violet-text";
    }

    return (
        <div className={"project " + dirProject}>
            <div className={"project-img-container " + dirContainerImg}>
                <img alt="stain" src={stainImg} className="project-img-stain"></img>
                <img className="project-img" src={require(`../../assets/${display.imgPath}`)} alt={display.title}></img>
            </div>
            <div className="project-text-container">
                <h2 className={"project-title " + colorText}>{display.title}</h2>
                <p className="project-date">{display.date}</p>
                <p className="project-text">{display.text}</p>
                <a className={colorText + " project-link"} href={display.link} target="_blank" rel="noopener noreferrer">
                    {display.linkName}
                </a>
            </div>
        </div>
    )
}

export default Project