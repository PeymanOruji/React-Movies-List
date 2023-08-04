import {render, screen, waitFor} from "@testing-library/react";
import Input from "../kit/Input";

describe('Test Input component', () => {
    it('should render image element', async () => {
        render(<Input placeholder="search..."/>);
        const imageElement = await screen.findByPlaceholderText('search...')
        await waitFor(() => {
            expect(imageElement).toBeInTheDocument()
        })
    })
})