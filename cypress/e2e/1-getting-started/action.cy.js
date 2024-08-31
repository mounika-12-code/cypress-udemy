/// <reference types="cypress" />

describe('scrollIntoView testing', () => {
    it('handle web driver scrollIntoView', () => {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke("removeAttr","target").click()   
        })

    it('handle web driver drag and drop', () => {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke("removeAttr","target").click()   

        cy.get("#draggable").trigger("mousedown",{which:1})
        cy.get("#droppable").trigger("mousemove").trigger("mouseup",{force:true})
        })

    it('handle web driver double click', () => {
            cy.visit('https://www.webdriveruniversity.com/')
            cy.get('#actions').scrollIntoView().invoke("removeAttr","target").click()   
            cy.get("#double-click").trigger("dblclick")
            cy.get("#double-click").dblclick()
            })

    it.only('handle web driver hold', () => {
                cy.visit('https://www.webdriveruniversity.com/')
                cy.get('#actions').scrollIntoView().invoke("removeAttr","target").click()   
                cy.get("#click-box").trigger("mousedown",{which:1}).then(($ele)=>{
                    expect($ele).to.have.css('background-color','rgb(0, 255, 0)')
                })
                })
})