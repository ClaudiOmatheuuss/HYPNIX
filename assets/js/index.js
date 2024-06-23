/* 
    esse documento script serve para identificar
    se a pessoa já tem um registro no site
    pelo local storage
    caso sim, exibir um pop-up e parar de exibir o botão login/cadastro
*/
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se o usuário já está registrado
    if (localStorage.getItem('registeredUser')) {
        // Exibir o pop-up
        document.getElementById('popup').style.display = 'block'
        document.getElementById('overlay').style.display = 'block'

        // Esconder o botão de login/cadastro
        document.getElementById('sign_in_btn').style.display = 'none'
    }

    document.getElementById('deleteUser').addEventListener('click', function() {
        localStorage.clear("registeredUser")
        document.getElementById('popup').style.display = 'none'
        document.getElementById('overlay').style.display = 'none'
        document.getElementById('popup_deleted').style.display = 'block'
        document.getElementById('overlay_deleted').style.display = 'block'
        document.getElementById('sign_in_btn').style.display = 'block'
    })
    
    document.getElementById('closePopup').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none'
        document.getElementById('overlay').style.display = 'none'
    })
    document.getElementById('closePopup_deleted').addEventListener('click', function() {
        document.getElementById('popup_deleted').style.display = 'none'
        document.getElementById('overlay_deleted').style.display = 'none'
    })
})