
const sessiondata = JSON.parse(localStorage.getItem("usersdata"));
if(!sessiondata) {
     alert('You are not logged in');
    window.location.href = "/login.html";
 }
const dashboard = () => {

    const url = "http://localhost:3003/clients";
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {

        console.log(data);
        const myarr = data.map((myval, index) => {
            

      
            const tabledata =  `<tr><td>${myval.uname}</td> <td>${myval.email}</td>
             <td>${myval.phone}</td><td><button onclick="editRecord(${myval.id})">Edit</button>
            <button onclick="delRecord(${myval.id})">Delete</button></td>
            </tr>`;
         
            
            return document.getElementById('showtheresult').innerHTML += tabledata;

        });
        
    })


}

const editRecord = (id) => {
    alert('id is:' + id);
}

dashboard()

