import React from 'react'
import {Link} from 'react-router-dom';
import "../globalStyles.css";
import './menu.css';

function Menu() {
    return (
        <div className="menu">
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/team">Team</Link>
                        </li>
                    </ul>
                </nav>
            </div> 
        </div>
    )
}

export default Menu
