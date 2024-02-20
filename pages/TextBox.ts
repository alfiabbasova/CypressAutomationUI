class Text{
        userName: string = '#userName';
        email: string = '#userEmail';
        currentAddressButton: string = '#currentAddress';
        permanentAddressButton: string = '#permanentAddress';
        name: string = '#name';
        email1:string = '#email';
        currentAddress:string = '#currentAddress.mb-1';
        permanentAddress: string = '#permanentAddress.mb-1';
    
        submitButtonTextBox() {
            cy.get(this.userName).type('Will Smith');
            cy.get(this.email).type('willsmith@gmail.com');
            cy.get(this.currentAddressButton).type('123 1th street');
            cy.get(this.permanentAddressButton).type('456 2nd street');
            cy.get('#submit').click();
            cy.get(this.name).should('include.text','Will Smith');
            cy.get(this.email1).should('include.text','willsmith@gmail.com');
            cy.get(this.currentAddress).should('include.text','123 1th street');
            cy.get(this.permanentAddress).should('include.text','456 2nd street');
        };
    }
    
    export const TextBoxPage = new Text();