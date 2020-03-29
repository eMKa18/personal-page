import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const SidebarBrandImage = ({ routeTo, pathToImage }) => {
    return (
        <div className={
            classNames(
                "py-10 px-0",
                "block w-full",
                "text-center",
                "border-b-2 border-indigo-900"
            )
        }>
            <Link to={routeTo} className={
                classNames(
                    "h-24 w-24 rounded-full",
                    "sm:h-24 sm:w-24 md:h-24 md:w-24 lg:h-48 lg:w-48 xl:w-48 xl:h-48",
                    "border-8 border-indigo-900 border-solid",
                    "overflow-hidden inline-block align-middle"
                )
            }>
                <img alt="brand" src={pathToImage} data-testid={"brand-image"}/>
            </Link>
        </div>
    );
};

export { SidebarBrandImage };
