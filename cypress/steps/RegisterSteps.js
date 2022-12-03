const homePage = require('../pages/HomePage')
const myAccountPage = require('../pages/MyAccountPage')

Given(/^I visit EBAC Store$/, () => {
	homePage.visitHomePage()
})

When(/^I access Minha Conta$/, () => {
	homePage.accessMyAccountPage()
})

And(/^type my Email address <email> and Password <pwd>$/, () => {
	myAccountPage.typeEmailAndPwdInTheRegisterArea()
})

And(/^submit them$/, () => {
	myAccountPage.submitRegister()
})

Then(/^I will be registred$/, () => {
	return true
})

And(/^I will see in header: Welcome <firstPartOfEmailadress> !$/, () => {
	myAccountPage.headerMessageValidation()
})
