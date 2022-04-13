
document.getElementById('loginform').addEventListener('click', () => {

let sessiondata = JSON.parse(localStorage.getItem("usersdata"));
let uemail = document.getElementById('email').value;
 if(sessiondata.email == uemail) {

    window.location.replace("/dashboard.html");

 }
 else {
     alert('error! try again!');
 }

});

