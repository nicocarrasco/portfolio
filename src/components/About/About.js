import React from 'react';
import ProfilePic from '../../assets/NicolasCarrasco.png'
import Button from 'react-bootstrap/Button'
import CV from '../../assets/CV.pdf'
import './About.scss'

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="profilePic-container">
                    <svg className="pulse" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <circle id="Oval" cx="512" cy="512" r="512"></circle>
                    </svg>
                    <img alt="Nicolas Carrasco" src={ProfilePic}></img>
                </div>
            </div>
            <div className="about-container">
                <div className="about-text">
                    <p>Bonjour ! Je suis un jeune développeur étudiant à &#123; EPITECH &#125; Marseille où je suis actuellement en 3ème année.<br/><br />
                       Je suis passioné par les nouvelles technologies et l'innovation qui rendent possible l'impensable !<br /><br />
                       Mes principales qualités sont l'autonomie et le travail d'équipe ce qui me permet de rapidement m'adapter à un nouvel
                    environnement de travail.</p>
                </div>
                <div className="cv-btn">
                    <Button variant="info" size="lg" href={CV} target="_blank">Mon CV</Button>
                </div>
            </div>
        </section>
    )
}

export default About