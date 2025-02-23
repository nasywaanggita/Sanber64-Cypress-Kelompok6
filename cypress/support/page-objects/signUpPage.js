class SignUpPage{

    firstName = '#firstname'
    lastName = '#lastname'
    email = '#email_address'
    password = '#password'
    confirmPassword = '#password-confirmation'
    btn_CreateAnAccount = '#form-validate > .actions-toolbar > div.primary > .action'
    txtErrorFirstName = '#firstname-error'
    txtErrorLastName = '#lastname-error'
    txtErrorEmail = '#email_address-error'
    txtErrorPassword = '#password-error'
    txtErrorConfirmPassword = '#password-confirmation-error'
    txtErrorMessage = '.message-error > div'
    


    
        
    randomEmailValid(){
        const randomString = Math.random().toString(36).substring(2,8)
        const randomEmail = randomString + '@mail.com'
        return randomEmail
    }

    

    



    





    

}

export default new SignUpPage()