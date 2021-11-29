/// <reference types="Cypress" /> 
describe("First test", () => {
  it("Filtering by 'ca' should only bring 4 elements", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/");
    
    cy.get('.search-keyword').type('ca');
    
    cy.wait(2000);
    
    cy.get('.product:visible').should('have.length',4);
    cy.get('.products').find('.product').should('have.length',4);
  });

  it("Clicking on the 2nd product", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/");
    
    cy.get('.search-keyword').type('ca');
    
    cy.wait(2000);
    
    cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
  });
  
  it("Clicking on the cashews product", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/");
    
    cy.get('.search-keyword').type('ca');
    
    cy.wait(2000);
    
    cy.get('.products').find('.product').each(($el,index,$list) => {
      if($el.find('.product-name').text().includes('Cashews')) {
        cy.wrap($el).contains('ADD TO CART').click();
        // $el.find('button').click();
      }
    });
  });

  it("Expect the logo to contain text GREENKART", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/");
    
    cy.get('.brand').then((response)=> {
      cy.log(response.text());
      expect(response.text()).to.eq("GREENKART");
    });

  });
  
  it("Expect the logo to contain text GREENKART using alias", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/");
    
    cy.get('.brand').as('brandLogo');
    cy.get('@brandLogo').should('have.text','GREENKART');

  });
});