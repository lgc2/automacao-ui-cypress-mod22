class ProductsElements {

    lblProductsName = () => '.name'

    productSize = (size) => `.button-variable-item-${size}`

    productColor = (color) => `.button-variable-item-${color}`

    iptQuantity = () => '.input-text'

    btnBuy = () => '.single_add_to_cart_button'

    quantityIcon = () => '.dropdown-toggle > .mini-cart-items'

    btnSeeCart = () => '.woocommerce-message > .button'
}

module.exports = new ProductsElements()