import React from "react";
import { render } from "@testing-library/react";
import { SidebarBrandImage } from "./SidebarBrandImage";
import { BrowserRouter } from "react-router-dom";

describe( "SidebarBrandImage", () => {
    const defaultProps = {
        routeTo: "/route",
        pathToImage: "path/to/image.jpg"
    };

    const renderSidebarImage = props => {
        return render( <BrowserRouter>
            <SidebarBrandImage {...props} />
        </BrowserRouter> );
    };

    it( "renders without error", () => {
        const { unmount } = renderSidebarImage( defaultProps );
        unmount();
    } );

    it( "renders with given route and image", () => {
        const { getByTestId } = renderSidebarImage( defaultProps );
        const image = getByTestId( "brand-image" );

        expect( image ).toBeInTheDocument();
        expect( image ).toHaveAttribute( "src", defaultProps.pathToImage );

        const imageLink = image.parentElement;
        expect( imageLink ).toHaveAttribute( "href", defaultProps.routeTo );
    } );
} );
