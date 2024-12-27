let loginButtpn = document.getElementById('buttonLogin')
let succsessful = document.querySelector('.succsessful')
let username = document.querySelector('.username')
let usernameEs = document.querySelector('.usernameEs')
let password = document.querySelector('.password')
let passwordEs = document.querySelector('.passwordEs')

loginButtpn.addEventListener('click', (event) => {
    event.preventDefault()
    succsessful.style.display = 'block'
})

username.addEventListener('keyup', () => {
    if (username.value.length < 3 || username.value.length > 12) {
        usernameEs.innerHTML = 'Username is not Valid'
        usernameEs.style.color = 'red'
    } else {
        usernameEs.innerHTML = 'Username is Valid'
        usernameEs.style.color = '#32CDD5'
    }

})

password.addEventListener('keyup', () => {
    if (password.value.length < 3 || password.value.length > 12) {
        passwordEs.innerHTML = 'Password is not Valid'
        passwordEs.style.color = 'red'
    } else {
        passwordEs.innerHTML = 'Password is Valid'
        passwordEs.style.color = '#32CDD5'
    }
})