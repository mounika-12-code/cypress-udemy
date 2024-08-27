/// <reference types="cypress" />

describe('iteration of product', () => {
    it('iteration', () => {
       cy.visit("https://automationteststore.com/")
    //    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
       cy.get(".fixed_wrapper .prdocutname").each(($ele,index,$list)=>{
cy.log(index,$ele.text(),$list)
if($ele.text().includes("Skinsheen Bronzer Stick"))
{
    cy.wrap($ele).click()
}
       })
    });
});