Feature: Checkout

    Scenario: Should do checkout with success
        Given I logged in
        And have added a product to cart
        When I access the Checkout page
        And fill my billing informations
            | Field     | Value                |
            | Nome      | lg                   |
            | Sobrenome | c2                   |
            | Endereço  | Vancouver Street, 63 |
            | Cidade    | Vancouver            |
            | CEP       | 37500000             |
            | Telefone  | 123456789            |
        And assert product informations
        And agree with terms
        Then I will be able to finish the order
        And I will see the message: "Pedido recebido"