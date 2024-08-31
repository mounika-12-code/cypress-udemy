describe('radiobutton testing', () => {
    it('handle web driver radiobutton', () => {
    cy.visit('https://www.webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke("removeAttr","target").click()   
    
    cy.get('#radio-buttons').find('[type="radio"]').first().check()
    cy.get('#radio-buttons').find('[type="radio"]').eq(1).check()

})
it('handle web driver radiobutton validating state', () => {
    cy.visit('https://www.webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke("removeAttr","target").click()   
    
    cy.get('[value="lettuce"]').check()
    cy.get('[value="pumpkin"]').check()
    cy.get('[value="pumpkin"]').check().should("to.be.checked")
    cy.get('[value="cabbage"]').should("be.disabled")


})
})