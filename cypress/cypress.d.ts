/// <reference types="cypress" />

// You can add your custom type definitions here

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      dataCy(value: string): Chainable<Element>;
      verifyPage(url: string): void;
    }
  }
  