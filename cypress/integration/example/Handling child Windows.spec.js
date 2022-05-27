/// <reference types="Cypress" />


describe('Handling child Windows',function(){

    it('Handling Alerts', function() {

    //Handling Child tab with combination of Cypress & Jquery commands
  
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#opentab').invoke('removeAttr','target').click()


    //Check user successfully nevigate to the come or not

    //Retrive the URL

    cy.url().should('include','rahulshettyacademy ')


    // Navigating browser controls using Cypress

    cy.go('back')




    })

})
