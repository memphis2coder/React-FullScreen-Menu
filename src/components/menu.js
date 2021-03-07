import React, {useEffect, useRef} from 'react'
import {Link} from 'react-router-dom';
import "../globalStyles.css";
import './menu.css';

const Menu = ({state}) => {
    let menu = useRef(null);

    useEffect(() => {
         if (state.clicked === false) { 
            menu.style.display = 'none';
            console.log('close menu');
         } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
            menu.style.display = 'flex';
            console.log("open menu");
         }
    },[state]);
 
    

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
