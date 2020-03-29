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
                "z-1 py-2 px-0",
                "hover:bg-indigo-400 hover:text-white",
                "active:text-white active:bg-indigo-400",
                "focus:bg-indigo-400 focus:text-white",
                "sm:py-2 md:py-2 lg:py-1 xl:py-1"
            )
        }>
            {title}
        </NavLink>
    );
};

export { SidebarLink };
