///<reference types="cypress"/>

class BasePage
{
    navigate(url)
    {
        cy.visit(url)
    }
    getUrl()
    {
        return cy.url()
    }
    waitForElement(selector )
    {
        cy.get(selector).should('be.visible')
    }
}
export default BasePage;

