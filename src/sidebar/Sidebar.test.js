import {render} from "@testing-library/react";
import React from "react";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
    it("should display my name", () => {
        const {getByText} = render(<Sidebar />);
        expect(getByText("Monika Koschel")).toBeInTheDocument();
    });
});
