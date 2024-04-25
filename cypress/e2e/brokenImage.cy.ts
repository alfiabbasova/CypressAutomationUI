

let img: HTMLImageElement

describe('BROKEN IMAGE POSITIVE', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('herokuapp')}/broken_images`);
    })
    it('veify that image is broken', () => {
        cy.get('div.example img')
            .first()
            .should('be.visible')
            .and((el) => {
                img = el[0] as HTMLImageElement
                expect(img.naturalHeight, `Image naturalHeight size is ${img.naturalHeight}`).to.equal(0)
                expect(img.naturalWidth, `Image naturalWidth size is ${img.naturalWidth}`).to.equal(0)

            })
    });
    it('veify that image is not broken', () => {
        cy.get('div.example img')
            .last()
            .should('be.visible')
            .and((el) => {
                img = el[0] as HTMLImageElement
                expect(img.naturalHeight, `Image naturalHeight size is ${img.naturalHeight}`).to.equal(160)
                expect(img.naturalWidth, `Image naturalWidth size is ${img.naturalWidth}`).to.equal(160)

            })
    });
});

describe('BROKEN IMAGE NEGATIVE', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('herokuapp')}/broken_images`);
    })
    // it('veify that image is broken', () => {
    //     cy.get('div.example img')
    //         .first()
    //         .should('be.visible')
    //         .and((el) => {
    //             img = el[0] as HTMLImageElement
    //             expect(img.naturalHeight, `Image naturalHeight size is ${img.naturalHeight}`).to.equal(0)
    //             expect(img.naturalWidth, `Image naturalWidth size is ${img.naturalWidth}`).to.equal(0)

    //         })
    // });
    it('veify that image is not broken', () => {
        cy.get('div.example img')
            .last()
            .should('be.visible')
            .and((el) => {
                img = el[0] as HTMLImageElement
                expect(img.naturalHeight, `Image naturalHeight size is ${img.naturalHeight}`).not.to.equal(0)
                expect(img.naturalWidth, `Image naturalWidth size is ${img.naturalWidth}`).not.to.equal(0)

            })
    });
});