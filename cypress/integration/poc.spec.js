/// <reference types="cypress" />

describe("Testing something", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("logs in correctly", () => {
    cy.findByText("Sign in").click()

    cy.findByLabelText("Password").type("pw")

    cy.findByText("Sign in with Credentials").click()
  })
})
