/// <reference types="cypress"/>

const Ketalon = require("../pages/ketalonAppObjects.cy");
const AuthObject = new Ketalon();

describe("Ketalon Cura App Tests", () => {
  it("Visit App, Click Make Appointment, and Authenticate", () => {
    // Visit the app
    cy.visit("https://katalon-demo-cura.herokuapp.com");

    // Click on the "Make Appointment" button
    cy.get("#btn-make-appointment").click();

    // Authenticate the user
    AuthObject.Authenticate();

    // Make the Appointment
    cy.get("#combo_facility").select("Hongkong CURA Healthcare Center");
    cy.get("#chk_hospotal_readmission").click();
    cy.get(".col-sm-4 > :nth-child(2)").click();
    cy.get("#txt_visit_date").type("11/09/2024");
    cy.get("#txt_comment").click({ force: true }).type("Dr here on evening");
    cy.get("#btn-book-appointment").click();

    // Verify the Appointment
    cy.get('h2').contains("Appointment Confirmation");
    cy.wait(5000);
    cy.get(".text-center > .btn").click();
  });
});
