describe('autocomplete dropdown testing', () => {
    it('handle web driver input autocomplete', () => {
    cy.visit('https://www.webdriveruniversity.com/')
    cy.get('#autocomplete-textfield').invoke("removeAttr","target").click()   
    cy.get("#myInput").type("a")
    cy.get("#myInputautocomplete-list >*").each(($ele,index,$list)=>{
        const prod=$ele.text();
        cy.log($ele)
        const productSelect = "Almond"
        if(prod===productSelect)
        {
            // $ele.trigger("click")
            $ele.click()
            cy.get("#submit-button").click()
    cy.url().should("include","Almond")
        }
    })
    
    
.then(()=>{
    
    cy.get("#myInput").type("g")
    cy.get("#myInputautocomplete-list >*").each(($ele,index,$list)=>{
        const prod=$ele.text();
        cy.log($ele)
        const productSelect = "Grapes"
        if(prod===productSelect)
        {
            $ele.click()
        }
    })
    cy.get("#submit-button").click()
    cy.url().should("include","Grapes")
    
})
})
})