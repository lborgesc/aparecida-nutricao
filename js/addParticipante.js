let adicionar = document.querySelector('.botao')


    adicionar.addEventListener('click', e => {
        e.preventDefault();

        let pacientes = document.querySelector('#formulario')
        adicionarPaciente(pacientes)
        

        
        function adicionarPaciente(pacientes) {

            let paciente = {
                nome: pacientes.nome.value,
                peso: pacientes.peso.value,
                altura: pacientes.altura.value,
                gordura: pacientes.gordura.value,
                imc: imc(pacientes.peso.value, pacientes.altura.value)
            }

            let erro = validaPaciente(paciente);
            if (erro.length > 0) {
                return liErro(erro);
            }
            criaElemnto(paciente);
        }

        function validaPaciente(paciente){
            let error = [];
            
            if (paciente.nome === '') {
                error.push('Nome não pode ser em branco')
            }

            if (paciente.peso === '') {
                error.push('Peso não pode ser em branco')
            }
            if (paciente.altura === '') {
                error.push('Altura não pode ser em branco')
            }
            if (paciente.gordura === '') {
                error.push('Gordura não pode ser em branco')
            }

            if (!validaPeso(paciente.peso)) {
                error.push('Peso invalído!');
            }

            if (!validaAltura(paciente.altura)) {
                error.push('Altura inválida!')
            }


            return error
        }

        function liErro(erro){
            let mensagem = document.querySelector('#error')
            mensagem.innerHTML = "";

            erro.forEach((error) => {
                let li = document.createElement('li');
                li.textContent = error
                mensagem.appendChild(li)
            });
        }

        function criaElemnto(paciente){

            let pacienteTr = document.createElement('tr');
            pacienteTr.classList.add('paciente')
             
            pacienteTr.appendChild(criaTd(paciente,"info-nome"));
            pacienteTr.appendChild(criaTd(paciente, 'info-peso'));
            pacienteTr.appendChild(criaTd(paciente, 'info-altura'));
            pacienteTr.appendChild(criaTd(paciente, 'info-gordura'));
            pacienteTr.appendChild(criaTd(paciente, 'info-imc'));
 
            addTabela(pacienteTr);
            pacientes.reset();
            let ul = document.querySelector('#error')
            ul.innerHTML = "";
        }

        function criaTd(dados, classe){
            let td = document.createElement('td');
            td.textContent = dados;
            td.classList.add(classe)
            return td
        }

        function addTabela(pacienteTr){
            let tabela = document.querySelector('#tabela-pacientes')
            tabela.appendChild(pacienteTr);
        }

         
     })


