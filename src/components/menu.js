import React, {useEffect, useRef} from 'react'
import {Link} from 'react-router-dom';
import { gsap } from 'gsap';
import "../globalStyles.css";
import './menu.css';

const Menu = ({state}) => {
    // reference to the DOM node
    let menu = useRef(null);
    // toggle menu open and close
    useEffect(() => {
         if (state.clicked === false) { // if its false menu is closed
            menu.style.display = 'none';
            console.log('close menu');
         } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
            menu.style.display = 'flex'; // if its true open menu
            console.log("open menu");
         }
    },[state]);
    // reference to the animation
    let myTween = useRef(null)
    
    

    return (
        <div ref={el => (menu = el)} className="main-menu">
            <div className="container">
                <div>
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
        </div>
    )
}

export default Menu
