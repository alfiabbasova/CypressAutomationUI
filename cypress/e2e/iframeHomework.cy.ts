import { IframeHWPage } from '../../pages/IframeHomework'

describe('IFRAME HOMEWORK', () => {
    beforeEach(() => {
        IframeHWPage.visit()
    })
    it('test iframe', () => {
        IframeHWPage.getIframeHW()
    });
});

describe('IFRAME WITH EXTENTIONS', () => {
    beforeEach(() => {
        IframeHWPage.visit()
    })
    beforeEach(()=> {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
     })
    it('test iframe with extention', () => {
        //IFrameAppPage.getIFrame()
        cy.get('#frame1').then(iFrame1 => {
            const body = iFrame1.contents().find('body')
            cy.wrap(body).find('#click_me_1').click()
            cy.wrap(body)
                .find('#frame2')
                .then(iFrame2 => {
                    const body = iFrame2.contents().find('body')
                    cy.wrap(body).find('#click_me_2').click()
                })
            cy.wrap(body)
                .find('#frame3')
                .then(iFrame3 => {
                    const body = iFrame3.contents().find('body')
                    cy.wrap(body).find('#frame4')
                        .then(iFrame4 => {
                            const body = iFrame4.contents().find('body')
                            cy.wrap(body).find('#click_me_4').click()
                        })
                })

        })
    });
});