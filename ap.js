const peoplesButton = document.querySelector('.peoples')
const peopleContainer = document.querySelector('.people-container')

peoplesButton.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)

        peopleContainer.innerHTML = ''

        data.forEach(person => {
            const card = document.createElement('div')
            card.classList.add('person-card')

            const nameElement = document.createElement('div')
            nameElement.textContent = `Name: ${person.name}`

            const ageElement = document.createElement('div')
            ageElement.textContent = `Age: ${person.age}`

            card.appendChild(nameElement)
            card.appendChild(ageElement)

            peopleContainer.appendChild(card)
        })
    })
})


const loadButton = document.querySelector('button')

loadButton.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response)
            console.log(data);
        } else {
            console.error('try again');
        }
    })
})