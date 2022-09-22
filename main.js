const result = document.querySelector('.get-gender');
const firstName = document.querySelector('.name');
const display = document.querySelector('.gender');
const serverUrl = 'https://api.genderize.io';
const url = `${serverUrl}?name=${firstName.value}`;

result.addEventListener('click', async function(){
    const promise = await fetch(url);
    const commits = await promise.json();

    display.innerHTML = `${firstName.value} is ${commits.gender}`;
});