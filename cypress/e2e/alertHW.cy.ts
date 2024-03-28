import {AlertDemoQA} from "../../pages/AlertHW"

describe('ALERT DEMOQA', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/alerts`);
    })
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    })
    it('Click Button to see alert', () => {
        AlertDemoQA.toSeeAlert();
    });
    it('On button click, alert will appear after 5 seconds', () => {
        AlertDemoQA.toSeeAlertIn5Sec();
    });
    it('On button click, confirm box will appear OK', () => {
        AlertDemoQA.confirmBoxOK();
    });
    it('On button click, confirm box will appear CANCEL', () => {
        AlertDemoQA.confirmBoxCancel();
    });
    it.skip('On button click, prompt box will appear', () => {
        
    });
});