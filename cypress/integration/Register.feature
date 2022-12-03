Feature: Register

    Scenario: Should register new account
        Given I visit EBAC Store
        When I access Minha Conta
        And type my Email address <email> and Password <pwd>
        And submit them
        Then I will be registred
        And I will see in header: Welcome <firstPartOfEmailadress> !