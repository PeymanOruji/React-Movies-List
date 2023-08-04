describe('Test Search functionality', function () {
    it('should find marvel film', function () {
        cy.visit('/')
        cy.wait(2000)
        cy.findByRole("textbox").type('marvel')
    });
});