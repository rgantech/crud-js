const timer = () => {
    let upcoming = new Date("April 08, 2022 00:00:00")
    let today_date = new Date();
    let timesis =  today_date.getSeconds();
    document.getElementById('trytimer').innerHTML = timesis;
}

const smalltimer = setInterval(() => {
    timer();
}, 1000);


