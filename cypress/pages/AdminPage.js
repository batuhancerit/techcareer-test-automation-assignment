///<reference types="cypress"/>
import BasePage from "../pages/BasePage";
class AdminPage extends BasePage {
  elements = {
    adminPageButton:()=>cy.get('.oxd-main-menu-item--name').contains('Admin'),
    usernameInput:()=>cy.get('.oxd-form-row .oxd-input'),
    userRoleDropdown:()=>cy.get('.oxd-select-text').eq(0),
    employeeNameInput:()=>cy.get('[placeholder="Type for hints..."]'),
    statusDropdown:()=>cy.get('.oxd-select-text').eq(1),
    searchButton:()=>cy.get('[type="submit"]'),
    errorMessage:()=>cy.get('.orangehrm-paper-container .oxd-text')
    
  };
  visitAdminPage()
  {
    this.elements.adminPageButton().click()
  }
  navigateToAdminPage()
  {
    this.navigate("/admin/viewSystemUsers")
  }
  selectUserRole(userRole)
  {
     this.elements.userRoleDropdown().click()
     cy.get('.oxd-select-dropdown').contains(userRole).click()
  }
  typeEmployeeName(employeeName)
  {
    this.elements.employeeNameInput().type(employeeName)
  }
  typeUserName(username){
    this.elements.usernameInput().type(username)
  }
  selectStatus(status)
  {
     this.elements.statusDropdown().click()
     cy.get('.oxd-select-dropdown').contains(status).click()
  }
  clickSearchButton()
  {
    this.elements.searchButton().click()
  }
  errorMessage()
  {
    return this.elements.errorMessage()
  }
  verifyPageTitle()
  {
    return cy.title()
  }
 
}

export default AdminPage;
