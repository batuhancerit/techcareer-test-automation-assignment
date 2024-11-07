///<reference types="cypress"/>
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";

describe("Admin Page Tests",()=>{
    let loginPage;
    let adminPage;
    beforeEach(()=>{
        loginPage=new LoginPage()
        adminPage=new AdminPage()
        loginPage.visitLoginPage()
        cy.fixture('userInfo').then((userInfo)=>{
            loginPage.login(userInfo.validUser.username,userInfo.validUser.password)
        })
        adminPage.navigateToAdminPage()
    })
    it("should return correct pageUrl",()=>{
        adminPage.getUrl().should("include","/admin/viewSystemUsers")
    })
    it("should search and verify no user exists",()=>{
        adminPage.typeUserName("Peter")
        adminPage.selectUserRole("ESS")
        adminPage.typeEmployeeName("Peter Bravo")
        adminPage.selectStatus("Enabled")
        adminPage.clickSearchButton()
        adminPage.errorMessage().should("be.visible")
    })
})