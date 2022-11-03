import Chance from 'chance'
const chance = new Chance()

describe('empty spec', () => {
  const email = chance.email()
  const pass = 'validPassword'

  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})