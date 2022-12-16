Feature: Cart

    @cartClear
    Scenario: Should add product to cart
        Given I'm logged in
        And visited Products Page
        When I click on the "Abominable Hoodie" product
        And click the Buy button, after choose the size, color and quantity
        Then the product will be added to the cart

    Scenario: Should remove product in the cart page
        Given I'm logged in
        And I have added a product to cart
        When I access the cart page
        And remove this product
        Then the cart will be empty

    @cartClear
    Scenario: Should add one more item in the cart page
        Given I'm logged in
        And I have added a product to cart
        When I access the cart page
        And add one more item
        Then the cart will have two itens