class MyAccountElements {

    iptRegisterEmail = () => '#reg_email'
    
    iptRegisterPwd = () => '#reg_password'

    btnRegister = () => 'input[value="Register"]'

    lblWelcome = () => 'a > .hidden-xs'

    iptLoginEmail = () => '#username'

    iptLoginPwd = () => '#password'

    btnLogin = () => '.woocommerce-form > .button'
}

module.exports = new MyAccountElements()