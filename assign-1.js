let users = [
{

'name':'amar',
'age' : 20,
'phone': 9988776655

},
{
'name':'samar',
'age' : 25,
'phone': 77665555

},
{
    'name':'sunny',
    'age' : 25,
    'phone': 1122112
    
},


]


for(getdata of users){

//document.write(getdata.name);
}

const myarr = users.map((myval, index) => {
    return `<tr><td>${index}</td><td>${myval.name}</td> <td>${myval.age}</td> <td>${myval.phone}</td></tr>`;
  
} );

const myarr_2 = users.map((myval, index) => {
    return `His name is ${myval.name}, he is ${myval.age} years old`;
  
} );

const data = myarr.join('');
document.getElementById('showtheresult').innerHTML=data

document.getElementById('showtheresult-2').innerHTML=myarr_2[1]
