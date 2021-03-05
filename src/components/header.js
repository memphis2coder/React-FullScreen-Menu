import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './menu';
import '../globalStyles.css';
import './header.css';
// import Home from '../pages/home';
// import About from '../pages/about';
// import Team from '../pages/team';

function Navbar() {
    // if the menu is open or closed
    const [state, setState] = useState({
        clicked: false, // keep track if menu has been clicked
        menuName: "Menu" // represents our menu text
    });

    // Toggle Menu
    const handleMenu = () => { 
        if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            })
            console.log("open")
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: "Close"
            })
            console.log("close")
        }
    };



    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link to="/">Airpods.</Link>
                </div>
                <div>
                    <button onClick={handleMenu}>{state.menuName}</button>
                </div>
            </div>
            <Menu />
        </header>
        
    )
};

export default Navbar
