///<reference types="cypress"/>

const username = Cypress.env("BASIC_AUTH_USER");
const password = Cypress.env("BASIC_AUTH_PASS");

export default class Ketalon {
  Authenticate() {
    cy.get("#txt-username").type(username);
    cy.get("#txt-password").type(password);
    cy.get("#btn-login").click();
  }
}

