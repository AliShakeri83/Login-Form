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

username.addEventListener('keyup', (e) => {
    console.log(e);
    if (username.value < 3 || username.value > 10) {
        console.log('NO');
    } else {
        console.log('OK');
    }
})

