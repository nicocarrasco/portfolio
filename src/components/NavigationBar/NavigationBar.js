import React from 'react';
import { Link } from 'react-scroll';
import './NavigationBar.scss';

const NavigationBar = () => {
    return (
        <div id="navbar">
            <div className="navbar-container">
                <Link activeClass="active" className="navbar-home margin-right" to="about" smooth={true} offset={0} duration={500}>À propos</Link>
                <Link activeClass="active" className="navbar-contact margin-right" to="competencies" smooth={true} offset={0} duration={500}>Compétences</Link>
                <Link activeClass="active" className="navbar-projects margin-right" to="projects" smooth={true} offset={0} duration={500}>Projets</Link>
            </div>
        </div>
    )
}

export default NavigationBar