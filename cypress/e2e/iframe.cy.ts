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
    // beforeEach(()=> {
    //     cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    //  })
    it('test iframe with extention', () => {
        IFrameAppPage.getIFrame()
        // cy.frameLoaded('#mce_0_ifr')
        // cy.iframe('#mce_0_ifr').then(iframeApp=>{
        //     //cy.wrap(iframeApp).type("{selectall}{del}Hello World")
        //     cy.wrap(iframeApp).clear().type("Hello Cypress")
        // })
    });
});