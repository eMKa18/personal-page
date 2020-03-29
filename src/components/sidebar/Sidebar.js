import React, { useState } from "react";
import { SidebarLinks } from "./SidebarLinks";
import { SidebarBrandImage } from "./SidebarBrandImage";
import classNames from "classnames";
import { Copyrights } from "./Copyrights";
import LineIcon from "react-lineicons";

const Sidebar = () => {
    const [isTogglerShown, setTogglerVisibility] = useState( false );

    return (
        <nav className={
            classNames(
                "fixed top-0 left-0 z-10 h-screen w-0",
                "sm:-translate-x-full sm:w-0 md:-translate-x-full md:w-0 lg:translate-x-0 lg:w-64 xl:translate-x-0 xl:w-64",
                "bg-indigo-800",
                "border-r-2 border-indigo-900",
                "transition-all duration-300 ease-out",
                {"sm:translate-x-0 sm:w-64": isTogglerShown},
                {"md:translate-x-0 md:w-64": isTogglerShown},
                {"translate-x-0 w-64": isTogglerShown},
            )
        }>
            <button
                onClick={() => setTogglerVisibility(!isTogglerShown)}
                className={classNames(
                    "absolute p-0 h-12 w-12 left-auto mt-5",
                    "sm:flex md:flex lg:hidden xl:hidden",
                    "items-center text-center justify-center text-2xl",
                    "bg-gray-800",
                    "focus:border-gray-900 focus:border",
                    {"transition-all duration-300 ease-out ml-64": isTogglerShown},
                    {"transition-all duration-300 ease-out ml-0": !isTogglerShown}
                )
                }>
                {!isTogglerShown ? <LineIcon name={"menu"}/> : <LineIcon name={"close"}/>}
            </button>
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
