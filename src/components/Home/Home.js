import React from 'react';
import BackgroundVideo from '../../assets/background-video.mp4'
import NavigationBar from '../NavigationBar/NavigationBar'
import './Home.scss'

const Home = () => {
    return (
        <section id="home">
            <NavigationBar />
            <div className="video-container">
                <video className="video-home" autoPlay loop muted preload="true">
                    <source src={BackgroundVideo} type='video/mp4' />
                </video>
            </div>
        </section>
    )
}

export default Home