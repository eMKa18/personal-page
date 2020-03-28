import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss"

const Header = () => {
    return (
        <nav className={"header"}>
            <div className={"header-inner"}>
                <div className={"header-image"}>
                    <Link to="/">
                        <img alt="brand" src="/images/brand-image.jpg"/>
                    </Link>
                </div>
                <ul className={"header-menu"}>
                    <li>
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/resume">
                            Resume
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <p className={"header-copyright"}>
                    &copy; {new Date().getFullYear()}
                    <b>
                        <a rel="noopener noreferrer" target="_blank" href="https://codewhatuwant.com">Code What U
                            Want</a>
                    </b>
                </p>
            </div>
        </nav>
    );
};

export { Header };
