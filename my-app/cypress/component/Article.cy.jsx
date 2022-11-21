/* eslint-disable no-undef */
import React from 'react';
import Article from '../../src/components/Article/Article';
import { mount } from '@cypress/react';

describe('Article component', () => {
  beforeEach(() => {
    mount(<Article />);
  });

  it('should contain Headline', () => {
    cy.get('h1')
      .should('have.text', 'Headline');
  });

  it('should contain 5 paragraphs', () => {
    cy.get('p.article__paragraph')
      .should('have.length', 5);
  });

  it('should have correct styles', () => {
    cy.get('.article')
      .should('have.css', 'max-width', '800px');

    cy.get('.article__paragraph')
      .eq(0)
      .should('have.css', 'color', 'rgb(51, 51, 51)');
  });

  it('should have styles added with media', () => {
    cy.get('.article')
      .should('have.css', 'padding', '44.8px')
      .and('have.css', 'margin', '78.4px 0px 0px');
  });
});