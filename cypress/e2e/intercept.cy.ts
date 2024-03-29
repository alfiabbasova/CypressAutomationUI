describe('INTERCEPT', () => {
    it('network request spy', function() {
        cy.fixture('progress.json').as('dataProgress'); //this.data
        cy.fixture('course.json').as('dataCourse');
        cy.fixture('katas.json').as('dataKatas');
        cy.intercept('POST', '*/login').as('login');
        cy.intercept('https://server-stage.pasv.us/course/coursesProgress/65d426ccdb75721937e5356b', { fixture: "progress.json" }).as('progress');
        cy.intercept('https://server-stage.pasv.us/course', { fixture: "course.json" }).as('course');
        cy.intercept('https://server-stage.pasv.us/progress/codewars/completed/65d426ccdb75721937e5356b', { fixture: "katas.json" }).as('katas');

        cy.visit(`${Cypress.env('stage')}/user/login`);
        cy.get('#normal_login_email').type(Cypress.env('email'));
        cy.get('#normal_login_password').type(Cypress.env('password'), { log: false });
        cy.get('button[type="submit"]').click();
        cy.wait('@login').then(wholeResponse => {   //pause until it's done
            console.log(wholeResponse, 'res')
            let id = wholeResponse.response.body.payload.user._id
            cy.location().should(loc => {
                console.log(loc, 'loc')
                expect(loc.href).to.eq(`https://stage.pasv.us/profile/${id}`)
                expect(wholeResponse.response.statusCode).to.eq(200)
            })
        })
        cy.visit('https://stage.pasv.us/profile/65d426ccdb75721937e5356b/progress')
        cy.wait('@progress').then(el=>{
            //console.log(el,'response')
            cy.wrap(this.dataProgress).should('deep.equal',el.response.body)
        })
        cy.visit('https://stage.pasv.us/course')
        cy.wait('@course').then(el=>{
            cy.wrap(this.dataCourse).should('deep.equal',el.response.body)
             //console.log(el,'response')
        })
        cy.visit('https://stage.pasv.us/profile/65d426ccdb75721937e5356b/katas')
        cy.wait('@katas').then(el=>{
            cy.wrap(this.dataKatas).should('deep.equal',el.response.body)
             //console.log(el,'response')
        })
    })
})


//function() -has this
//() => {} - стрелочная функция не может иметь this