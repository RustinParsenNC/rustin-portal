describe("Home Page", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173");
    cy.get("#b3").contains("West Orange High School");
  });

  it("passes", () => {
    cy.visit("http://localhost:5173/projects");
    cy.get("#b4").contains("KYLO");
  });
});
