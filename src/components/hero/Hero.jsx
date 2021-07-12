import React from 'react'
import './hero.css'
function Hero() {
    return (
        <div className="hero">
            <div className="heroTitle">
                <span className="heroTitlesm">
                    React & Node
                </span>
                <span className="heroTitlelg">
                    Blog
                </span>
            </div>
            <img 
            src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            alt="hero" 
            className="heroImg" />
        </div>
    )
}

export default Hero
