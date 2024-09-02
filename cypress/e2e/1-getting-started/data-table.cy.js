/// <reference types="cypress" />

describe("handle data of webdriven page ", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  it("age validation test case", () => {
    var arry = [];
    var num = 0;
    cy.get("#thumbnail-1 td")
      .each(($ele, index, $list) => {
        // cy.log($ele.text())
        // cy.log($list)
        arry[index] = $ele.text();
      })
      .then(() => {
        var i;
        for (i = 1; i < arry.length; i++) {
          //   cy.log(arry[i]);
          if (Number(arry[i])) {
            num += Number(arry[i]);
          }
        }

        expect(num).to.eq(322);
      });
    cy.log(num);
  });

  it("validating age with last name test case", () => {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($ele, index, $list) => {
      var text = $ele.text();
      if (text.includes("Woods")) {
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(index)
          .next()
          .then((ageText) => {
            const age = Number(ageText.text());
            expect(age).to.be.eq(80);
          });
      }
    });
  });
});
