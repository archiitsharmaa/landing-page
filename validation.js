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

localStorage.setItem('MobilezDatabase', JSON.stringify(data));

function signupValidation(e, role) {

    e.preventDefault();    
    

    //console.log(role);
  
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
        alert("Please insert password which contains atleast one digit and one special character and must have minimum 8 and maximum 16 characters.");
        return false;
    }

    database({name, username, password},data, role);

  
  }



function adminLoginValidation(e){

    e.preventDefault();

    let inputPassword = document.forms["admin-login"]["password-input"].value;
    let inputUsername = document.forms["admin-login"]["username-input"].value;
    
    data = JSON.parse(localStorage.getItem('MobilezDatabase'));
    

    let processAdmins = data.filter((ele) => {return ele.role === 'admin' && (ele.username === inputUsername && ele.password === inputPassword)});

    if(processAdmins.length == 1){

        localStorage.setItem('FullName', processAdmins[0].name);
        localStorage.setItem('Username', processAdmins[0].username);
        localStorage.setItem('Role', processAdmins[0].role);
        localStorage.setItem('Password', processAdmins[0].password);
        
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

    data = JSON.parse(localStorage.getItem('MobilezDatabase'));

    let processAdmins = data.filter((ele) => {return ele.role === 'user' && (ele.username === inputUsername && ele.password === inputPassword)});
    
    if(processAdmins.length == 1){
        localStorage.setItem('FullName', processAdmins[0].name);
        localStorage.setItem('Username', processAdmins[0].username);
        localStorage.setItem('Role', processAdmins[0].role);
        localStorage.setItem('Password', processAdmins[0].password);
        window.location.href = 'userdashboard.html';
    }

    else{
        alert("Wrong username or password");
    }

}

function logoutUser(){
    console.log(localStorage.removeItem('FullName'));
    localStorage.removeItem('FullName');
    localStorage.removeItem('Username');
    localStorage.removeItem('Role');
    localStorage.removeItem('Password');
    window.location.href = 'index.html';
    alert('You have been logged out');
}
