import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css'
function Navbar() {
    const user = true;
    return (
        <div className="navbarContainer">
           <div className="navbarLeft">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-instagram-square"></i>
                <i className="fab fa-pinterest-square"></i>
           </div>
           <div className="navbarMiddle">
                <div className="navMenu">
                    <p className="navMenuItems">
                        <Link className="link" to="/">
                        HOME
                        </Link>
                    </p>
                    <p className="navMenuItems">about</p>
                    <p className="navMenuItems">contact</p>
                    <p className="navMenuItems">
                    <Link className="link" to="/write">
                        WRITE
                    </Link>
                    </p>
                    {user && <p className="navMenuItems">logout</p>}
                </div>
           </div>
           <div className="navbarRight">
           {user ? (<Link className="link" to="/settings">
           <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" alt="profile pic" className="navbarProfilePic" />
               </Link>):(
                <div className="navMenu">
                <p className="navMenuItem">
                <Link className="link" to="/login">
                    LOGIN/
                </Link>
                </p>
                <p className="navMenuItem">
                <Link className="link" to="/register">
                    REGISTER
                </Link>
                </p>
                </div>
            )}   
               <div className="navSearchIcon">
                    <i className="fas fa-search"></i>
               </div>
           </div>
        </div>
    )
}

export default Navbar
