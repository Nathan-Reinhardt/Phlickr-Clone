import { randomNames } from '../helper_functions';
import { signUp } from '../helper_functions';

describe('Phlickr Test',function(){
    
    var email = randomNames() + '@gmail.com';
    var password = randomNames() + '2144';
    
    // test for signing up a new user
    it('Sign Up Test',function(){
        signUp(email, password);
    });

    // test for signing up, logging out, and logging in a new user
    it('Log Out / Log In / Test',function(){
        signUp(email, password);
        cy.wait(2000);
        cy.get('[data-testid=logoutbtn]').click();
        cy.wait(2000);
        cy.get('[data-testid=loginbtn]').click();
        cy.get('input[placeholder="Email address"]').type(email);
        cy.get('input[placeholder="Password"]').type(password);
        cy.get('button').contains('Sign in').click();
        cy.contains('Log Out').should('exist');
    });

    // test for demo user login and demo user profile page working
    it('Demo User Test',function(){
        cy.visit('https://phlickr-clone.herokuapp.com/');
        cy.get('[data-testid=splashdemobtn]').click();
        cy.contains('Log Out').should('exist');
        cy.get('[data-testid=user-profile-link]').click();
        cy.wait(2000);
        cy.contains('Photostream').should('exist');
    });
});