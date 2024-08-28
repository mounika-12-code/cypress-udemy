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
    var total=0;
    it('iteration for counting', () => {
      
      cy.visit("https://automationteststore.com/")
      cy.get(".oneprice").invoke("text").as("price")
      cy.get("@price").then($ele=>{
        var splitval=$ele.split("$")
        cy.log(splitval)
        var totalprice=0;
        for(var i=0;i<splitval.length;i++)
        {
          totalprice=Number(splitval[i])+totalprice
        }
        cy.log(totalprice)
        total=total+totalprice
      })

      
    })
    it('iteration for counting', () => {
      cy.visit("https://automationteststore.com/")
      cy.get(".pricenew").invoke("text").as("prices")
      cy.get("@prices").then($ele=>{
        var splitval=$ele.split("$")
        cy.log(splitval)
        var totalprices=0;
        for(var i=0;i<splitval.length;i++)
        {
          totalprices=Number(splitval[i])+totalprices
        }
        cy.log(totalprices)
        total=total+totalprices
        cy.log(total)

      })
      // total=total+totalprices
.then(()=>{
expect(total).to.be.eq(648.5)
})

      
    })
})