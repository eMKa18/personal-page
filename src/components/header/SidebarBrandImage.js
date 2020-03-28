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
                    "h-48 w-48 rounded-full",
                    "border-8 border-indigo-900 border-solid",
                    "overflow-hidden inline-block align-middle"
                )
            }>
                <img alt="brand" src={pathToImage}/>
            </Link>
        </div>
    );
};

export { SidebarBrandImage };
