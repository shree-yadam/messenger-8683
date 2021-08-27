describe("Sending Messages", () => {
  it("should visit root", () => {
    cy.visit("/");
    cy.get('.MuiGrid-container > .MuiButtonBase-root > .MuiButton-label').contains('Login').click();
    cy.get(':nth-child(1) > :nth-child(1) > .MuiFormControl-marginNormal > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("thomas");
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("123456");
    cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiButton-label').click();
    cy.get('.MuiBox-root-29 > .MuiBox-root > .makeStyles-username-27').click();
    const curr_date = Date.now();
    cy.get('.MuiInputBase-input:last').type(`TEST SENDING MESSAGE ${curr_date}\r`);
    cy.contains(`TEST SENDING MESSAGE ${curr_date}`).should("exist");
  });
});