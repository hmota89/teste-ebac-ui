/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('hmota1212@ebac.com.br')
        cy.get('#password').type('teste@123456')
        cy.get('.woocommerce-form > .button').click()
       
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, hmota1212 (não é hmota1212? Sair)')
    })


    it('Deve exibir uma mensagem de erro ao inserir usuário invalido', () => {
        cy.get('#username').type('hmota1212@.com.br')
        cy.get('#password').type('teste@123456')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'O usuário hmota1212@.com.br não está registrado neste site.')
        cy.get('.woocommerce-error').should('exist')
    });

    it.only('Deve exibir uma mensagem de erro de senha inválida', () => {
        cy.get('#username').type('hmota1212@ebac.com.br')
        cy.get('#password').type('teste@')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail hmota1212@ebac.com.br está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')



    });

})