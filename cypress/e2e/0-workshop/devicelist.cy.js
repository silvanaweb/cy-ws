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
    cy.get('[data-cy="samsungLogoItem"]').click()
    cy.get('[data-component-name="ContainerWithLabel"]').should('have.length', 18)
  })

  it('got to the details page of the first device', () => {
    cy.contains('See details').first().click()
    // assert that the title is loading
    cy.get('[data-component-name="Heading"]').should('contain', '8100')
  })

})
