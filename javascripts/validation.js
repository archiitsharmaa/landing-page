//dummy data in the system
let data = [{
    name :'Archit Sharma',
    username : 'archit04',
    password : '*snowman04',
    role : 'admin'
},
{
    name :'archit1',
    username : 'archit1',
    password : '*snowman04',
    role : 'admin'
}
];

//sending dummy data to local storage
localStorage.setItem('MobilezDatabase', JSON.stringify(data));


//function to validate the siging of the user and admin
function signupValidation(e, role) {

    //stops default nature of the form
    e.preventDefault();    
    

    //console.log(role);
    
    //getting information from the form input
    let password = document.forms["signup"]["password-input"].value;
    let username = document.forms["signup"]["username-input"].value;
    let name = document.forms["signup"]["name-input"].value;

    //setting regulaar expression patterns
    var passwordRegularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var nameRegularExpression = /^[\\a-zA-z .'-]+$/;

    //validating name if false exists with the following message
    if(!nameRegularExpression.test(name)) {
        alert("Name can only contain letters and space");
        return false;
    }

    //validating password if false exists with the following message
    if(!passwordRegularExpression.test(password)) {
        alert("Please insert password which contains atleast one digit and one special character and must have minimum 8 and maximum 16 characters.");
        return false;
    }

    // updates the user in the database
    database({name, username, password},data, role);

  
  }

//fucntion to validate the login of user or admin
function loginvalidation(e, role){

    //prevents dedault behaviour
    e.preventDefault();

    //gets input from the form
    let inputPassword = document.forms["login"]["password-input"].value;
    let inputUsername = document.forms["login"]["username-input"].value;
    
    //gets data from the local data storage
    data = JSON.parse(localStorage.getItem('MobilezDatabase'));
    
    //checks the uername and password entered in the local data
    let processAdmins = data.filter((ele) => {return ele.role === role && (ele.username === inputUsername && ele.password === inputPassword)});

    //if there is a match
    if(processAdmins.length == 1){

        //set temp variables in local storage to be accessed
        localStorage.setItem('FullName', processAdmins[0].name);
        localStorage.setItem('Username', processAdmins[0].username);
        localStorage.setItem('Role', processAdmins[0].role);
        localStorage.setItem('Password', processAdmins[0].password);

        //if the passed role is admin redirects you to admin dashboard
        if(role == 'admin'){
            window.location.href = 'adminDashboard.html';
        }

        //if the passed role is user redirects you to user dashboard
        if(role == 'user'){
            window.location.href = 'userdashboard.html';
        }
               
    }

    else{
        alert("Wrong username or password");
    }

}


//function to logout the user / admin
function logoutUser(){

    //gets role for re-routing path
    let role = localStorage.getItem('Role');

    //destroying the local variable / credentails of the user
    localStorage.removeItem('FullName');
    localStorage.removeItem('Username');
    localStorage.removeItem('Role');
    localStorage.removeItem('Password');

    //routes you too index page when logout if you admin
    if(role == 'admin'){
    window.location.href = 'index.html';
    alert('You have been logged out');
    }

    //routes to to uerform when logiut if you user
    if(role == 'user'){
        window.location.href = 'userform.html';
        alert('You have been logged out');
    }  
    
}
