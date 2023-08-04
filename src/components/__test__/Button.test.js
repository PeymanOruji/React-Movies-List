import {render, screen} from "@testing-library/react";
import Button from "../kit/Button";

describe('Test Button Component', () => {
    it('should render a button , checks for primary class and add text', () => {
        render(<Button text='add'/>)
        const buttonElement = screen.getByRole('button', {name: /add/i})
        expect(buttonElement).toHaveClass('primary')
    })
    it('should not render a button with primary class and add text', () => {
        render(<Button text='remove' mood="secondary"/>)
        const buttonElement = screen.getByRole('button', {name: /add/i})
        expect(buttonElement).toHaveClass('primary')
    })
})