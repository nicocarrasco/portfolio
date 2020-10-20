import React from 'react';
import ReactLogo from '../../assets/react.png'
import AngularLogo from '../../assets/angularjs.png'
import IonicLogo from '../../assets/ionic.png'
import WordPressLogo from '../../assets/wordpress.png'
import NodeLogo from '../../assets/node.png'
import QtLogo from '../../assets/Qt.svg'
import CppLogo from '../../assets/cpp.png'
import CLogo from '../../assets/c.png'
import './Competencies.scss'

const Competencies = () => {
    return (
        <section id="competencies">
            <div className="competencies-container">
                <div className="competencies-line-container left-line">
                    <img src={ReactLogo} alt="reactJs"></img>
                    <img src={AngularLogo} alt="AngularJs"></img>
                    <img src={IonicLogo} alt="Ionic"></img>
                    <img src={WordPressLogo} alt="Wordpress"></img>
                </div>
                <div className="competencies-line-container right-line">
                    <img src={NodeLogo} alt="NodeJs"></img>
                    <img src={QtLogo} alt="Qt"></img>
                    <img src={CppLogo} alt="Cpp"></img>
                    <img src={CLogo} alt="C"></img>
                </div>
            </div>
        </section>
    )
}

export default Competencies