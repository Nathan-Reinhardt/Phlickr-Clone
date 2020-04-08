const spliceEmail = (email) => {
    let result = "";
    let letter = "";
    let count = 0;
    for (let i = 0; i < email.length; i++) {
        letter = email[i];
        if (letter === "@") {
            return result;
        }
        else if (count === 28) {
            result += "...";
            return result;
        }
        else {
            result += letter
            count++;
        }
    }
}