import React from 'react'
import Hero from '../../components/hero/Hero'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'

function Home() {
    return (
        <>
            <Hero />
            <div className="home">
                <Posts />
                <div className="sidebar">
                <Sidebar/>
                </div>
                
            </div>
        </>
    )
}

export default Home
