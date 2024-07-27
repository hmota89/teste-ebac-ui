/// <reference types="cypress"/>

import produtosPages from "../../support/page-objects/produtos.pages";

describe('Funcionalidade: produtos ', () => {

    beforeEach(() => {
        produtosPages.visitarUrl()
    });

    it('Deve seçecionar um produto da lista', () => {
       produtosPages.buscarProdutoLista('Ajax Full-Zip Sweatshirt')
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')
    });
    
    it('Deve busca um produto com sucesso', () => {
        let produto = 'Zeppelin Yoga Pant'
        produtosPages.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)       
    });

    it('Deve visitar a página do produto', () => {
        produtosPages.visitarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant') 
    });

    it('Deve adicionar ao produto ao carrinho', () => {
        let qtd = 3
        produtosPages.buscarProduto('Ajax Full-Zip Sweatshirt')
        produtosPages.addProdutoCarrinho('M', 'Blue', qtd)
        cy.get('.woocommerce-message').should('contain', '“Ajax Full-Zip Sweatshirt” foi adicionado no seu carrinho.')
    });

    it.only('Deve adicionar ao produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados =>{
            produtosPages.buscarProduto(dados[0].nomeProduto)
            produtosPages.addProdutoCarrinho(
            dados[0].tamanho, 
            dados[0].cor, 
            dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })
        
    });
});