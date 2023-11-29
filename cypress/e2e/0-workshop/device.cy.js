/// <reference types="cypress" />

context('PAYG', () => {
  beforeEach(() => {
    cy.visit('https://www.vodafone.co.uk/mobile/phones/pay-as-you-go/google/pixel-7')
    // cy.visit('https://www.vodafone.co.uk/mobile/phones/pay-as-you-go/google/pixel-7a')
    // cy.visit('https://www.vodafone.co.uk/mobile/phones/pay-as-you-go/google/pixel-8')
    cy.get('#onetrust-accept-btn-handler').then(($el) => {
      if ($el.length) {
      // Element exists, do something
        $el.trigger('click')
      }
      });
  })

  it('select colour', () => {
    cy.contains('Obsidian').click()
    // select colour and assert that has been selected
    cy.get('input[name="device-variant-color"]').check('obsidian')
  })

  it('shows plans', () => {
    cy.contains('Continue to plans').click()
    // assert that plans are showing and how many of them
    cy.get('[data-cy="planCard"]').should('have.length', 5)
  })

})
