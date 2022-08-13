describe('feature 01', () => {
  it('Acessar o site', () => {
    cy.visit('https://pagar.me')
    cy.contains('Aceitar Todos').click()
  })
})