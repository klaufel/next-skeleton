import { URLS } from '../../fixtures/urls'

describe('App', () => {
  beforeEach(() => cy.visit(URLS.HOME))

  it('should navigate to the home', () => {
    cy.get('h1').should('be.visible')
  })
})
