@GetAll
Feature: Get All products

  Background:
    * def jsUtils = read('../../utils/jsUtils.js')
    * print (jsUtils().funcao2(5))

    * def jsonSchema = read('../../contracts/getAll/ResponseSchema.json')
    Given url baseUrl
    * path getAllEndpoint

  @CT-001
  Scenario: get all users and then get the first user by id
    When method get
    Then status 200
    And match response == jsonSchema
