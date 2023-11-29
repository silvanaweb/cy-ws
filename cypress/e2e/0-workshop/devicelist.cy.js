/// <reference types="cypress" />

context('PAYG', () => {
  beforeEach(() => {
    cy.visit('https://www.vodafone.co.uk/mobile/phones/pay-as-you-go')
    cy.get('#onetrust-accept-btn-handler').then(($el) => {
      if ($el.length) {
      // Element exists, do something
        $el.trigger('click')
      }
      });
  })

  it('filter by samsung logo', () => {

  })

  it('got to the details page of the first device', () => {

    // assert that the title is loading
  })

})
