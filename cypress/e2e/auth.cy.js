describe('template spec', () => {
    it('Visit home and redirect to login', () => {
        cy.visit('/');
        cy.url().should('include', '/login')
    })

    it('Fill inputs incorrectly and not pass', () => {
        cy.visit('/');
        cy.get('input[name = email]').type('{selectall}alex@email.com');
        cy.get('input[name = password]').type('{selectall}password');
        cy.get('button[type=submit]').click();
        cy.url().should('include', '/login');
    })
    it('Fill inputs incorrectly and pass', () => {
        cy.visit('/');
        cy.get('input[name = email]');
        cy.get('input[name = password]');
        cy.get('button[type=submit]').click();
        cy.url().should('not.include', '/login');
    })
    it('Logs out when clicking button', () => {
        cy.visit('/');
        cy.get('input[name = email]');
        cy.get('input[name = password]');
        cy.get('button[type=submit]').click();
        cy.get('#log_out').click();
        cy.url().should('include', '/login');
    })
})