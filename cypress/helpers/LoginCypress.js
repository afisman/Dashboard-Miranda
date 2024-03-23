export const loginCypress = () => {
    cy.get('input[name = email]');
    cy.get('input[name = password]');
    cy.get('button[type=submit]').click();
}