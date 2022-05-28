/// <reference types="Cypress" />


describe('Handling child Windows',function(){

    it('Handling child Windows Test case', function() {

    //Handling Child tab with combination of Cypress & Jquery commands

    // 1sth Method //
  
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#opentab').invoke('removeAttr','target').click()


    //Check user successfully nevigate to the come or not

    //Retrive the URL

    cy.url().should('include','rahulshettyacademy')


    // Navigating browser controls using Cypress

    cy.go('back')

    })

    it('Another way to Handling Child window ', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function(e1){

            const url =e1.prop('href')
            cy.visit(url)


        })

    })



})
