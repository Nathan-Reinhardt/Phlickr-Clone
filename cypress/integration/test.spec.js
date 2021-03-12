describe('Phlickr Test',function(){
    
    // test for signing up a new user
    it('Sign Up Test',function(){
        cy.visit('https://phlickr-clone.herokuapp.com/');
        cy.get('a').contains('Sign Up').click();
        cy.get('input[placeholder="First name"]').type(randomNames());
        cy.get('input[placeholder="Last name"]').type(randomNames());
        cy.get('input[placeholder="Your age"]').type(numRandom());
        cy.get('input[placeholder="Email address"]').type(randomNames() + '@gmail.com');
        cy.get('input[placeholder="Password"]').type(randomNames() + '2144');
        cy.get('button').contains('Sign up').click();
        cy.contains('Log Out').should('exist');
    });

    // test for signing up, logging out, and logging in a new user
    it('Log Out / Log In / Test',function(){
        var email = randomNames() + '@gmail.com';
        var password = randomNames() + '2144';

        cy.visit('https://phlickr-clone.herokuapp.com/');
        cy.get('a').contains('Sign Up').click();
        cy.get('input[placeholder="First name"]').type(randomNames());
        cy.get('input[placeholder="Last name"]').type(randomNames());
        cy.get('input[placeholder="Your age"]').type(numRandom());
        cy.get('input[placeholder="Email address"]').type(email);
        cy.get('input[placeholder="Password"]').type(password);
        cy.get('button').contains('Sign up').click();
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

    // helper function to create a random generated name
    function randomNames() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 8; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };

    // helper function to create a random generated age
    function numRandom() {
        var num = 0;
        num = Math.floor((80 * Math.random())) + 14;
        if (num > 80) {
            num = 80;
        };
        return num;
    };
});