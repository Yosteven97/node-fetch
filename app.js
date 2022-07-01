import fetch from 'node-fetch';

//fetch json from app using node-fetch
fetch('http://worldtimeapi.org/api/timezone/Asia/Jakarta')
    .then((res) => res.json())
    .then((json) => console.log(json))