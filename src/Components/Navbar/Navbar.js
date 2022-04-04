import React, { useState } from "react";
import './Navbar.css';


function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    return (
        <nav className="nav">
            <a href="#" className="nav__brand">
                Rahul
            </a>
            <ul className={active}>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        HOME
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        REVIEWS
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        DASHBOARD
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        BLOGS
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        ABOUT
                    </a>
                </li>
            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;
