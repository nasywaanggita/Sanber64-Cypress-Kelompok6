import myaccount from "../../support/page-objects/myaccount"

describe('myaccountsanber64', () => {
  it('openpagemyaccount', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    myaccount.selectLogin() //direct login
    // cy.get('.panel > .header > .authorization-link > a').click() 
    cy.get('#email').type('budipekerti@mail.com')
    cy.get('#pass').type('Password1234$')
    cy.get('#send2').click() //login success
    myaccount.selectMenu() //click menu
    myaccount.selectMenutop()
    cy.get('.base').should('have.text','My Account')
  })

  it.only('editaccount_firstname', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    myaccount.selectLogin() //direct login
    cy.get('#email').type('budipekerti@mail.com')
    cy.get('#pass').type('Password1234$')
    cy.get('#send2').click() //login success
    myaccount.selectMenu() //click menu
    myaccount.selectMenutop()
    myaccount.selectEditcontact()//edit contact
    cy.get('#firstname').clear().type('Rudi') //clear and replace
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-success > div').should('have.text','You saved the account information.')
  })


  it('editaccount_firstnameblank', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    myaccount.selectLogin() //direct login
    cy.get('#email').type('budipekerti@mail.com')
    cy.get('#pass').type('Password1234$')
    cy.get('#send2').click() //login success
    myaccount.selectMenu() //click menu
    myaccount.selectMenutop()
    myaccount.selectEditcontact()//edit contact
    cy.get('#firstname').clear() //clear
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.mage-error').should('have.text','This is a required field.')
  })

  it('editaccount_lastnameblank', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    myaccount.selectLogin() //direct login
    cy.get('#email').type('budipekerti@mail.com')
    cy.get('#pass').type('Password1234$')
    cy.get('#send2').click() //login success
    myaccount.selectMenu() //click menu
    myaccount.selectMenutop()
    myaccount.selectEditcontact()//edit contact
    cy.get('#firstname').clear().type('Budi') //clear and replace
    cy.get('#lastname').clear() //clear
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.mage-error').should('have.text','This is a required field.')
  })


  it('editaccount_firstlastname', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    myaccount.selectLogin() //direct login
    cy.get('#email').type('budipekerti@mail.com')
    cy.get('#pass').type('Password1234$')
    cy.get('#send2').click() //login success
    myaccount.selectMenu() //click menu
    myaccount.selectMenutop()
    myaccount.selectEditcontact()//edit contact
    cy.get('#firstname').clear().type('Rudi') //clear and replace
    cy.get('#lastname').clear().type('Pekerti') //clear and replace
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-success > div').should('have.text','You saved the account information.')
  })


  it('editaddress_chechkblank', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    myaccount.selectLogin() //direct login
    cy.get('#email').type('budipekerti@mail.com')
    cy.get('#pass').type('Password1234$')
    cy.get('#send2').click() //login success
    myaccount.selectMenu() //click menu
    myaccount.selectMenutop()
    cy.get('.box-billing-address > .box-actions > .action > span').click() //edit address
    cy.get('#firstname').clear() //clear
    cy.get('#lastname').clear() //clear
    cy.get('[data-action="save-address"]').click()
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#firstname-error').should('have.text','This is a required field.')   
  })


  it('editaddress_edited', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    myaccount.selectLogin() //direct login
    cy.get('#email').type('budipekerti@mail.com')
    cy.get('#pass').type('Password1234$')
    cy.get('#send2').click() //login success
    myaccount.selectMenu() //click menu
    myaccount.selectMenutop()
    cy.get('.box-billing-address > .box-actions > .action > span').click() //edit address
    cy.get('#telephone').clear().type('0')//clear and replace
    cy.get('#street_1').clear().type('Jalan mangga')//clear and replace
    cy.get('#city').clear().type('Surabaya')//clear and replace
    cy.get('#zip').clear().type('12345667')//clear and replace
    cy.get('[name="country_id"]').select('AF')
    cy.get('[data-action="save-address"]').click()
    cy.get('.message-success > div').should('have.text','You saved the address.')
  })


})