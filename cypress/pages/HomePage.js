/// <reference types="cypress" />

const homeElements = require('./Elements/HomeElements')

class HomePage {

    visitHomePage() {
        cy.clearCookies()
        cy.visit(Cypress.env('baseUrl'))
    }

    accessMyAccountPage() {
        cy.get(homeElements.btnLogin()).click()
    }

}

module.exports = new HomePage()