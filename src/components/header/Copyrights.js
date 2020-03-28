import React from "react";
import classNames from "classnames";

const Copyrights = () => {
    return (
        <p className={
            classNames(
                "block w-full py-8 mb-0",
                "text-center text-base",
                "border-t-2 border-indigo-900"
            )
        }>
            &copy; {new Date().getFullYear()}
            <b className={"px-2"}>
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://codewhatuwant.com"
                    className={
                        classNames(
                            "text-gray-500",
                            "transition-all duration-300 ease-out",
                            "hover:text-white"
                        )
                    }>
                    Code What U Want
                </a>
            </b>
        </p>
    );
};

export { Copyrights };
