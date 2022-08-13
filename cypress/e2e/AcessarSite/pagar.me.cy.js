describe('Acessar funcionalidades do site', () => {
  beforeEach(() => {
    cy.exec('npm cache clear --force')
    cy.visit('/')
  })

  it('Aceitar termos de aceite', () => {
    cy.contains('Aceitar Todos').should('be.visible').click()
  })

  it('Acessar aumente suas vendas', () => {
    cy.contains('Aumente suas vendas').should('be.visible')
  })
})
