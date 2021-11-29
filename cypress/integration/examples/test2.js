/// <reference types="Cypress" /> 
describe("Add items to a kart and checkout items", () => {
  it("checking out cashews item", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/");
    cy.get('.search-keyword').type('ca');
    
    cy.wait(2000);
    
    cy.get('.products').find('.product').each(($el, index, $arr) => {
      if($el.find('.product-name').text().includes("Cashews")) {
        console.log("works");
        // $el.find('button').click();
        cy.wrap($el).find('button').click();
      }
    }).then( ()=> {
       cy.get('.cart-icon > img').click();
       cy.get('.cart-preview > .action-block > button').click();
       cy.contains("Place Order").click();
       cy.url().should('contain', 'country');
    });
  });
});