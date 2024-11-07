///<reference types="cypress"/>
import LoginPage from "../pages/LoginPage";

describe("Login Tests", () => {
  let loginPage;
  beforeEach(() => {
    loginPage = new LoginPage();
    loginPage.visitLoginPage()
  });
  it("should login successfully", () => {
    cy.fixture("userInfo").then((userInfo) => {
      loginPage.login(userInfo.validUser.username,userInfo.validUser.password);
      loginPage.getUrl().should("include", "/dashboard");
    });
  });
  it("should fail to login",()=>{
    cy.fixture('userInfo').then((userInfo)=>{
        loginPage.login(userInfo.invalidUser.username,userInfo.invalidUser.password);
        loginPage.checkErrorMessage();
        loginPage.getUrl().should("include","/auth/login")
    })
  })
  it("should show error for empty username and password",()=>{
    loginPage.login(" "," ")
    loginPage.checkRequiredErrorMessage()
  })
});
