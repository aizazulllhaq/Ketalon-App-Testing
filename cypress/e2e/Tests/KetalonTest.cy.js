/// <reference types="cypress"/>

const Ketalon = require("../pages/ketalonAppObjects.cy");
const AuthObject = new Ketalon();


describe("Ketalon Cura App Tests", () => {
  beforeEach(() => {
    cy.visit("https://katalon-demo-cura.herokuapp.com/profile.php#login");
  });

  it("Authenticate User", () => {
    AuthObject.Authenticate();
  });

  it('Make Appoitment', () => {
    
  });
  
});
