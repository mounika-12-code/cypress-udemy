describe('autocomplete dropdown testing', () => {
    it('handle web driver input autocomplete', () => {
    cy.visit('https://www.webdriveruniversity.com/')
    cy.get('#actions').scrollIntoView().invoke("removeAttr","target").click()   
    })
})