
let paciente = document.querySelectorAll('.paciente');

for(let i = 0; i < paciente.length; i++){
    let peso = paciente[i].querySelector('.info-peso').innerHTML;
    let altura = paciente[i].querySelector('.info-altura').innerHTML;
    let tdImc = paciente[i].querySelector('.info-imc');

    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);

    if(!pesoValido){
        tdImc.textContent = 'Peso inválido'
        paciente[i].classList.add('invalido')
    }

    if(!alturaValida){
        tdImc.textContent = 'Altura inválida'
        paciente[i].classList.add('invalido')
    }

    if (pesoValido && alturaValida) {
        tdImc.innerHTML = imc(peso, altura)
    }
        
}

function imc(peso, altura){
    let imc = peso / (altura * altura)

    return imc.toFixed(2)
}

function validaPeso(peso){
    if (peso >= 0 && peso <= 1000) {
        return true;
    }else{
        return false
    }
}

function validaAltura(altura){
    if (altura >= 0 && altura <= 3.00) {
        return true
    } else {
        return false
    }
}
