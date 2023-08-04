import Search from "../Search";
import {waitFor, fireEvent, render, screen} from "@testing-library/react";

describe('Test Search component', () => {
    it('should find search component', () => {
        render(<Search/>)
        const input = screen.findByPlaceholderText('Type for search...')
        waitFor(() => expect(input).toBeInTheDocument())
    })

    it('should updates on change', () => {
        const setSearch = jest.fn((value) => {
        })

        const {queryByPlaceholderText} = render(<Search onSearch={setSearch}/>)

        const searchInput = queryByPlaceholderText('Type for search...')

        fireEvent.change(searchInput, {target: {value: 'marvel'}})

        expect(searchInput.value).toBe('marvel') // OR
    })
})