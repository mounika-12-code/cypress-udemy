/// <reference types="cypress" />


describe('contack us page test', () => {
    it('1st test case', () => {
    cy.visit('https://www.webdriveruniversity.com/')
    cy.get('#contact-us > .thumbnail > .section-title > h1').click()        
    });
});