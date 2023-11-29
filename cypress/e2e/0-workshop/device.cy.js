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

    // select colour and assert that has been selected

  })

  it('shows plans', () => {
    // assert that plans are showing and how many of them
  })

})
