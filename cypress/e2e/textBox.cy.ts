import { TextBoxPage } from "../../pages/TextBox"

describe('TextBox Page', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/text-box`)
    });

    it('TextBox', () => {
        cy.get('#userName').type('Will Smith');
        cy.get('#userEmail').type('willsmith@gmail.com');
        cy.get('#currentAddress').type('123 1th street');
        cy.get('#permanentAddress').type('456 2nd street');
        cy.get('#submit').click();
        cy.get('#name').should('contain.text', 'Will Smith');
        cy.get('#email').should('contain.text', 'willsmith@gmail.com');
        cy.get('#currentAddress.mb-1').should('contain.text', '123 1th street');
        cy.get('#permanentAddress.mb-1').should('contain.text', '456 2nd street');
    })

    it('TextBox with PageObject', () => {
        TextBoxPage.submitButtonTextBox();
    })
})