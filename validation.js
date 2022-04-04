let data = [{
    name :'archit',
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

function signupValidation(e) {

    e.preventDefault();    
    

    console.log(e);
  
    let password = document.forms["signup"]["password-input"].value;
    let username = document.forms["signup"]["username-input"].value;
    let name = document.forms["signup"]["name-input"].value;
    var passwordRegularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var nameRegularExpression = /^[\\a-zA-z .'-]+$/;


    if(!nameRegularExpression.test(name)) {
        alert("Name can only contain letters and space");
        return false;
    }

    if(!passwordRegularExpression.test(password)) {
        alert("Password should contain atleast one number, one special character and must have 8-16 characters.");
        return false;
    }

    database({name, username, password},data);

  
  }



function adminLoginValidation(e){

    e.preventDefault();

    let inputPassword = document.forms["admin-login"]["password-input"].value;
    let inputUsername = document.forms["admin-login"]["username-input"].value;

    let processAdmins = data.filter((ele) => {return ele.role === 'admin' && (ele.username === inputUsername && ele.password === inputPassword)});
    
    if(processAdmins.length == 1){
        window.location.href = 'adminDashboard.html';
    }

    else{
        alert("Wrong username or password");
    }

}

function userLoginValidation(e){

    e.preventDefault();

    let inputPassword = document.forms["user-login"]["password-input"].value;
    let inputUsername = document.forms["user-login"]["name-input"].value;

    let processAdmins = data.filter((ele) => {return ele.role === 'user' && (ele.username === inputUsername && ele.password === inputPassword)});
    
    if(processAdmins.length == 1){
        window.location.href = 'userdashboard.html';
    }

    else{
        alert("Wrong username or password");
    }

}
