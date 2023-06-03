describe('Selectable Test', () => {
  it('should highlight selected numbers', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');




    // Darbibas
    // ii. Click - Make Appointment
    cy.get("#btn-make-appointment").click();


   // iii. Set username and password fields with the demo account credentials

   cy.get("#txt-username").type("John Doe");

   cy.get("#txt-password").type("ThisIsNotAPassword");

  // iv. Click - Login 
  cy.get("#btn-login").click();
  
  // v. Click - Menu/Stack/Burger icon
  cy.get("i.fa.fa-bars").click();
    // vi. Validate that the sidebar is active
  cy.get("i.fa.fa-chevron-up.fa-fw.fa-1x").click();
    
  // vii. Click - History 
  cy.get("a[href='history.php#history'][onclick*='menu-close']").click();

  //Validacija
    // vi. Validate that the sidebar is active
  cy.get("a[href='history.php#history']").contains("History").should("have.attr", "onclick", "$('#menu-close').click();");
   
  // viii. Validate that - No appointment - is visible
  cy.get("div.text-vertical-center a#btn-make-appointment[href='./index.php#appointment']").should("not.contain", "No appointment");



  });
});