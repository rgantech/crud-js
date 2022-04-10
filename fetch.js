let btn = document.getElementById('axios-btn');
btn.addEventListener('click',() => {
   
    const url = 'https://jsonplaceholder.typicode.com/users';
    const mydata = {
        age:33,
        name:"rohit",
        gender:"male",
        company:"antech"
        }
    const params = {
        method:'POST',
        headers : {
            'content-type':'application/json'

        },
        body: JSON.stringify(mydata)
    }
 fetch(url,params)
 .then((response) => {
     return response.json();
 })
 .then((data) => {
     console.log(data);
 })

});