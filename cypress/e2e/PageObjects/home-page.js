export class HomePage {

    navigateToHome() {
        cy
            .exec('npm cache clear --force')
        cy
            .visit('/')
    }

    acceptCookies() {
        cy
          .contains('Aceitar Todos')
          .should('be.visible')
          .click()
    }

    aumentarVendas() {
        cy
        .get('button')
        .eq(2)
        .should('be.visible')
        .contains('Aumente suas vendas')
        .click()
    }

    cadastrarAgora() {
        cy
        .get('button')
        .eq(2)
        .should('be.visible')
        .should('contain', 'Cadastrar agora')
    }
};