import React from "react";
import { render } from "@testing-library/react";
import { SidebarLink } from "./SidebarLink";
import { BrowserRouter } from "react-router-dom";

describe( "SidebarLink", () => {
    const renderSidebarLink = props => {
        return render(
            <BrowserRouter>
                <SidebarLink {...props} />
            </BrowserRouter>
        );
    };

    const defaultProps = {
        to: "/route",
        title: "Route"
    };

    it( "renders without error", () => {
        const { unmount } = renderSidebarLink( defaultProps );
        unmount();
    } );

    it( "renders link with given route and title", () => {
        const { getByText } = renderSidebarLink( defaultProps );
        const link = getByText( defaultProps.title );

        expect( link ).toBeInTheDocument();
        expect( link ).toHaveAttribute( "href", defaultProps.to );
    } );
} );
