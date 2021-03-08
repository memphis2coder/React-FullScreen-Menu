import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Menu from './menu';
import '../globalStyles.css'; 
import './header.css';
// import Home from '../pages/home';
// import About from '../pages/about';
// import Team from '../pages/team';

function Header({history}) {
    // state for disable button 
    const [disabled, setDisabled] = useState(false);
    // state for menu
    const [state, setState] = useState({
        initial: null,
        clicked: false, // keep track if menu has been clicked
        menuName: "Menu" // represents our menu text
    });
    // useEffect for page changes 
    useEffect(() => {
        // listen for page changes
        history.listen(() => {
            setState({ clicked: false, menuName: "Menu"}); // gets rid of menu and reset name to menu
        });
    });
    // Toggle Menu
    const handleMenu = () => {
        disabledMenu();
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: "Close"
            });
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            });
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: "Close"
            });
        }
    };
    // prevent spam of menu button
    const disabledMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false)
        }, 1200)
    };



    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link to="/">Airpods.</Link>
                </div>
                <div>
                    <button disabled={disabled} onClick={handleMenu}>{state.menuName}</button>
                </div>
            </div>
            <Menu state={state} />
        </header>
    )
};

export default withRouter(Header)
