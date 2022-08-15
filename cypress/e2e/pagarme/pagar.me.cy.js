import { HomePage } from '../PageObjects/home-page'

describe('Acessando as funcionalidades do site', () => {
  const homepage = new HomePage()

  beforeEach(() => {
    homepage.navigateToHome()
    homepage.acceptCookies()
  });

  it('Acessar aumente suas vendas', () => {
    homepage.aumentarVendas()
    homepage.cadastrarAgora()
  });
})
