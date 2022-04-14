

document.getElementById('submitform').addEventListener('click', () => {

let uname = document.getElementById('uname').value;

let email = document.getElementById('email').value;
let phone = document.getElementById('phone').value;
let pass = document.getElementById('pass').value;


if(uname == ""){

   alert("Please enter your name");

}
else if(email == ""){

    alert("Please enter your email");

}

else if(phone == ""){

     alert("Please enter your phone");

}
else if(pass == ""){

     alert("Please enter your password");

}
else{
   let url = "http://localhost:3003/clients";
   const mydata = {
    uname:uname,
    email:email,
    phone:phone,
    password:pass
    }
    //console.log(mydata);
   const params = {
    method:'POST',
    headers : {
        'content-type':'application/json'

    },
    body: JSON.stringify(mydata)
}
   fetch(url,params).then((res) => {
    return res.json();
   })
   .then((data) => {
       alert('Record added')
       //console.log(data);
       localStorage.setItem("usersdata", JSON.stringify(mydata));
       window.location.replace("/crud-js/login.html");
       
      
   })
   .catch((err) => {alert('error');})
}

});
const sessiondata = JSON.parse(localStorage.getItem("usersdata"));
 if(sessiondata.uname) {
    window.location.replace("/crud-js/login.html");
     
 }

