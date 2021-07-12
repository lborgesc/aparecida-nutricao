function buscaPacientes() {
    let busca = document.querySelector("#buscar-pacientes");
    busca.addEventListener('click', () => {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener("load", function(){
        let pacientes = JSON.parse(xhr.responseText);
        
        pacientes.forEach((paciente) => {
            criaElemnto(paciente);
        });
    });

    xhr.send();
    });
};
buscaPacientes()