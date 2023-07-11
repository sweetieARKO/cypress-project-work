it("test sign-in",()=>{
cy.viewport(1111, 755);
cy.visit("https://ghmade.com/market")
cy.get("#landingpage_login_btn").click()
cy.get("#InputEmail").type('arkoemilia563@gmail.com')
cy.get('#InputPassword1').type('Abigail123&ARKO')
cy.get('#signin_button').click()
})