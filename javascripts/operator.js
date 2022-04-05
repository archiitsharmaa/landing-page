//operator class
class Operator {
    constructor(name, username, password, role) {

        this.name = name;
        this.username = username;
        this.password = password;
        this.role = role;
    }

}

//fucntion to update the database
function database(payload, data, role) {

    //checks if the username exists or not if exists than exits else operates
    if (data.some((ele) => {
            return ele.username == payload.username
        })) {
        window.alert("User already exists.");


    } else {

        //creates the new operator
        let person = new Operator(payload.name, payload.username, payload.password, role);
        //pushing the new user into database
        data.push(person);

        // to clear the form for the next entries
        document.forms[0].reset();

        //saving to localStorage
        localStorage.setItem('MobilezDatabase', JSON.stringify(data));
        alert('User Added');

    }
}