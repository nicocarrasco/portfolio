import React from 'react';
import LinkedinLogo from '../../assets/linkedin.png'
import GithubLogo from '../../assets/github.png'
import GmailLogo from '../../assets/gmail.png'
import './Footer.scss'

const Footer = () => {
    return (
        <section id="footer">
            <div className="made-with-container">
                <p className="made-with-text">Made with <span role="img" aria-label="hearth">❤️</span> by Nicolas Carrasco</p>
            </div>
            <div className="contact-container">
            <a href="https://www.linkedin.com/in/nicolas-carrasco-348ab718a/" target="_blank" rel="noopener noreferrer">
                    <img className="contact-btn" src={LinkedinLogo} alt="linkedin nicolas carrasco"></img>
                </a>
                <a href="https://github.com/nicocarrasco" target="_blank" rel="noopener noreferrer">
                    <img className="contact-btn" src={GithubLogo} alt="github nicolas carrasco"></img>
                </a>
                <a href="mailto:youcarnico@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img className="contact-btn" src={GmailLogo} alt="gmail nicolas carrasco"></img>
                </a>
            </div>
        </section>
    )
}

export default Footer