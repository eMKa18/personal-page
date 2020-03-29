import React from "react";
import { render } from "@testing-library/react";
import { Copyrights } from "./Copyrights";

describe( "Copyrights", () => {
    const defaultProps = { url: "url", company: "Company", year: 2020 };
    it( "renders without error", () => {
        const { unmount } = render( <Copyrights {...defaultProps}/> );
        unmount();
    } );

    it( "renders copyrights data", () => {
        const { getByText } = render( <Copyrights {...defaultProps}/> );

        const year = getByText( `© ${defaultProps.year}` );
        expect( year ).toBeInTheDocument();

        const companyName = getByText( defaultProps.company );
        expect( companyName ).toBeInTheDocument();

        expect( companyName ).toHaveAttribute( "href", defaultProps.url );
    } );
} );
