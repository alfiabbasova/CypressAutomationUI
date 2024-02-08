describe('HOMEWORK', () => {
    it('Wait for element to be visible', () => {
        cy.visit(Cypress.env('base'));
        cy.get('#visibility_trigger').click();
        cy.get('#visibility_target').should('be.visible').and('exist').click();
        cy.get('.popover-body').should('have.text','I just removed my invisibility cloak!!');

    });
    it('Wait for element to be Invisible', () => { 
        cy.visit(Cypress.env('base'));
        cy.get('#invisibility_trigger').click();
        cy.get('#invisibility_target').should('be.visible').and('exist').click();
        
    });
});