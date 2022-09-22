const result = document.querySelector('.result');
const firstName = document.querySelector('.name');
const display = document.querySelector('.gender');
const serverUrl = 'https://api.genderize.io';

result.addEventListener('click', async function(event){
    event.preventDefault();
    const url = `${serverUrl}?name=${firstName.value}`;
    const promise = await fetch(url);
    const commits = await promise.json();
    display.innerHTML = `${firstName.value} is ${commits.gender}`;
    firstName.value = '';
});