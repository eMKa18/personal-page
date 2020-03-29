import React from "react";
import classNames from "classnames";

const Copyrights = ({url, company, year}) => {
    return (
        <p className={
            classNames(
                "block w-full py-8 mb-0",
                "text-center text-base",
                "border-t-2 border-indigo-900",
                "overflow-hidden"
            )
        }>
            &copy; {year}
            <b className={"px-2"}>
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={url}
                    className={
                        classNames(
                            "text-gray-500",
                            "transition-all duration-300 ease-out",
                            "hover:text-white"
                        )
                    }>
                    {company}
                </a>
            </b>
        </p>
    );
};

export { Copyrights };
