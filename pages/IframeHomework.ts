class IframeHomework {
    private iframe1: string = '#frame1'
    private body: string = 'body'
    private click1: string = '#click_me_1'
    private iframe2: string = '#frame2'
    private click2: string = '#click_me_2'
    private iframe3: string = '#frame3'

    private iframe4: string = '#frame4'
    private click4: string = '#click_me_4'


    getIframeHW() {
        cy.get(this.iframe1).then(iFrame1 => {
            const body = iFrame1.contents().find(this.body)
            cy.wrap(body).find(this.click1).click()
            cy.wrap(body)
                .find(this.iframe2)
                .then(iFrame2 => {
                    const body = iFrame2.contents().find(this.body)
                    cy.wrap(body).find(this.click2).click()
                })
            cy.wrap(body)
                .find(this.iframe3)
                .then(iFrame3 => {
                    const body = iFrame3.contents().find(this.body)
                    cy.wrap(body).find(this.iframe4)
                        .then(iFrame4 => {
                            const body = iFrame4.contents().find(this.body)
                            cy.wrap(body).find(this.click4).click()
                        })
                })

        })

    }

    visit() {
        cy.visit(`${Cypress.env('iframeHomework')}/frames.html`)
    }
}

export const IframeHWPage = new IframeHomework();