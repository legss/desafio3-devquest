const inputs = document.querySelectorAll('.input')
const form = document.getElementById('form')
const obrigatorios = document.querySelectorAll('.obrigatorio')
const submit = document.getElementById('submit')


    form.addEventListener("submit", function(evento) {
        inputs.forEach(input => {
            if (input.value == "") {
                evento.preventDefault();
                input.classList.remove('green-border')
                input.classList.add('red-border')
                input.nextElementSibling.classList.add('mostrar')

            } else {
                input.nextElementSibling.classList.remove('mostrar')
                input.classList.remove('red-border')
                input.classList.add('green-border')
            }   

        });
    
    })

