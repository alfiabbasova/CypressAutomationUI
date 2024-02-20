class Example{
    loginLC: string = '#normal_login_email';
    passwordLC: string = '#normal_login_password';


    submitButtonLCLogin() {
        cy.get(this.loginLC).type('alfiyachaikalak@gmail.com');
        cy.get(this.passwordLC).type('RlK2iSwq75XA2517');
        cy.get('.ant-btn.ant-btn-primary.ant-btn-lg.login-form-button').click();

    };
}
export const LoginLCPage = new Example();

