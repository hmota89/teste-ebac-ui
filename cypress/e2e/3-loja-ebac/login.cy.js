/// <reference types="cypress"/>

const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    before(() => {
        cy.visit('minha-conta')
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

    it('Deve exibir uma mensagem de erro de senha inválida', () => {
        cy.get('#username').type('hmota1212@ebac.com.br')
        cy.get('#password').type('teste@')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail hmota1212@ebac.com.br está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')



    });

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, hmota1212 (não é hmota1212? Sair)')
    });


    it('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuário, { log: false})
            cy.get('#password').type(dados.senha, { log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, hmota1212 (não é hmota1212? Sair)')

        })
    });

    it.only('Deve fazer login com sucesso - usando Comandos customizado', () => {
        cy.login('hmota1212@ebac.com.br' , 'teste@123456')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, hmota1212 (não é hmota1212? Sair)')

    });
    

})