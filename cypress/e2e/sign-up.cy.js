it("test sign-up",()=>{
cy.viewport(1111,755);
cy.visit("https://ghmade.com/market")
cy.get('[href="/auth/signup"]').click()
cy.get('#InputEmail').type('arkoemilia563@gmail.com')
cy.get('#InputPassword1').type('Abigail123&ARKO')
cy.get('#InputPassword2').type('Abigail123&ARKO')
cy.get('#individual').click()
cy.get('#signup_button').click()
})