const form = document.querySelector('.form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')


const validacaoForm = (val,regex) =>  regex.test(val)

const validForm = (input)=> {
            input.classList.remove('error')
            input.classList.add('success')    
}

const erorrForm = input => {
   input.classList.remove('success')
   input.classList.add('error')
}

password.addEventListener('input', ({target})=> {
    const passwordChecked = validacaoForm(target.value,/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)
    passwordChecked && validForm(target)
    !passwordChecked && erorrForm(target) 
})


email.addEventListener('input', ({target})=> {
    const input = target

    const emailChecked = validacaoForm(input.value,/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)
    emailChecked ? validForm(input) : erorrForm(input)
})

form.addEventListener('submit', e => {
    e.preventDefault()
    form.reset()
  
})