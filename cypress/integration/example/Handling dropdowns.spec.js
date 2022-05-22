/// <reference types="Cypress" />



describe('My Third Test Suit',function(){

    it('Handling static dropdowns using select command with Cypress', function() {

      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get('select').select("Option2").should('have.value','option2')

    })
    it('Handling Dynamic dropdowns using select command with Cypress', function() {

      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get('#autocomplete').type("Ind")

      cy.get('.ui-menu-item div').each(($el, index, $list) => {

        if($el.text()==="India")
        {
          cy.wrap($el).click()

        }

      })

      cy.get("#autocomplete").should("have.value","India")

    })

    it("Handling Visible and invisible elements using Assertions in Cypress",function(){

      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get("#displayed-text").should('be.visible')
      cy.get("#hide-textbox").click()
      cy.get("#displayed-text").should('not.be.visible')
      cy.get("#show-textbox").click()



    })
  })

