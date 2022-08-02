function calcularImc(event) {
    event.preventDefault();
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let img = document.getElementById('principal');

    let imc = peso / (altura * altura).toFixed(2);

    if (imc >= 0 && imc <= 18.5) {
        img.src = 'img/magro.png';
        document.getElementById('box').style.border = '5px solid #5bd9ab';
    } else if (imc >= 18.6 && imc <= 24.9) {
        img.src = 'img/peso-ideal.png';
        document.getElementById('box').style.border = '5px solid #1ba673';
    } else if (imc >= 25 && imc <= 30) {
        img.src = 'img/acima do peso.png';
        document.getElementById('box').style.border = '5px solid #e2a900';
    } else if (imc >= 30.1 && imc <= 35) {
        img.src = 'img/gordo.png';
        document.getElementById('box').style.border = '5px solid #b62e47';
    } else if (imc >= 35.1 && imc <= 99.9) {
        img.src = 'img/obeso.png';
        document.getElementById('box').style.border = '5px solid #830909';
    } else {
        imc;
    }
}

let button = document.getElementById('btn');
button.addEventListener('click', calcularImc);
