class MyAccountElements {

    iptRegisterEmail = () => '#reg_email'
    
    iptRegisterPwd = () => '#reg_password'

    btnRegister = () => 'input[value="Register"]'

    lblWelcome = () => 'a > .hidden-xs'

    iptLoginEmail = () => '#username'

    iptLoginPwd = () => '#password'

    btnLogin = () => '.woocommerce-form > .button'

    lblBuy = () => '#primary-menu > .menu-item-629 > a'
}

module.exports = new MyAccountElements()