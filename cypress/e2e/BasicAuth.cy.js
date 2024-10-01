///<reference types="cypress"/>

import AuthPage from "./pages/BasicAuthObject.cy";

describe("Heroku App basic authentication tests", () => {
  const authObject = new AuthPage();
  const url = "the-internet.herokuapp.com/basic_auth";

  beforeEach(() => {
    authObject.visitWithAuth(url);
    cy.url().should('include', 'basic_auth');
  });

  it("should display the success message after successful authentication", () => {
    cy.get("p", { timeout: 10000 }).should(
      "contain.text",
      "Congratulations! You must have the proper credentials."
    );
    cy.screenshot();
  });
});