// update the form 
function updateForm(e){

    e.preventDefault();

    //input data 
    let inputPassword = document.forms["update-Form"]["password-input"].value;
    let inputUsername = document.forms["update-Form"]["username-input"].value;
    let inputname = document.forms["update-Form"]["name-input"].value;

    data = JSON.parse(localStorage.getItem('MobilezDatabase'));

    let processAdmins = data.filter((ele) => {return ele.username === localStorage.getItem('Username') && ele.password === localStorage.getItem('Password')});

    if(processAdmins.length == 1){
        var persons = JSON.parse(localStorage.MobilezDatabase);
        for (var i = 0; i < persons.length; i++) {
            if(localStorage.getItem('Username') === persons[i].username){  //look for match with name
                persons[i].username = inputUsername;  //update
                persons[i].password = inputPassword;  //update
                persons[i].name = inputname;  //update
                break;  //exit loop since you found the person
            }
        }
        localStorage.setItem("MobilezDatabase", JSON.stringify(persons));
        alert("updated values");
    }

    else{
        alert("Some error occured while updating");
    }

}
