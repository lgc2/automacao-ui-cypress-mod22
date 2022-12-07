/// <reference types="cypress" />

const checkoutElements = require('./Elements/CheckoutElements')
const productDatas = require('../fixtures/productDatas.json')

class CheckoutPage {

    fillBillingInformations(selector, fieldValue) {
        cy.get(selector)
            .clear()
            .type(fieldValue, { force: true })
    }

    assertProductInformations() {
        cy.get(checkoutElements.productName())
            .should('contain.text', `${productDatas.productNameInCheckoutPage}`)
            .and('contain.text', `${productDatas.size}`)
            .and('contain.text', `${productDatas.color}`)
            .and('contain.text', `${productDatas.quantity}`)

        cy.get(checkoutElements.productValue())
            .should('contain.text', `R$${productDatas.productValue.toFixed(2).replace('.', ',')}`)

        cy.get(checkoutElements.totalOrderValue())
            .should('contain.text', `R$${productDatas.productValue.toFixed(2).replace('.', ',')}`)

    }

    checkTerms() {
        cy.get(checkoutElements.checkboxTerms())
            .check()
    }

    finishTheOrder() {
        cy.get(checkoutElements.btnFinishOrder())
            .click()
    }

    assertFinishedOrderMessage(message) {
        cy.get(checkoutElements.finishedOrderMessage())
            .should('have.text', message)
    }
}

module.exports = new CheckoutPage()