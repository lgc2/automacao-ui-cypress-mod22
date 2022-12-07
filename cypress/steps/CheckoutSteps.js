const myAccountPage = require('../pages/MyAccountPage')
const checkoutPage = require('../pages/CheckoutPage')
const checkoutElements = require('../pages/Elements/CheckoutElements')
const productDatas = require('../fixtures/productDatas.json')

Given(/^I logged in$/, () => {
	myAccountPage.doUiLogin()
})

And(/^have added a product to cart$/, () => {
	cy.addProductToCartByEndpoint(productDatas.productName, productDatas.size, productDatas.color, productDatas.quantity, productDatas.product_id, productDatas.variation_id)
})

When(/^I access the Checkout page$/, () => {
	return true
})

And(/^fill my billing informations$/, (datatable) => {
	let selectors = [
		checkoutElements.iptFirstname(),
		checkoutElements.iptLastname(),
		checkoutElements.iptAdress(),
		checkoutElements.iptCity(),
		checkoutElements.iptPostcode(),
		checkoutElements.iptPhone()
	]

	datatable.hashes().forEach((element, index) => {
		checkoutPage.fillBillingInformations(selectors[index], element.Value)
	})
})

And(/^assert product informations$/, () => {
	checkoutPage.assertProductInformations()
})

When(/^agree with terms$/, () => {
	checkoutPage.checkTerms()
})

Then(/^I will be able to finish the order$/, () => {
	checkoutPage.finishTheOrder()
})

And(/^I will see the message: "([^"]*)"$/, (args1) => {
	checkoutPage.assertFinishedOrderMessage(args1)
})