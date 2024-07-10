/// <reference types="cypress"/>

import produtosPages from "../../support/page-objects/produtos.pages";

describe('Funcionalidade: produtos ', () => {

    beforeEach(() => {
        produtosPages.visitarUrl()
    });

    it('Deve seçecionar um produto da lista', () => {
       produtosPages.buscarProdutoLista('Abominable Hoodie')
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')
    });
    
    it.only('Deve busca um produto com sucesso', () => {
        produtosPages.buscarProduto('Zeppelin Yoga Pant')       
    });

    it('Deve visitar a página do produto', () => {
        
    });

    it('Deve adicionar ao produto ao carrinho', () => {
        
    });
});