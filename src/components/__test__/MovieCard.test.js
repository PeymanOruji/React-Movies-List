import MovieCard from "../MovieCard";
import {render, screen, waitFor, fireEvent} from "@testing-library/react";

describe('Test MovieCard', () => {
    const shazamMovie = {
        id: "287947",
        title: "Shazam!",
        poster: "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
        overview:
            "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
        genres: ["Action", "Comedy", "Fantasy"],
        selected: false,
    };
    it('should have a heading with searched movie title ', async () => {
        render(<MovieCard movie={shazamMovie} action={jest.fn()}/>)
        const headerElement = screen.getByRole('heading')

        await waitFor(() => {
            expect(headerElement).toHaveTextContent('Shazam!')
        })
    })

    it('should have valid date', () => {
        const {container} = render(<MovieCard movie={shazamMovie} action={jest.fn()}/>)
        const dateElement = container.querySelector('small')
        const dateText = dateElement.textContent.replace('Release date:', '').trim()
            expect(dateText).not.toBe("Invalid Date")
    })
})