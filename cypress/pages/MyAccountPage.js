/// <reference types="cypress" />

const data = require('../fixtures/data.json')
const myAccountElements = require('./Elements/MyAccountElements')

class MyAccountPage {

    typeEmailAndPwdInTheRegisterArea() {
        const emailAdress = `testlgc${Math.floor(Math.random() * 10000)}@test.com`
        data.email = emailAdress

        cy.get(myAccountElements.iptEmail()).type(data.email, { force: true })
        cy.get(myAccountElements.iptPwd()).type(data.password, { force: true })
    }

    submitRegister() {
        cy.get(myAccountElements.btnRegister()).click()
    }

    headerMessageValidation() {
        const firstPartOfEmail = data.email.split('@')[0]

        cy.get(myAccountElements.lblWelcome())
        .should('have.text', `Welcome ${firstPartOfEmail} !`)
    }
}

module.exports = new MyAccountPage()