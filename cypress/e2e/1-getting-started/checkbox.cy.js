describe('checkbox testing', () => {
    it('handle web driver check and uncheck', () => {
    cy.visit('https://www.webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke("removeAttr","target").click()   
    // cy.get('#checkboxes > :nth-child(1)>input').check()
    // cy.get('#checkboxes > :nth-child(1)>input').check().should("be.checked")
    cy.get('#checkboxes > :nth-child(1)>input').as("option-1")
    // cy.get("@option-1").check()
    cy.get("@option-1").check().should("be.checked")
    cy.get("@option-1").uncheck().should("not.be.checked")
})
it.only('multiple checkboxes', () => {
    cy.visit('https://www.webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke("removeAttr","target").click()  
    cy.get("input[type='checkbox']").check(["option-1","option-2"]).should("be.checked")

});
})