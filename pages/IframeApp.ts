class IFrameApp {
    private iframe: string = '#mce_0_ifr'

    getIFrame() {
        cy.frameLoaded()
        cy.iframe(this.iframe).then(iframeApp => {
            //cy.wrap(iframeApp).type("{selectall}{del}Hello Cypress")
            cy.wrap(iframeApp).clear().type('Hello Cypress')
            cy.wrap(iframeApp).should('have.text', 'Hello Cypress')

        })
    }

    visit() {
        cy.visit(`${Cypress.env('herokuapp')}/iframe`)
    }
}


export const IFrameAppPage = new IFrameApp();