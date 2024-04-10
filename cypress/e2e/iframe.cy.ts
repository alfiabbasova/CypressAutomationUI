import { IFramePage } from '../../pages/Iframe';
import { IFrameAppPage } from '../../pages/IframeApp';


describe('IFRAME', () => {
    beforeEach(() => {
        IFramePage.visit()
    })
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    })
    it('test iframe', () => {
        IFramePage.getIFrame()
    });
});

describe('IFRAMEAPP', () => {
    beforeEach(() => {
        IFrameAppPage.visit()
    })
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    })
    it('test iframe with extention', () => {
        //IFrameAppPage.getIFrame()
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').then(iframeApp => {
            cy.wrap(iframeApp).type("{selectall}{del}Hello World");
            cy.wrap(iframeApp).should('have.text', 'Hello World!');
            cy.wrap(iframeApp).clear().type("Hello Cypress");
        })
    });
});

describe.only('IFRAME WITH PLUGIN', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('herokuapp')}/iframe`)
    })
    it('test iFrame', () => {
        cy.frameLoaded('#mce_0_ifr');
        cy.iframe('#mce_0_ifr').then(iFrame => {
            cy.wrap(iFrame).type('{selectAll}{del}').type('Hello World');
            cy.wrap(iFrame).should('have.text', 'Hello World');
            cy.wrap(iFrame).clear().type('Cypress');
            cy.then(()=>{
                expect(iFrame.text()).to.equal('Cypress')
            })
           
        })
    });
});