describe('HOMEWORK', () => {

    it('Test 1. Wait for alert to be present', () => {
        cy.visit(Cypress.env('base'));
        cy.get('#alert_trigger').should('be.visible').and('exist');
        cy.get('#alert_trigger').should('have.text', 'Show Alert').click();
        cy.get('#prompt_trigger').should('be.visible').and('exist');
        cy.get('#prompt_trigger').should('have.text','Show Prompt').click();
    });

    it('Test 2. Wait for element to be visible', () => {
        cy.visit(Cypress.env('base'));
        cy.contains('.card-header','Wait for alert to be present');
        cy.contains('.card-body','Click the Trigger and an invisible button will be visible!');
        cy.get('#visibility_trigger').should('be.visible').and('exist');
        cy.get('#visibility_trigger').should('have.text','Trigger').click();
        cy.contains('.col-sm-8','A clickable button will appear here after Trigger button is clicked.');
        cy.get('#visibility_target').should('be.visible').and('exist');
        cy.get('#visibility_target').should('have.text','Click Me').click();
        cy.get('.popover-header').should('have.text','Can you see me?');
        cy.get('.popover-body').should('have.text','I just removed my invisibility cloak!!');
    });

    it('Test 3. Wait for element to be Invisible', () => { 
        cy.visit(Cypress.env('base'));
        cy.contains('.card-header','Wait for element to be Invisible');
        cy.contains('.col-sm-4','Click the Trigger and the spinner will disappear!');
        cy.get('#invisibility_trigger').should('be.visible').and('exist').click();
        cy.contains('.col-sm-8','This spinner will disappear after Trigger button is clicked.');
        cy.get('#invisibility_target').should('be.visible').and('exist').click();
        cy.contains('#spinner_gone','Thank God that spinner is gone!');
    });

    it('Test 4. Wait for element to be enable / Wait for an attribute to contain certain text', () => { 
        cy.visit(Cypress.env('base'));
        cy.contains('.card-header','Wait for element to be enabled / Wait for an attribute to contain certain text');
        cy.contains('.col-sm-4','Click the Trigger and the Disabled Button will become active.');
        cy.get('#enabled_trigger').should('be.visible').and('exist');
        cy.contains('.text-left','After the Trigger button is clicked, this button will be active and the class attribute will be "btn btn-success".');
        cy.get('#enabled_target').should('be.visible').and('exist');
        cy.get('#enabled_trigger').should('have.text', 'Trigger').click();
        cy.get('#enabled_target').should('have.text', 'Enabled Button').click();
        //cy.contains('#spinner_gone','Thank God that spinner is gone!');
    });

}); 