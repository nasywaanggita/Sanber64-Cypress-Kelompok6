/// <reference types="cypress" />

import homePage from "../../support/page-objects/homePage"
import signUpPage from "../../support/page-objects/signUpPage"
import myAccountPage from "../../support/page-objects/myAccountPage"


describe('Verify Create Account funtionality', () => {
  beforeEach(() => {
    //User has access home page 
    cy.visit('')
  })

    it('Verify success create account by entering valid creadentials', () => {
      //User navigate to create Account Page
      cy.clickWebElement(homePage.btn_createAcc)
      //User fill valid first name
      cy.inputText(signUpPage.firstName,'Budi')
      //User fill valid last name
      cy.inputText(signUpPage.lastName,'Pekerti')
      //User fill valid email
      cy.inputText(signUpPage.email,signUpPage.randomEmailValid())
      //User fill valid password
      cy.inputText(signUpPage.password,'Password1234$')
      //User fill valid confirm password
      cy.inputText(signUpPage.confirmPassword,'Password1234$')
      //User click btn Create Account
      cy.clickWebElement(signUpPage.btn_CreateAnAccount)

      
      //verify User redirected to MyAccount Page
      cy.verifyIsDisplayed(myAccountPage.txtMyAccount)
      //verify confirmation Message create account success
      cy.verifyTextContains(myAccountPage.txtMessage,'Thank you for registering with Main Website Store.')
      
    })

    it('Verify create account without entering any field', () => {
      cy.fixture('message').then((message) => {
        const emptyfield = message.emptyField
      //User navigate to create Account Page
      cy.clickWebElement(homePage.btn_createAcc)
      //User click btn Create Account
      cy.clickWebElement(signUpPage.btn_CreateAnAccount)

      //verify error Message 
      cy.verifyText(signUpPage.txtErrorFirstName,emptyfield)
      cy.verifyText(signUpPage.txtErrorLastName,emptyfield)
      cy.verifyText(signUpPage.txtErrorEmail,emptyfield)
      cy.verifyText(signUpPage.txtErrorPassword,emptyfield)
      cy.verifyText(signUpPage.txtErrorConfirmPassword,emptyfield)
    });
    })

    it('Verify create account wihout entering firstname', () => {
      cy.fixture('message').then((message) => {
        const emptyfield = message.emptyField
      
      //User navigate to create Account Page
      cy.clickWebElement(homePage.btn_createAcc)
      //User fill valid last name
      cy.inputText(signUpPage.lastName,'Pekerti')
      //User fill valid email
      cy.inputText(signUpPage.email,signUpPage.randomEmailValid())
      //User fill valid password
      cy.inputText(signUpPage.password,'Password1234$')
      //User fill valid confirm password
      cy.inputText(signUpPage.confirmPassword,'Password1234$')
      //User click btn Create Account
      cy.clickWebElement(signUpPage.btn_CreateAnAccount)

      //verify error message
      cy.verifyText(signUpPage.txtErrorFirstName,emptyfield)
    });
    })

    it('Verify create account wihout entering lastname', () => {
      cy.fixture('message').then((message) => {
        const emptyfield = message.emptyField
      //User navigate to create Account Page
      cy.clickWebElement(homePage.btn_createAcc)
      //User fill valid first name
      cy.inputText(signUpPage.firstName,'Budi')
      //User fill valid email
      cy.inputText(signUpPage.email,signUpPage.randomEmailValid())
      //User fill valid password
      cy.inputText(signUpPage.password,'Password1234$')
      //User fill valid confirm password
      cy.inputText(signUpPage.confirmPassword,'Password1234$')
      //User click btn Create Account
      cy.clickWebElement(signUpPage.btn_CreateAnAccount)

      //verify error message
      cy.verifyText(signUpPage.txtErrorLastName,emptyfield)
    });
    })

    it('Verify create account wihout entering email', () => {
      cy.fixture('message').then((message) => {
        const emptyfield = message.emptyField
      //User navigate to create Account Page
      cy.clickWebElement(homePage.btn_createAcc)
      //User fill valid first name
      cy.inputText(signUpPage.firstName,'Budi')
      //User fill valid last name
      cy.inputText(signUpPage.lastName,'Pekerti')
      //User fill valid password
      cy.inputText(signUpPage.password,'Password1234$')
      //User fill valid confirm password
      cy.inputText(signUpPage.confirmPassword,'Password1234$')
      //User click btn Create Account 
      cy.clickWebElement(signUpPage.btn_CreateAnAccount)

      //verify error message
      cy.verifyText(signUpPage.txtErrorEmail,emptyfield)
    });
    })

    it('Verify create account wihout entering Password', () => {
      cy.fixture('message').then((message) => {
        const emptyfield = message.emptyField
      //User navigate to create Account Page
      cy.clickWebElement(homePage.btn_createAcc)
      //User fill valid first name
      cy.inputText(signUpPage.firstName,'Budi')
      //User fill valid first name
      cy.inputText(signUpPage.lastName,'Pekerti')
      //User fill valid email
      cy.inputText(signUpPage.email,signUpPage.randomEmailValid())
      //User fill valid confirm password
      cy.inputText(signUpPage.confirmPassword,'Password1234$')
      //click btn Create Account 
      cy.clickWebElement(signUpPage.btn_CreateAnAccount)

      //verify error message
      cy.verifyText(signUpPage.txtErrorPassword,emptyfield)
    });
    })

    it('Verify create account wihout entering confirm Password', () => {
      cy.fixture('message').then((message) => {
        const emptyfield = message.emptyField

      //User navigate to create Account Page
      cy.clickWebElement(homePage.btn_createAcc)
      //User fill valid first name
      cy.inputText(signUpPage.firstName,'Budi')
      //User fill valid last name
      cy.inputText(signUpPage.lastName,'Pekerti')
      //User fill valid first email
      cy.inputText(signUpPage.email,signUpPage.randomEmailValid())
      //User fill valid password
      cy.inputText(signUpPage.password,'Password1234$')
      //User click btn Create Account 
      cy.clickWebElement(signUpPage.btn_CreateAnAccount)
      cy.verifyText(signUpPage.txtErrorConfirmPassword,emptyfield)
    });
    })

    it('Verify create account by entering firstname with special characters', () => {
      //User navigate to create Account Page
      cy.clickWebElement(homePage.btn_createAcc)
      //User fill firstname with spesial characters
      cy.inputText(signUpPage.firstName,'Budi$')
      //User fill valid last name
      cy.inputText(signUpPage.lastName,'Pekerti')
      //User fill valid email
      cy.inputText(signUpPage.email,signUpPage.randomEmailValid())
      //User fill valid password
      cy.inputText(signUpPage.password,'Password1234$')
      //User fill valid confirm password
      cy.inputText(signUpPage.confirmPassword,'Password1234$')
      //User click btn Create Account
      cy.clickWebElement(signUpPage.btn_CreateAnAccount)

      //verify error message
      cy.verifyText(signUpPage.txtErrorMessage, "First Name is not valid!")
      
      
    })

    it('Verify create account by entering lastname with special characters', () => {
      //User navigate to create Account Page
      cy.clickWebElement(homePage.btn_createAcc)
      //User fill valid firstname
      cy.inputText(signUpPage.firstName,'Budi')
      //User fill last name with special characters
      cy.inputText(signUpPage.lastName,'Pekerti$')
      //User fill valid email
      cy.inputText(signUpPage.email,signUpPage.randomEmailValid())
      //User fill valid password
      cy.inputText(signUpPage.password,'Password1234$')
      //User fill valid confirm password
      cy.inputText(signUpPage.confirmPassword,'Password1234$')
      //User click btn Create account
      cy.clickWebElement(signUpPage.btn_CreateAnAccount)

      //verify error message
      cy.verifyText(signUpPage.txtErrorMessage, "Last Name is not valid!")
      
      
    })

    it.only('Verify create account by entering first name and lastname with special characters', () => {
      //User navigate to create Account Page
      cy.clickWebElement(homePage.btn_createAcc)
      //User fill first name with special character
      cy.inputText(signUpPage.firstName,'Budi$')
      //User fill last name with special character
      cy.inputText(signUpPage.lastName,'Pekerti$')
      //User fill valid email
      cy.inputText(signUpPage.email,signUpPage.randomEmailValid())
      //User fill valid password
      cy.inputText(signUpPage.password,'Password1234$')
      //User fill valid confirm password
      cy.inputText(signUpPage.confirmPassword,'Password1234$')
      //User click btn create account
      cy.clickWebElement(signUpPage.btn_CreateAnAccount)

      //verify error message
      cy.verifyText(signUpPage.txtErrorMessage, "First Name is not valid!\nLast Name is not valid!")
      
      
      
    })

    it('Verify create account by entering email already registered', () => {
      //User navigate to create Account Page
      cy.clickWebElement(homePage.btn_createAcc)
      //User fill valid first name
      cy.inputText(signUpPage.firstName,'Budi')
      //User fill valid lastname
      cy.inputText(signUpPage.lastName,'Pekerti')
      //User fill email already registered
      cy.inputText(signUpPage.email,'budipekerti@mail.com')
      //User fill valid password
      cy.inputText(signUpPage.password,'Password1234$')
      //User fill valid confirm password
      cy.inputText(signUpPage.confirmPassword,'Password1234$')
      //User click btn create account
      cy.clickWebElement(signUpPage.btn_CreateAnAccount)
      
      // verify Error message
      cy.verifyTextContains(signUpPage.txtErrorMessage, "There is already an account with this email address.")
      
      
    })


    it('Verify create account by entering email without domain extension (.com, .net, .co.id , and others)', () => {
      cy.fixture('message').then((message) => {
        const emailInvalid = message.emailInvalid
      
      //User navigate to create Account Page
      cy.clickWebElement(homePage.btn_createAcc)
      //User fill valid first name
      cy.inputText(signUpPage.firstName,'Budi')
      //User fill valid last name
      cy.inputText(signUpPage.lastName,'Pekerti')
      //User fill email withourt domain extension
      cy.inputText(signUpPage.email,'budipekerti@mail')
      //User fill valid password
      cy.inputText(signUpPage.password,'Password1234$')
      //User fill valid confirm password
      cy.inputText(signUpPage.confirmPassword,'Password1234$')
      //User click btn create account
      cy.clickWebElement(signUpPage.btn_CreateAnAccount)
      
      //verify Error Message
      cy.verifyText(signUpPage.txtErrorEmail,emailInvalid)
    });
    })

    it('Verify create account by entering email  missing  "@" symbol', () => {
      cy.fixture('message').then((message) => {
        const emailInvalid = message.emailInvalid
      //User navigate to create Account Page
      cy.clickWebElement(homePage.btn_createAcc)
      //User fill valid first name
      cy.inputText(signUpPage.firstName,'Budi')
      //User fill valid last name
      cy.inputText(signUpPage.lastName,'Pekerti')
      //User fill  email wihout "@" symbol
      cy.inputText(signUpPage.email,'budipekertimail.com')  
      //User fill valid password
      cy.inputText(signUpPage.password,'Password1234$')
      //User fill valid confirm password
      cy.inputText(signUpPage.confirmPassword,'Password1234$')
      //User click btn create account
      cy.clickWebElement(signUpPage.btn_CreateAnAccount)
      
      //verify error message
      cy.verifyText(signUpPage.txtErrorEmail,emailInvalid)
    });
    })


    it('Verify create account by entering email double  "@" symbol', () => {
      cy.fixture('message').then((message) => {
        const emailInvalid = message.emailInvalid
      //User navigate to create Account Page
      cy.clickWebElement(homePage.btn_createAcc)
      //User fill valid first name
      cy.inputText(signUpPage.firstName,'Budi')
      //User fill valid last name
      cy.inputText(signUpPage.lastName,'Pekerti')
      //User fill email with double "@" symbol
      cy.inputText(signUpPage.email,'budipekerti@@mail.com')
      //User fil valid password
      cy.inputText(signUpPage.password,'Password1234$')
      //User fill valid confirm password
      cy.inputText(signUpPage.confirmPassword,'Password1234$')
      //User click btn create account
      cy.clickWebElement(signUpPage.btn_CreateAnAccount)
      
      //verify Error Message
      cy.verifyText(signUpPage.txtErrorEmail,emailInvalid)
    });
    })

    it('Verify create account by entering password less than 8 characters', () => {
      cy.fixture('message').then((message) => {
        const passLess8Digits = message.passLess8Digits
      //User navigate to create Account Page
      cy.clickWebElement(homePage.btn_createAcc)
      //User fill valid first name
      cy.inputText(signUpPage.firstName,'Budi')
      //User fill valid last name
      cy.inputText(signUpPage.lastName,'Pekerti')
      //User fill valid email
      cy.inputText(signUpPage.email,'budipekerti@mail.com')
      //User fill password less than 8 digit
      cy.inputText(signUpPage.password,'Pass12$')
      //User fill valid confirm password
      cy.inputText(signUpPage.confirmPassword,'Pass12$')
      //User click btn create account
      cy.clickWebElement(signUpPage.btn_CreateAnAccount)
      
      //verify error message
      cy.verifyText(signUpPage.txtErrorPassword,passLess8Digits)
    });
    })


    it('Verify create account by entering password only 1 classes of character', () => {
      cy.fixture('message').then((message) => {
        const passInvalid = message.passInvalid
      //User navigate to create Account Page
      cy.clickWebElement(homePage.btn_createAcc)
      //User fill valid first name
      cy.inputText(signUpPage.firstName,'Budi')
      //User fill valid last name
      cy.inputText(signUpPage.lastName,'Pekerti')
      //User fill valid email
      cy.inputText(signUpPage.email,'budipekerti@mail.com')
      //User fill password only 1 classes of character
      cy.inputText(signUpPage.password,'password')
      //User fill valid confirm password
      cy.inputText(signUpPage.confirmPassword,'password')
      //User click btn create account
      cy.clickWebElement(signUpPage.btn_CreateAnAccount)
      
      //verify error message
      cy.verifyText(signUpPage.txtErrorPassword,passInvalid)
    });
    })


    it('Verify create account by entering password only 2 classes of character', () => {
      cy.fixture('message').then((message) => {
        const passInvalid = message.passInvalid
      //User navigate to create Account Page
      cy.clickWebElement(homePage.btn_createAcc)
      //User fill valid first name
      cy.inputText(signUpPage.firstName,'Budi')
      //User fill valid last name
      cy.inputText(signUpPage.lastName,'Pekerti')
      //User fill valid email
      cy.inputText(signUpPage.email,'budipekerti@mail.com')
      //User fill password only 2 classes of character
      cy.inputText(signUpPage.password,'p4ssw0rd1')
      //User fill valid confirm password
      cy.inputText(signUpPage.confirmPassword,'p4ssw0rd1')
      //User click btn create account
      cy.clickWebElement(signUpPage.btn_CreateAnAccount)
      
      //verify error text
      cy.verifyText(signUpPage.txtErrorPassword,passInvalid)
    });
    })


    it('Verify create account by entering confirm password that is not the same as the password', () => {
      //User navigate to create Account Page
      cy.clickWebElement(homePage.btn_createAcc)
      //User fill valid first name
      cy.inputText(signUpPage.firstName,'Budi')
      //User fill valid last name
      cy.inputText(signUpPage.lastName,'Pekerti')
      //User fill valid email
      cy.inputText(signUpPage.email,signUpPage.randomEmailValid())
      //User fill valid password
      cy.inputText(signUpPage.password,'Password1234$')
      //User fill confirm password is not the same as the password
      cy.inputText(signUpPage.confirmPassword,'Password1234*')
      //User click btn create account
      cy.clickWebElement(signUpPage.btn_CreateAnAccount)
      
      //verify error message
      cy.verifyText(signUpPage.txtErrorConfirmPassword,'Please enter the same value again.')
    
    })







  })