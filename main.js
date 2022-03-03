const submitBtn = document.querySelector('.button');
const inputName = document.querySelector('.input');
const outputName = document.querySelector('.gender');

const serverUrl = 'https://api.genderize.io';

submitBtn.addEventListener('click', async function() {
    const firstName = inputName.value;
    
    const url = `${serverUrl}?name=${firstName}`;
    let response = await fetch(url);
    
    let json = await response.json();
    
    outputName.textContent = `${firstName}` + ' - ' + `${json.gender}`;
    
});