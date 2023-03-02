/* global Cypress */
import { DATA } from '../fixtures/data'

beforeEach(() => cy.acceptCookieConsents())

Cypress.Commands.add('acceptCookieConsents', () => {
  cy.setCookie(DATA.COOKIE.CMP_CONSENTS.NAME, DATA.COOKIE.CMP_CONSENTS.VALUE)
  cy.setCookie(DATA.COOKIE.CMP_MODAL.NAME, DATA.COOKIE.CMP_MODAL.VALUE)
})
