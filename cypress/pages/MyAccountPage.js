/// <reference types="cypress" />

const data = require('../fixtures/data.json')
const myAccountElements = require('./Elements/MyAccountElements')

class MyAccountPage {

    typeEmailAndPwdInTheRegisterArea() {
        const emailAdress = `testlgc${Math.floor(Math.random() * 10000)}@test.com`
        data.registerEmailadress = emailAdress

        cy.get(myAccountElements.iptRegisterEmail()).type(emailAdress, { force: true })
        cy.get(myAccountElements.iptRegisterPwd()).type(Cypress.env('password'), { force: true })
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
        cy.login(Cypress.env('email'), Cypress.env('password'))
    }

    doUiLogin() {
        cy.uiLogin(Cypress.env('email'), Cypress.env('password'))
    }

    accessProductsPage() {
        cy.get(myAccountElements.lblBuy()).click()
        cy.url().should('equal', `${Cypress.env('baseUrl')}/produtos/`)
    }
}

module.exports = new MyAccountPage()