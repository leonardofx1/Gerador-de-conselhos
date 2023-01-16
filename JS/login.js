const form = document.querySelector('.form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const msgError = document.querySelector('#msg')

console.log(msgError)
const validacaoForm = (val,regex) =>  regex.test(val)

const validForm = (input)=> {
            input.classList.remove('error')
            input.classList.add('success')
}

const erorrForm = input => {
   input.classList.remove('success')
   input.classList.add('error')
}
const passErro = () => {
    if(Array.from(msgError.classList).includes('none')){
        msgError.classList.remove('none')
    }
    msgError.classList.add('msg__error')
    console.log(msgError.classList)
}
const passSuccess = () => {
    msgError.classList.remove('msg__error')
    msgError.classList.add('none')
}

const inputClass = target => {
    target.setAttribute('class', 'input')
    }

password.addEventListener('input', ({target})=> {
    const passwordChecked = validacaoForm(target.value,/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)
    passwordChecked && validForm(target) || passSuccess()
    if(!passwordChecked) { 
        erorrForm(target) 
        passErro()
    }
    target.value === '' && inputClass(target) 
})



email.addEventListener('input', ({target})=> {
    const emailChecked = validacaoForm(target.value,/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)
    emailChecked && validForm(target) 
    !emailChecked && erorrForm(target)
    target.value ==='' && inputClass(target)

})

form.addEventListener('submit', e => {
    e.preventDefault()

    if(Array.from(email.classList).includes('success') &&Array.from( password.classList).includes('success') ){
         location.href = 'http://127.0.0.1:5500/home/index.html'
    }
    form.reset()
})