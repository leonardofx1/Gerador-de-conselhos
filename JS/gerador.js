const titulo = document.querySelector('.titulo')
const advice = document.querySelector('.conselho')
const dado = document.querySelector('.btn__dado') 

const apiEndPoint = (id) => `https://api.adviceslip.com/advice/${id}` ;

const randomId = () =>  Math.floor((Math.random() * 224))

const getData = async (id) => {
    const response = await fetch(apiEndPoint(id))

    try {
        if(!response.ok) {
            throw new Error('não foi possível obter os dados')
        }
        return response.json()

 }catch ({messege}){
        console.log(messege)
    }
}
const showAdvices = (async (data, id) => {
    const response = await data(id)
    const  {slip} = response
    advice.textContent = slip.advice
})
const showTitel = (id = 1)=> {
    titulo.textContent = `Advice #${id}`
}

dado.addEventListener('click', () => {
    const id = randomId()
    showAdvices(getData, id)
    showTitel(id)
})

