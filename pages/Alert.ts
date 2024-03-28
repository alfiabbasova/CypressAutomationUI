class Alert {
    private alertTextButton: string = 'Click for JS Alert';
    private buttonSelector: string = 'button';
    private buttonPromptText: string = 'Click for JS Prompt'
    //popupWindowText
    private jsAlertText: string = 'I am a JS Alert';
    private resultSelector: string = '#result';
    private resultTextJSAlert: string = 'You successfully clicked an alert';
    private resultTextJSConfirm: string = 'You clicked: Ok';
    private jsConfirmText: string = 'Click for JS Confirm';
    private jsPromptText: string = 'Click for JS Prompt';
    //private resultTextJSPrompt: string = 'You clicked: Ok';


    private jsConfirmWindowText: string = 'I am a JS Confirm';

    jsAlert() {
        cy.contains(this.buttonSelector, this.alertTextButton).click();
        cy.on('window:alert', (text) => {
            expect(text).to.equal(this.jsAlertText);
        })
        cy.on('window:confirm', () => true);
        cy.get(this.resultSelector).should('have.text', this.resultTextJSAlert);
    }

    jsConfirm() {
        cy.contains(this.buttonSelector, this.jsConfirmText).click();
        cy.on('window:alert', (textAlert) => {
            expect(textAlert).to.equal(this.jsConfirmWindowText);
        })
        cy.on('window:confirm', () => true);
        cy.get(this.resultSelector).should('have.text', this.resultTextJSConfirm);
    }

    jsPrompt() {

        const text = "Hello world!"
        cy.window().then($win => {
            cy.stub($win, 'prompt').returns(text)
            cy.contains(this.buttonSelector, this.jsPromptText).click();
        })
        cy.window().its('prompt').should('be.called');
        cy.window().its('prompt').should('be.calledOnce');// отслеживаем сработал prompt или нет
        cy.get(this.resultSelector).should('include.text', text);

    }
}

export const AlertPage = new Alert();