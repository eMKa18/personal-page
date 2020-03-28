import React from "react";
import { Sidebar } from "../sidebar/Sidebar";
import classNames from "classnames";

const Layout = ({children}) => {
    return (
        <div className={classNames(
            "relative z-1 min-h-screen",
            "sm:pl-0 md:pl-0 lg:pl-64 xl:pl-64"
        )
        }>
            <Sidebar/>
            {children}
        </div>
    );
};

export { Layout };
