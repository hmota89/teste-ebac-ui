/// <reference types="cypress"/>

describe('Funcionalidade: produtos ', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve seçecionar um produto da lista', () => {
        cy.get('.products > .row')
        //.first()
        //.last()
        //.eq(2)
        .contains('Argus All-Weather Tank')
        .click()
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')
        
    });
});