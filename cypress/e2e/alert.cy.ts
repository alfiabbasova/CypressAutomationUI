import { AlertPage } from "../../pages/Alert";

describe('ALERT', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('herokuapp')}/javascript_alerts`);
    })
    it('Click for JS Alert ', () => {
        AlertPage.jsAlert();
    });
    it('Click for JS Confirm OK', () => {
        AlertPage.jsConfirm();
    });
    it('Click for JS Confirm CANCEL', () => {
        AlertPage.jsConfirm();
    });
    it('Click for JS Prompt OK/true', () => {
        AlertPage.jsPrompt();
    });
    it('Click for JS Prompt OK/true', () => {
        // AlertPage.jsPrompt();
        cy.window().then($win => {
            cy.stub($win, 'prompt').returns('Hello World');// i'm waiting for
            cy.contains('button', 'Click for JS Prompt').click();
        })
        cy.window().its('prompt').should('be.called')
        cy.get('#result').should('have.text', 'You entered: Hello World')
        
    });
});

//AC:
//1.Check if button is present
//2.Check if popup is present after you click on the button
//3.Click on OK button

//click button
//popup window
//click OK button