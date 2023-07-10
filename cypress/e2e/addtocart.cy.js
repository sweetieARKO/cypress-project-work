describe("Add to cart", ()=>{
it("test add to cart", ()=>{    
    cy.viewport(1111, 755);
    cy.visit("https://ghmade.com/market")
    cy.get(":nth-child(1) > #product-card > #cart-button > .fe").click()
    cy.get(":nth-child(3) > #product-card > #cart-button").click()
    cy.get(":nth-child(2) > #product-card > #cart-button").click()
    cy.get(":nth-child(5) > #product-card > #cart-button").click()
    cy.get(".dropdown > .nav-link").click()
    cy.get(".viewemptycart").click()
})
})