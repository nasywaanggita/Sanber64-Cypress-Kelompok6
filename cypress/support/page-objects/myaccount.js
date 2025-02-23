class myaccount {
    menutop = ':nth-child(2) > .customer-welcome > .customer-name > .action'
    submenutop = ':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a'
    login = '.panel > .header > .authorization-link > a'
    editcontact = '.block-dashboard-info > .block-content > .box > .box-actions > .edit > span'

    selectMenu(){
        cy.get(this.menutop).click()
    }

    selectMenutop(){
        cy.get(this.submenutop).click()
    }

    selectLogin(){
        cy.get(this.login).click()
    }

    selectEditcontact(){
        cy.get(this.editcontact).click()
    }



}
export default new myaccount()