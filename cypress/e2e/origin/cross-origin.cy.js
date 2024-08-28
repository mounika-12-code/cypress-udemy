describe("testing cross orgin",()=>{
it.skip('superdomin testing', () => {
    cy.visit("https://www.webdriveruniversity.com/")
    cy.visit("https://www.google")
});
it.skip('superdomins', () => {
    cy.visit("https://www.webdriveruniversity.com/")
    cy.get("#automation-test-store").invoke("removeAttr","target").click()
});
it('Visits multiple domains and performs actions', () => {
    cy.origin("webdriveruniversity.com", () => {
      cy.visit("/");
    
    });
  
    cy.origin("automationteststore.com", () => {
      cy.visit("/");
     
    });
  });
  
})