/// <reference types="cypress" />

const homeElements = require('./Elements/HomeElements')

class HomePage {

    visitHomePage() {
        cy.visit('/')
    }

    accessMyAccountPage() {
        cy.get(homeElements.btnLogin()).click()
    }

}

module.exports = new HomePage()