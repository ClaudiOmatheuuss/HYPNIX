// esse documento script serve para meio que cadastro a pessoa
document.getElementById('formulario_cadastro').addEventListener('submit', async function(event) {
    event.preventDefault() 

    try {
        await validarFormulario() 

        const senha = document.getElementById('password').value
        const email = document.getElementById('email').value

        const registeredUser = {
            senha: senha,
            email: email
        }

        localStorage.setItem('registeredUser', JSON.stringify(registeredUser))
        document.getElementById('popup').style.display = 'block'
        document.getElementById('overlay').style.display = 'block'

        document.getElementById('closePopup').addEventListener('click', function() {
            document.getElementById('popup').style.display = 'none'
            document.getElementById('overlay').style.display = 'none'
            window.location.href = '../HYPNIX/index.html'
        })
    } catch (error) {
        alert(error.message)
    }
})

async function validarFormulario() {
    return new Promise((resolve, reject) => {
        const senha = document.getElementById('password').value
        const email = document.getElementById('email').value

        setTimeout(() => {
            if (senha.trim() === '') {
                reject(new Error('O campo senha não pode estar vazio.'))
            } else if (email.trim() === '') {
                reject(new Error('O campo Email não pode estar vazio.'))
            } else if (!validarEmail(email)) {
                reject(new Error('O Email inserido não é válido.'))
            } else {
                resolve()
            }
        }, 1000) 
    })
}

function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}