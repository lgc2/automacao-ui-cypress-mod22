/// <reference types="cypress" />

const homePage = require('../pages/HomePage')
const myAccountElements = require('../pages/Elements/MyAccountElements')

Cypress.Commands.add('login', (user, pass) => {
    const fd = new FormData()
    fd.append('username', user)
    fd.append('password', pass)
    fd.append('woocommerce-login-nonce', '5065e79202') // esta propriedade está variando de uma dia pro outro, impossibilitando o uso do comando
    fd.append('_wp_http_referer', '/minha-conta/')
    fd.append('login', 'Login')

    cy.request({
        url: '/minha-conta/',
        method: 'POST',
        body: fd
    })
        .its('allRequestResponses')
        .its('0')
        .its('Response Headers')
        .then(response => {
            response['set-cookie'].forEach(cookie => {
                const firstPart = cookie.split(';')[0]
                const divisor = firstPart.indexOf('=')
                const key = firstPart.substring(0, divisor)
                const value = firstPart.substring(divisor + 1)

                cy.setCookie(key, value)
            })
        })

    cy.visit('/minha-conta/')
})

Cypress.Commands.add('uiLogin', (user, pass) => {
    homePage.visitHomePage()
    homePage.accessMyAccountPage()

    cy.get(myAccountElements.iptLoginEmail()).type(user, { force: true })
    cy.get(myAccountElements.iptLoginPwd()).type(pass, { force: true })
    cy.get(myAccountElements.btnLogin()).click()


})

Cypress.Commands.add('addProductToCartByEndpoint', (productName, size, color, quantity, product_id, variation_id) => {
    const fd = new FormData()
    fd.append('attribute_size', size)
    fd.append('attribute_color', color)
    fd.append('quantity', quantity)
    fd.append('add-to-cart', product_id)
    fd.append('product_id', product_id)
    fd.append('variation_id', variation_id)

    cy.request({
        url: `/product/${productName}/`,
        method: 'POST',
        body: fd
    }).then((response) => {
        expect(response.status).to.equal(200)
    })
    cy.visit('/checkout/')
})