/// <reference types="cypress" />

const productsElements = require('./Elements/ProductsElements')
const productDatas = require('../fixtures/productDatas.json')

class ProductsPage {

    accessProductPage(productName) {
        cy.get(productsElements.lblProductsName()).contains(productName).click()
        cy.url().should('equal', `${Cypress.env('baseUrl')}/product/${productDatas.productName}/`)
    }

    interceptPostProduct(productName) {
        cy.intercept({
            method: 'POST',
            url: `${Cypress.env('baseUrl')}/product/${productName}/`
        }).as('postProduct')
    }

    buyAProduct(size, color, quantity) {
        this.interceptPostProduct(productDatas.productName)

        cy.get(productsElements.productSize(size)).click()
        cy.get(productsElements.productColor(color)).click()
        cy.get(productsElements.iptQuantity()).clear().type(quantity)
        cy.get(productsElements.btnBuy()).click()

        cy.wait('@postProduct')
            .its('response.statusCode')
            .should('equal', 200)

        this.quantityIconValidation(productDatas.quantity)
    }

    accessTheCartPage() {
        cy.get(productsElements.btnSeeCart()).click()
    }

    quantityIconValidation(quantity) {
        cy.get(productsElements.quantityIcon())
            .should('be.visible')
            .and('contain', quantity)
    }


}

module.exports = new ProductsPage()