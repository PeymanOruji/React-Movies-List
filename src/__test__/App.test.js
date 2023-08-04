import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import App from "../App";

describe('Test App component', function () {

    it('should generate movie card with selected true and button text remove', function () {

        render(<App/>)
        const buttonElementBeforeClick = screen.getByRole('button', {
            name: /marvel/i
        })

        fireEvent.click(buttonElementBeforeClick)

        const buttonElementAfterClick = screen.getByRole('button', {
            name: /marvel/i
        })

        expect(buttonElementAfterClick).toHaveTextContent(/remove/i)
    });

    it('should not find movie card with shazam title when search marvel ', async function () {
        render(<App/>)
        const searchElement = await screen.findByPlaceholderText(/type for search/i)
        fireEvent.change(searchElement, {target: {value: 'marvel'}})

        const cardHeadingElement = screen.getByRole('heading', {
            name: /shazam/i
        })

        expect(cardHeadingElement).not.toBeInTheDocument()

    });
});