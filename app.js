//Movement Animation to happen
const card = document.querySelector('.card')
const container = document.querySelector('.container')
const sneakers = document.querySelector('.sneakers img')
const title = document.querySelector('.title')
const info = document.querySelector('.info h3')
const infoP = document.querySelector('.info p')
const sizes = document.querySelector('.sizes')
const sizeButtons = document.querySelectorAll('.sizes button')
const purchase = document.querySelector('.purchase')
const purchaseButton = document.querySelector('.purchase button')

//Size selector
sizeButtons.forEach(sizeButton => {
    sizeButton.addEventListener('click', (e)=> {
        sizeButtons.forEach(btn => btn.classList.remove('active'))
        sizeButton.classList.add('active')
    })
})

//Purchase event
purchaseButton.addEventListener('click', (e) => {
    alert('Sí, este botón no hace nada, pero mira que bonito se ve todo')
})

//Movement Anomation Event
container.addEventListener('mousemove', (e) => {
    let xAxis = -1* (window.innerWidth / 2 - e.pageX) / 25
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

//Animate In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none'
    // Popout
    title.style.transform = 'translateZ(150px)'
    sneakers.style.transform = 'translateZ(200px)'
    info.style.transform = 'translateZ(145px)'
    infoP.style.transform = 'translateZ(115px)'
    sizes.style.transform = 'translateZ(100px)'
    purchase.style.transform = 'translateZ(75px)'
})

//Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    // Popback
    title.style.transform = 'translateZ(0px)'
    sneakers.style.transform = 'translateZ(0px)'
    info.style.transform = 'translateZ(0px)'
    infoP.style.transform = 'translateZ(0px)'
    sizes.style.transform = 'translateZ(0px)'
    purchase.style.transform = 'translateZ(0px)'
})