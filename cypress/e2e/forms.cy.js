import { loginCypress } from "../helpers/LoginCypress";

describe('Forms to add new items to redux store', () => {

    it('Creates new booking and adds it to store', () => {
        cy.visit('/');
        loginCypress();
        cy.get('#sidebar_button').click();
        cy.get('#nav_Bookings').click();
        cy.get('#new_booking_button').click();

        cy.get('input[name=name]').type('Alef Tau');
        cy.get('input[name=check_in]').type('2024-03-16');
        cy.get('input[name=check_out]').type('2024-03-19');
        cy.get('input[name=hour_check_in]').type('17:00');
        cy.get('input[name=hour_check_out]').type('12:00');
        cy.get('textarea[name=special_request]').type('I need a minibar fully stocked with booze and a hooker on the side');

        cy.get('button[type=submit]').click().then(() => {
            cy.window()
                .its("store")
                .invoke("getState")
                .its("bookings")
                .its("bookings")
                .should("have.length", 13);
        });
    })

    it('Creates new room and adds it to store', () => {
        cy.visit('/');
        loginCypress();
        cy.get('#sidebar_button').click();
        cy.get('#nav_Rooms').click();
        cy.get('#new_room_button').click();

        cy.get('input[name=room_number]').type('Room 420');
        cy.get('textarea[name=photos]').type('https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        cy.get('input[name=description]').type('Double room with minibar and terrace');
        cy.get('input[name=rate]').type('170');
        cy.get('input[name=discount]').type('15');
        cy.get('input[name=cancelation]').type('Invalid date');
        cy.get('textarea[name=amenities]').type('Minibar\nterrace\ndouble bed');


        cy.get('button[type=submit]').click().then(() => {
            cy.window()
                .its("store")
                .invoke("getState")
                .its("rooms")
                .its("rooms")
                .should("have.length", 13);
        });
    })

    it('Creates new user and adds it to store', () => {
        cy.visit('/');
        loginCypress();
        cy.get('#sidebar_button').click();
        cy.get('#nav_Concierge').click();
        cy.get('#new_user_button').click();

        cy.get('input[name=full_name]').type('Alejandro Fisman');
        cy.get('input[name=email]').type('alejandro@mail.com');
        cy.get('input[name=contact]').type('6661162');
        cy.get('input[name=start_date]').type('2015-11-11');
        cy.get('select[name=position]').type('Manager');
        cy.get('textarea[name=description]').type('A ver human human working as a manager');


        cy.get('button[type=submit]').click().then(() => {
            cy.window()
                .its("store")
                .invoke("getState")
                .its("users")
                .its("users")
                .should("have.length", 13);
        });
    })
})