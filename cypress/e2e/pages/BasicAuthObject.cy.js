///<reference types="cypress"/>

const username = Cypress.env("BASIC_AUTH_USER");
const password = Cypress.env("BASIC_AUTH_PASS");

export default class AuthPage {
  visitWithAuth(url) {
    cy.visit(`https://${username}:${password}@${url}`);
  }
}
