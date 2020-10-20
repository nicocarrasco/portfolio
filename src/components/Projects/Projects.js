import React from 'react';
import Project from '../Project/Project'
import Content from '../../object/Project.json';
import './Projects.scss'

const Projects = () => {
    return (
        <section id="projects">
            {Object.entries(Content.Projects).map(([key, value]) => (
                <Project val={key} display={value} key={key}/>
            ))}
        </section>
    )
}

export default Projects