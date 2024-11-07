///<reference types="cypress"/>
import BasePage from "./BasePage";

class LoginPage extends BasePage {
  elements = {
    userNameInput: () => cy.get('[name="username"]'),
    userPasswordInput: () => cy.get('[name="password"]'),
    loginButton: () => cy.get(".orangehrm-login-button"),
    errorMessage: () => cy.get(".oxd-alert-content-text"),
    requiredErrorMessage: () => cy.get(".oxd-input-field-error-message"),
  };
  visitLoginPage()
  {
    this.navigate("/auth/login")
    this.waitForElement(this.elements.userNameInput)
  }
  login(username, password) {
    this.elements.userNameInput().type(username);
    this.elements.userPasswordInput().type(password);
    this.elements.loginButton().click();
  }

  checkErrorMessage() {
    const message = "Invalid credentials";
    this.elements.errorMessage().should("contain.text", message);
  }
  checkRequiredErrorMessage() {
    this.elements
      .requiredErrorMessage()
      .should("have.length", 2)
      .should(($elements) => {
        $elements.each((index, element) => {
          expect(element).to.contain.text("Required")
        });
      });
  }
}

export default LoginPage;
