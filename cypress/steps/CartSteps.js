const myAccountPage = require('../pages/MyAccountPage')
const productsPage = require('../pages/ProductsPage')
const productElements = require('../pages/Elements/ProductsElements')
const cartPage = require('../pages/CartPage')
const productDatas = require('../fixtures/productDatas.json')
import {
    After
} from 'cypress-cucumber-preprocessor/steps'

After({ tags: '@cartClear' }, () => {
    cy.intercept({
        method: 'POST',
        url: `${Cypress.env('baseUrl')}/wp-admin/admin-ajax.php`
    }).as('cartClear')

    cy.get('.dropdown-toggle > .mini-cart-items')
        .click()

    cy.get('#cart .remove')
        .click()

    cy.wait('@cartClear')
        .its('response.statusCode')
        .should('equal', 200)
})

Given(/^I'm logged in$/, () => {
    cy.uiLogin(Cypress.env('email'), Cypress.env('password'))
})

When(/^visited Products Page$/, () => {
    myAccountPage.accessProductsPage()
})

When(/^I click on the "([^"]*)" product$/, (args1) => {
    productsPage.accessProductPage(args1)
})

And(/^click the Buy button, after choose the size, color and quantity$/, () => {
    productsPage.buyAProduct(productDatas.size, productDatas.color, productDatas.quantity)
})

Then(/^the product will be added to the cart$/, () => {
    return true
})

And(/^I have added a product to cart$/, () => {
    myAccountPage.accessProductsPage()
    productsPage.accessProductPage(productDatas.productNameInCheckoutPage)
    productsPage.buyAProduct(productDatas.size, productDatas.color, productDatas.quantity)
})

When(/^I access the cart page$/, () => {
    productsPage.accessTheCartPage()
})

And(/^remove this product$/, () => {
    cartPage.removeProductIntheCartPage()
})

Then(/^the cart will be empty$/, () => {
    cartPage.removedProductMessageValidation(productDatas.productNameInCheckoutPage)
})

When(/^add one more item$/, () => {
    cartPage.addOneMoreIten(productDatas.quantity)
})

Then(/^the cart will have two itens$/, () => {
    const newItensQuantity = productDatas.quantity + 1
    productsPage.quantityIconValidation(newItensQuantity)
})