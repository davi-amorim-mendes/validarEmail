describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/validarEmail/index.html')

    describe('Teste de validacao', () =>
    {
      it('Se o email for valido', () =>
      {
        cy.get('input').type('teste@teste.com')
        cy.get('button').click()
        cy.get('p[name="ok"]').should('contain', 'Formato válido.')
      });
      it('Se o email for invalido', () =>
      {
        cy.get('input').type('testetestecom')
        cy.get('button').click()
        cy.get('p[name="ok"]').should('contain', 'Formato inválido, tente novamente.')
      });
    });
  })
})