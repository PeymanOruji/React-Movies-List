describe('Test Search functionality', function () {
    it('should not find tarkan film', function () {
        cy.visit('/')
        cy.wait(2000)
        cy.findByRole("textbox").type('tarkan')
    });
});