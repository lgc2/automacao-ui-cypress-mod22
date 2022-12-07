class CheckoutElements {

    iptFirstname = () => '#billing_first_name'

    iptLastname = () => '#billing_last_name'

    selectCountry = () => '#select2-billing_country-container'

    iptAdress = () => '#billing_address_1'

    iptCity = () => '#billing_city'

    selectState = () => '#select2-billing_state-container'

    iptPostcode = () => '#billing_postcode'

    iptPhone = () => '#billing_phone'

    productName = () => '.cart_item > .product-name'

    productValue = () => '.cart_item > .product-total'

    totalOrder = () => '.order-total > th'

    totalOrderValue = () => '.order-total > td'

    checkboxTerms = () => '#terms'

    btnFinishOrder = () => '#place_order'

    finishedOrderMessage = () => '.page-title'
}

module.exports = new CheckoutElements()