import React from "react";
import { SidebarLinks } from "./SidebarLinks";
import { SidebarBrandImage } from "./SidebarBrandImage";
import classNames from "classnames";
import { Copyrights } from "./Copyrights";

const Sidebar = () => {
    return (
        <nav className={
            classNames(
                "fixed top-0 left-0 z-10 h-screen w-64",
                "bg-indigo-800",
                "border-r-2 border-indigo-900",
                "translate-x-0 transition-all duration-300 ease-out"
            )
        }>
            <div className={
                classNames(
                    "w-full h-full",
                    "flex flex-col justify-between items-center",
                    "overflow-hidden overflow-y-auto"
                )
            }>
                <SidebarBrandImage routeTo={"/"} pathToImage={"/images/brand-image.jpg"}/>
                <SidebarLinks/>
                <Copyrights/>
            </div>
        </nav>
    );
};

export { Sidebar };
