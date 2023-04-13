const getNumber = () => {
    fetch('http://localhost:8081/getRandomNumber')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const numberWindow = document.querySelector('.number-window');

        const existingNumber = document.getElementById('number');
        if (existingNumber) {
            existingNumber.remove();
        }

        const number = document.createElement('span');
        number.setAttribute('id', 'number');
        number.innerHTML = data.randomNumber;
        numberWindow.append(number);
    })
}


const button = document.querySelector('.button');
button.addEventListener('click', () => {   
    getNumber();
})