/// <reference types="Cypress" />


describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      cy.get('.product:visible').should('have.length',4)
    })
  })
  