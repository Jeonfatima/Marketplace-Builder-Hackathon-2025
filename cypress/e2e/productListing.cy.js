describe('Marketplace Product Listing', () => {
  it('displays products correctly', () => {
    cy.visit('https://marketplace-builder-hackathon-2025-c7f6.vercel.app/');

    // Wait for a brief period before checking the products
    cy.wait(2000); // Wait for 2 seconds for the page to load

    // Check if at least one product is displayed
    cy.get('.product-item', { timeout: 10000 }).should('have.length.greaterThan', 0);
  });
});