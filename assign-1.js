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

const myarr_name = users.map((myval) => {
    return `<tr><td>${myval.name}</td> <td>${myval.age}</td> <td>${myval.phone}</td></tr>`;
  
} );

const data = myarr_name.join('');
document.getElementById('showtheresult').innerHTML=data
