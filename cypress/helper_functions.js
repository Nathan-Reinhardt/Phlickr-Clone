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

// helper function to sign up a new user test
function signUp(email, password) {
    cy.visit('https://phlickr-clone.herokuapp.com/');
    cy.get('a').contains('Sign Up').click();
    cy.get('input[placeholder="First name"]').type(randomNames());
    cy.get('input[placeholder="Last name"]').type(randomNames());
    cy.get('input[placeholder="Your age"]').type(numRandom());
    cy.get('input[placeholder="Email address"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);
    cy.get('button').contains('Sign up').click();
    cy.contains('Log Out').should('exist');
}

export function randomNames();
export function signUp();