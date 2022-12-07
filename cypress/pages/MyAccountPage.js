/// <reference types="cypress" />

const data = require('../fixtures/data.json')
const myAccountElements = require('./Elements/MyAccountElements')

class MyAccountPage {

    typeEmailAndPwdInTheRegisterArea() {
        const emailAdress = `testlgc${Math.floor(Math.random() * 10000)}@test.com`
        data.registerEmailadress = emailAdress

        cy.get(myAccountElements.iptRegisterEmail()).type(emailAdress, { force: true })
        cy.get(myAccountElements.iptRegisterPwd()).type(data.password, { force: true })
    }

    submitRegister() {
        cy.get(myAccountElements.btnRegister()).click()
    }

    headerMessageValidation() {
        const firstPartOfEmail = data.registerEmailadress.split('@')[0]

        cy.get(myAccountElements.lblWelcome())
            .should('have.text', `Welcome ${firstPartOfEmail} !`)
    }

    doLogin() {
        cy.clearCookies()
        cy.login(data.email, data.password)
    }

    doUiLogin() {
        cy.uiLogin(data.email, data.password)
    }
}

module.exports = new MyAccountPage()