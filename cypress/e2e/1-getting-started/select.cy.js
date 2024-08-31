describe('selecting dropdown testing', () => {
    it('handle web driver dropdown', () => {
    cy.visit('https://www.webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke("removeAttr","target").click()   
    cy.get("#dropdowm-menu-1").select("python")
    cy.get("#dropdowm-menu-2").select("testng").contains("TestNG")
    cy.get("#dropdowm-menu-3").select("javascript").should("have.value","javascript")
})
})