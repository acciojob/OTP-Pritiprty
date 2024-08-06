//your JS code here. If required.
() => {
  cy.visit(baseUrl + "/main.html");
  cy.get(".code-container").find("input.code").eq(0).type(5);
  cy.wait(100); // wait for 100ms for the focus to move to the next input field
  cy.focused().should("have.id", "code-2");
  cy.get(".code").eq(1).type(1);
  cy.wait(100); // wait for 100ms for the focus to move to the next input field
  cy.focused().should("have.id", "code-3");
  // ...
}
