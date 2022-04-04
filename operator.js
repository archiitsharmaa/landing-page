
class Operator{
    constructor(name, username, password, role){

        this.name = name;
        this.username = username;
        this.password = password;
        this.role = role;
    }

}

function database (payload, data){

    if(data.some((ele)=>{return ele.username==payload.username})){
        window.alert("User already exists.");
    }

else{
    let person = new Operator(payload.name, payload.username, payload.password, 'user');
    data.push(person);

    // to clear the form for the next entries
    document.forms[0].reset(); 

    //saving to localStorage
    localStorage.setItem('MobilezDatabase', JSON.stringify(data) );
    alert('User Added');

}
}