import React from "react";
import { SidebarLink } from "./SidebarLink";
import classNames from "classnames";
import { routes } from "./routes";

const SidebarLinks = () => {
    return (
        <ul className={
            classNames( "w-full py-8 px-2" )
        }>
            {routes.map( ({ route, name }, index) => {
                const isNotLastElement = (elementIndex) => {
                    return elementIndex !== routes.length - 1;
                };

                return (
                    <li key={name} className={
                        classNames(
                            "list-none text-center", { "mb-px": isNotLastElement( index ) },
                            "block"
                        )
                    }>
                        <SidebarLink to={route} title={name}/>
                    </li>
                );
            } )}
        </ul>
    );
};

export { SidebarLinks };
