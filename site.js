const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?
const h2 = document.querySelector('h2')
if(isMorning){
    h2.textContent = "Good Morning"
}else if(isAfternoon){
    h2.textContent = "Good Afternoon"
}else if( isEvening)
{
    h2.textContent = "Good Evening"
}else{
    h2.textContent = "Hello"
}

const key = "It's a secret to everybody."
localStorage.setItem(key, 'it is not much of a secret')