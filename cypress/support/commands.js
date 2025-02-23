// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
<<<<<<< HEAD
/// <reference types="cypress" />

Cypress.Commands.add('verifyText', (locator, expectedText) => {
    cy.get(locator).should('have.text',expectedText)
})

Cypress.Commands.add('verifyTextContains', (locator, expectedText) => {
  cy.get(locator).should('contain.text',expectedText)
})


Cypress.Commands.add('verifyIsDisplayed', (locator) => {
    cy.get(locator).should('be.visible')
  })

Cypress.Commands.add('inputText', (locator, txtValue) => {
    cy.get(locator).type(txtValue)
  })

Cypress.Commands.add('clickWebElement', (locator) => {
    cy.get(locator).click()
  })

=======

Cypress.Commands.add('addToChart', () => {
    cy.get('#product-addtocart-button').click()
})

Cypress.Commands.add('inputAddres', (cmpny, street1, street2, street3, city, regionid, postcode, country, telephone) => {
    cy.get('[name="company"]').type(cmpny)
    cy.get('[name="street[0]"]').type(street1)
    cy.get('[name="street[1]"]').type(street2)
    cy.get('[name="street[2]"]').type(street3)
    cy.get('[name="city"]').type(city)
    cy.get('[name="region_id"]').select(regionid)
    cy.get('[name="country_id"]').select(country)
    cy.get('[name="postcode"]').type(postcode)
    cy.get('[name="telephone"]').type(telephone)
})


Cypress.Commands.add('addProduct', () => {
    cy.get('#ui-id-5').click()
    cy.get('[data-ui-id="page-title-wrapper"]').should('have.text', 'Men')
    cy.get('dd > .items > :nth-child(1) > a').click()
    cy.get('[data-ui-id="page-title-wrapper"]').should('have.text', 'Tops')
    cy.get(':nth-child(11) > .product-item-info > .details > .name > .product-item-link').click()
    cy.wait(2000)
    cy.get('#option-label-size-143-item-166').click()
    cy.get('#option-label-color-93-item-58').click()
    cy.get('#product-addtocart-button').click()
})

Cypress.Commands.add('checkAddres', (checkoutAddres) => {
    cy.get('.ship-to > .shipping-information-content').should('include.text', checkoutAddres)
})
>>>>>>> 2b66a64 (update local repo)

