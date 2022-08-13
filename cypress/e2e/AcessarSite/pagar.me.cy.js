describe('feature 01', () => {
  it('Acessar o site', () => {
    cy.visit('/')
    cy.contains('Aceitar Todos').click()
  })

  it('Acessar o menu de opções', () => {
    cy.get('.style-module--sideMenuToggle--GZFE-')
  })
})