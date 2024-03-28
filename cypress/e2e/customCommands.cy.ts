describe('Login Page', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/login`)
    });

    it('login', () => {
        cy.login('test','Test1234*')
        cy.contains('Log out');
    })

    // it('login with PageObject', () => {
        
    //     cy.contains("Log out");
    // })
})