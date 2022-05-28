/// <reference types="Cypress" />


describe('Handling Checkboxes',function(){

    it('Handling radiobutton', function() {

      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get('[value="radio2"').check().should('be.checked')

    })

})