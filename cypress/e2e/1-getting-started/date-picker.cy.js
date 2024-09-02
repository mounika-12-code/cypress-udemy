/// <reference types="cypress" />

describe("testing date picker of webdriven page ", () => {
  it("selecting date from date picker", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#datepicker").invoke("removeAttr", "target").click();
    cy.get("#datepicker").click()
    // var date=new Date()
    // var date1=new Date()

    // cy.log(date.getDate())
    // date1.setDate(date.getDate() + 9)
    // cy.log(date1.getDate())

    var date = new Date();
    date.setDate(date.getDate() + 100);

    var futureday = date.getDate();
    var futureyear = date.getFullYear();
    var futuremonth = date.toLocaleString("default", { month: "long" });

    cy.log(futureday);
    cy.log(futuremonth);
    cy.log(futureyear);
    function selectingdate() {
      cy.get(".datepicker ")
        .find(".datepicker-switch")
        .first()
        .then((current) => {
          if (!current.text().includes(futureyear)) {
            cy.get(".next").first().click();
            selectingdate();
          }
        }).then((current)=>{
            if (!current.text().includes(futuremonth)) {
                cy.get(".next").first().click();
                selectingdate();
              }

        })
        
    }
    function Selectingdate(){
        cy.get("[class='day']").contains(futureday).click();
    }
    selectingdate()
    Selectingdate()
  });
});
