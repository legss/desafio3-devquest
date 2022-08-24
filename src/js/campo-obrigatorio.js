const inputs = document.querySelectorAll('.input')
const form = document.getElementById('form')
console.log(form)

const submit = document.getElementById('submit')

    form.addEventListener("submit", function(evento) {
        evento.preventDefault();
        inputs.forEach(input => {
            if (input.value == "") {
                input.classList.add('red-border')
            } else {
                input.classList.remove('red-border')
                input.classList.add('green-border')
            }
        });
    
    })


  

