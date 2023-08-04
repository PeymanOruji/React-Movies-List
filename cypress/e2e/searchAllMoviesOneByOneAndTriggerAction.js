import {movies} from "../../src/movies";

describe('Search All videos one by one and click on add', function () {
    beforeEach(() => {
        cy.visit('/')
    })

    //For run test twice:
    //first for adding movies
    //then for removing movies
    for (let i = 1; i <= 2; i++) {
        it('should search all videos one by one', function () {
            movies.map((movie) => {
                cy.findByRole("textbox").type(movie.title)
                cy.findAllByRole('button').first().click()
                cy.findByRole("textbox").clear()
                cy.wait(2000)
            })
        });
    }
});