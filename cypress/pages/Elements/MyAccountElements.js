class MyAccountElements {

    iptEmail = () => '#reg_email'
    
    iptPwd = () => '#reg_password'

    btnRegister = () => 'input[value="Register"]'

    lblWelcome = () => 'a > .hidden-xs'
}

module.exports = new MyAccountElements()