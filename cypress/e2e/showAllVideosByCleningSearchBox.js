describe('Test Search functionality', function () {
    it('should show all movies after clean search box', function () {
        cy.visit('/')
        cy.wait(1000)
        cy.findByRole("textbox").type('Alita')
        cy.wait(2000)
        cy.get('input').clear()
    });
});