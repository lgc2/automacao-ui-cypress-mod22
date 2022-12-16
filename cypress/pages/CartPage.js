/// <reference types="cypress" />

const cartElements = require('./Elements/CartElements')
const productDatas = require('../fixtures/productDatas.json')

class CartPage {
    interceptRemoveProduct() {
        cy.intercept({
            method: 'GET',
            url: `${Cypress.env('baseUrl')}/carrinho/?remove_item=*`
        }).as('removeProduct')
    }

    interceptUpdateProductQuantity() {
        cy.intercept({
            method: 'POST',
            url: `${Cypress.env('baseUrl')}/carrinho/`
        }).as('updateProduct')
    }

    removeProductIntheCartPage() {
        this.interceptRemoveProduct()

        cy.get(cartElements.btnRemove()).click()

        cy.wait('@removeProduct')
            .its('response.statusCode')
            .should('equal', 302)
    }

    removedProductMessageValidation(productName) {
        cy.get(cartElements.removedProductMessage())
            .should('be.visible')
            .and('have.text', `\n\t\t“${productName}” removido. Desfazer?\t`)
    }

    addOneMoreIten(atualQuantity) {
        this.interceptUpdateProductQuantity()

        cy.get(cartElements.btnPlus()).click()

        cy.wait('@updateProduct')
            .its('response.statusCode')
            .should('equal', 302)

        cy.get(cartElements.iptQuantity()).should('have.value', (atualQuantity + 1))
    }
}

module.exports = new CartPage()