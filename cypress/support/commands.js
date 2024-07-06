

Cypress.Commands.add('login', (usuário, senha) => { 
    cy.get('#username').type(usuário)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()

 })

 Cypress.Commands.add('preCadastro' , (email, senha, nome, sobrenome) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('.woocommerce-Button').click()
 })

 Cypress.Commands.add('detalhesConta', (nome, sobrenome, usuário) => {
   cy.get('#account_first_name').type(nome)
   cy.get('#account_last_name').type(sobrenome)
   cy.get('#account_display_name').type(usuário)
   cy.get('.woocommerce-Button').click()
 })