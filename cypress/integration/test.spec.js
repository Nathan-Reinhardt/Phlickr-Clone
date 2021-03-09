describe('Test',function(){
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

    });

    // helper function to create a random generated name
    function randomNames() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 8; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    function numRandom() {
        var num = 0;
        num = (80 * Math.random()) + 14;
        if (num > 80) {
            num = 80;
        }
        return num;
    }
});