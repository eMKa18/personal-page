import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

const SidebarLink = ({ to, title }) => {
    return (
        <NavLink exact to={to} className={
            classNames(
                "uppercase text-sm tracking-wider text-gray-500 font-semibold",
                "transition-all", "duration-300", "ease-out",
                "overflow-hidden relative block",
                "z-1 py-1",
                "hover:bg-indigo-400 hover:text-white",
                "active:text-white",
                "focus:bg-indigo-400 focus:text-white"
            )
        }>
            {title}
        </NavLink>
    );
};

export { SidebarLink };
