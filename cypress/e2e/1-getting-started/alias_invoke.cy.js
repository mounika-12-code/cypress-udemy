/// <reference types="cypress" />



describe('iteration of product', () => {
    it('iteration', () => {
       cy.visit("https://automationteststore.com/")
       cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
       cy.get(".fixed_wrapper .prdocutname").eq(0).invoke("text").as("product")
       cy.get("@product").its("length").should("be.gt",5)
       cy.get("@product").should("include","Seaweed Conditioner")

    })
    it('iteration for counting', () => {
      cy.visit("https://automationteststore.com/")
      cy.get(".thumbnail").as("allproduct")
      cy.get("@allproduct").should('have.length',16)
      cy.get("@allproduct").find(".productcart").invoke("attr","title").should("include","Add to Cart")
    })
   })