import Nav from "../Nav";
import {waitFor, render, screen} from "@testing-library/react";

describe('Test Nav', () => {
    it('Find nav element inside the component', () => {
        render(<Nav/>)
        const navElement = screen.findByRole("navigation");
        waitFor(() => {
            expect(navElement).toBeInTheDocument()
        })
    })

    it('Find a not exist radio element inside the component', () => {
        render(<Nav/>)
        const radioElement = screen.findByRole("radio");
        waitFor(() => {
            expect(radioElement).toBeInTheDocument()
        })
    })


})