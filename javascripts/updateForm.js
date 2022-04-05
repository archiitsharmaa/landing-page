// updates the data of the user/admin
function updateForm(e){

    //prevents basic nature
    e.preventDefault();

    //getting input data 
    let inputPassword = document.forms["update-Form"]["password-input"].value;
    let inputUsername = document.forms["update-Form"]["username-input"].value;
    let inputname = document.forms["update-Form"]["name-input"].value;

    //fetching data from the local storage
    data = JSON.parse(localStorage.getItem('MobilezDatabase'));

    //cehcks for the current user/admin or user selected by admin
    let processAdmins = data.filter((ele) => {return ele.username === localStorage.getItem('Username') && ele.password === localStorage.getItem('Password')});

    //if match is found
    if(processAdmins.length == 1){

        for (var i = 0; i < data.length; i++) {
            //look for match with name
            if(localStorage.getItem('Username') === data[i].username){  
                //update
                data[i].username = inputUsername;  
                data[i].password = inputPassword;
                data[i].name = inputname;
                //exist, seach is over
                break;
            }
        }

        //updates the updated data to local storage
        localStorage.setItem("MobilezDatabase", JSON.stringify(data));
        alert("updated values");
    }

    //if some error occured
    else{
        alert("Some error occured while updating");
    }

}
