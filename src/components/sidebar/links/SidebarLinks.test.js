import React from "react";
import { render } from "@testing-library/react";
import { SidebarLinks } from "./SidebarLinks";
import { BrowserRouter } from "react-router-dom";

describe( "SidebarLinks", () => {
    const renderSidebarLinks = routes => {
        return render(
            <BrowserRouter>
                <SidebarLinks routes={routes}/>
            </BrowserRouter>
        );
    };

    it( "renders without error", () => {
        const { unmount } = renderSidebarLinks( [] );
        unmount();
    } );

    it( "renders given routes", () => {
        const routes = [{ route: "/home", name: "HOME" }];
        const { getByText } = renderSidebarLinks( routes );
        const link = getByText( "HOME" );

        expect( link ).toBeInTheDocument();
        expect( link ).toHaveAttribute( "href", "/home" );
    } );
} );
