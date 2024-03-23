import { loginCypress } from "../helpers/LoginCypress";


describe('Navigation for sidebar links template spec', () => {
    it('Navigates to users page', () => {
        cy.visit('/');
        loginCypress();
        cy.get('#sidebar_button').click();
        cy.get('#nav_Concierge').click();
        cy.url().should('include', '/users');
    })

    it('Navigates to bookings page', () => {
        cy.visit('/');
        loginCypress();
        cy.get('#sidebar_button').click();
        cy.get('#nav_Bookings').click();
        cy.url().should('include', '/bookings');
    })

    it('Navigates to rooms page', () => {
        cy.visit('/');
        loginCypress();
        cy.get('#sidebar_button').click();
        cy.get('#nav_Rooms').click();
        cy.url().should('include', '/rooms');
    })

    it('Navigates to contact page', () => {
        cy.visit('/');
        loginCypress();
        cy.get('#sidebar_button').click();
        cy.get('#nav_Contact').click();
        cy.url().should('include', '/contact');
    })
})