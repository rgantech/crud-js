
const sessiondata = JSON.parse(localStorage.getItem("usersdata"));
if(!sessiondata) {
     alert('You are not logged in');
    window.location.href = "/crud-js/login.html";
 }
const dashboard = () => {

    const url = "http://localhost:3003/clients";
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {

        console.log(data);
        const myarr = data.map((myval, index) => {
            

      
            const tabledata =  `<tr><td>${myval.uname}</td> <td>${myval.email}</td>
             <td>${myval.phone}</td><td><button  onclick="editRecord(${myval.id}, '${myval.uname}', '${myval.email}', ${myval.phone})">Edit</button>
            <button onclick="delRecord(${myval.id})">Delete</button></td>
            </tr>`;

            
         
            
            return document.getElementById('showtheresult').innerHTML += tabledata;

        });
        
    })


}

const editRecord = (id,name,email,phone) => {
document.getElementById('myid').innerHTML = id;
document.getElementById('update_uname').value = name;
document.getElementById('update_email').value = email;
document.getElementById('update_phone').value = phone;

var modal = document.getElementById("myModal");
modal.style.display = "block";
}

const closemodal = () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

}

const delRecord = (id) => {
fetch(`http://localhost:3003/clients/${id}`, {
  method: 'DELETE',
})
.then(res => res.json())
.then((data) => alert('Record deleted'))
}

const updateForm = () => {

    
let uid = document.getElementById('myid').innerHTML;
let name_update = document.getElementById('update_uname').value;
let email_update = document.getElementById('update_email').value;
let phone_update = document.getElementById('update_phone').value;

const mydata = {
    uname:name_update,
    email:email_update,
    phone:phone_update,
    }
    console.log(mydata);
   const params = {
    method:'PUT',
    headers : {
        'content-type':'application/json'

    },
    body: JSON.stringify(mydata)
}
   fetch(`http://localhost:3003/clients/${uid}`,params).then((res) => {
    return res.json();
   })
   .then((data) => {
       alert('Record updated');
       
       dashboard();
       
      
   })
   .catch((err) => {alert('error');})

    
}

dashboard()

