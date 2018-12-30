Feature: Sign up form
  As a user, I'd like to sign up to an app
  Scenario: Fill in sign up form
    Given Wait for element: "username"
    And Type "timdev3" into "username"
    And Type "asdasd" into "password"
    When Click element: "Sign in"
    Then Wait for element: "completed screen"


