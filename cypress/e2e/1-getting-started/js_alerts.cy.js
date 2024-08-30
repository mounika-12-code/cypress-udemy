
describe('alert us page test', () => {
    it('1st test case', () => {
    cy.visit('https://www.webdriveruniversity.com/')
    cy.get('#popup-alerts ').invoke("removeAttr","target").click()   
    cy.get("#button1").click()   
    cy.on("window:alert",(str)=>{
        expect(str).to.be.eq("I am an alert box!")
    })  
    });
    it('2st test case alert', () => {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#popup-alerts ').invoke("removeAttr","target").click()   
        cy.get("#button4").click()   
        cy.on("window:confirm",(str)=>{
          return true
        })  
        cy.get("#confirm-alert-text").contains("You pressed OK!")
        });

        it('2st test case alert false', () => {
            cy.visit('https://www.webdriveruniversity.com/')
            cy.get('#popup-alerts ').invoke("removeAttr","target").click()   
            cy.get("#button4").click()   
            cy.on("window:confirm",()=>{
              return false
            })  
            cy.get("#confirm-alert-text").contains("You pressed Cancel!")
            });


            it.only('stub alert ', () => {
                cy.visit('https://www.webdriveruniversity.com/')
                cy.get('#popup-alerts ').invoke("removeAttr","target").click()   
                const stub =cy.stub()
                cy.on("window:confirm",stub)

                cy.get("#button4").click() .then(()=>{
                    expect(stub.getCall(0)).to.be.calledWith("Press a button!")
                }) .then(()=>{return true}).then(()=>{cy.get("#confirm-alert-text").contains("You pressed OK!")
                }) 
                 
                });
});