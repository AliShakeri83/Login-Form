let loginButtpn = document.getElementById('buttonLogin')
let succsessful = document.querySelector('.succsessful')
let username = document.querySelector('.username')
let usernameEs = document.querySelector('.usernameEs')

loginButtpn.addEventListener('click', (event) => {
    event.preventDefault()
    succsessful.style.display = 'block'
})

username.addEventListener('keyup', (e) => {
    console.log(e);
})