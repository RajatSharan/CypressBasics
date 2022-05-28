/// <reference types="Cypress" />


describe('Handling Mouse hover popus',function(){

    it('Handling Mouse hover popus', function() {
  
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click({force: true})
    cy.url().should('include','top')

    })

})


