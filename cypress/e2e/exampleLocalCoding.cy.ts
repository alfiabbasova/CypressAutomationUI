import { LoginLCPage } from "../../pages/exampleLocalCoding"

describe('LocalCodingLogin Page', () => {
     beforeEach(() => {
        cy.visit(`${Cypress.env('localCoding')}/user/login`)
     });

    it('LocalCodingLogin', () => {
        //cy.visit(`${Cypress.env('localCoding')}/user/login`)
        cy.get('#normal_login_email').type('alfiyachaikalak@gmail.com');
        cy.get('#normal_login_password').type('RlK2iSwq75XA2517');
        cy.get('.ant-btn.ant-btn-primary.ant-btn-lg.login-form-button').click();
        //cy.get('//h1').should('have.text','Alfiia Abbasova';
        cy.contains('Alfiia Abbasova');

    })

    it('LocalCodingLogin with PageObject', () => {
        LoginLCPage.submitButtonLCLogin();
        cy.contains('Alfiia Abbasova');

    })
})