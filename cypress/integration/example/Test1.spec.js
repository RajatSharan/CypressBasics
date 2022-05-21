/// <reference types="Cypress" />



describe('My First Test Suit',function(){

    it('My First Test Case', function() {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      cy.get('.product:visible').should('have.length',4)
      //Parent child chaining
      cy.get('.products').as('productlocator')// Using alias to reuse same locator
      cy.get('@productlocator').find('.product').should('have.length',4)
      cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
      {

        console.log("asdasdasd")

      })

      cy.get('@productlocator').find('.product').each(($el, index, $list) => {
        // $el is a wrapped jQuery element
      const textVeg=$el.find('h4.product-name').text()
      if(textVeg.includes('Cashews'))
      {

       cy.wrap($el).find('button').click()

      }

    })
      //Assert to check logo text is correctly displaying or not

    cy.get('.brand').should('have.text',"GREENKART")
          
    //this is to print in logs
     cy.get('.brand').then(function(logoelement){

      cy.log(logoelement.text())

    })
    })
  })