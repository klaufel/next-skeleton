declare namespace Cypress {
  interface Chainable {
    /**
     * Command for set all cookie consents and non display CMP modal
     * @example cy.acceptCookieConsents()
     */
    acceptCookieConsents(): Chainable<void>
  }
}
