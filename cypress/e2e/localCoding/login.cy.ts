import {locCodingLogin} from '../../../pages/localCoding/LocalCoding';

describe('LOGIN', () => {
    beforeEach(()=>{
        //cy.session('myCurrentSession', ()=> {
            cy.visit(`${Cypress.env('stage2')}/user/login`);
            locCodingLogin.buttonLogin(Cypress.env('email'), Cypress.env('password'));
       // })
    })
    it('login page', () => {
        cy.visit(`${Cypress.env('stage2')}/course`);
        
    });
});

