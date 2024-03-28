class AlertHW {
    private button1: string = '#alertButton';
    private textButton1: string = 'You clicked a button';
    private button2: string = '#timerAlertButton';
    private textButton2: string = 'This alert appeared after 5 seconds';
    private button3: string = '#confirmButton';
    private textButton3: string = 'Do you confirm action?';
    private button4: string = '#promtButton';
    private textButton4: string = 'Please enter your name';
    private confirmResult: string = '#confirmResult';
    private confirmOKResult: string = 'You selected Ok'
    private confirmCanselResult: string = 'You selected Cancel'



    toSeeAlert() {
        cy.get(this.button1).click();
        cy.on('window:alert', (text) => {
            expect(text).to.eq(this.textButton1);
        })
        cy.on('window:confirm', () => true);
    }

    toSeeAlertIn5Sec() {
        cy.get(this.button2).click();
        cy.on('window:alert', (text) => {
            expect(text).to.eq(this.textButton2);
        })
        cy.on('window:confirm', () => true);
    }

    confirmBoxOK() {
        cy.get(this.button3).click();
        cy.on('window:alert', (text) => {
            expect(text).to.eq(this.textButton3);
        })
        cy.on('window:confirm', () => true);
        cy.get(this.confirmResult).should('have.text', this.confirmOKResult);

    }
    confirmBoxCancel() {
        cy.get(this.button3).click();
        cy.on('window:alert', (text) => {
            expect(text).to.eq(this.textButton3);
        })
        cy.on('window:confirm', () => false);
        cy.get(this.confirmResult).should('have.text', this.confirmCanselResult);

    }


}
export const AlertDemoQA = new AlertHW();