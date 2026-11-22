// Part A : Build the Digital Clock 
// Select HTML elements 
const clock = document.querySelector('#clock') 
const period = document.querySelector('#period')
const todayDate = document.querySelector('#todayDate')

// create clock function 
function updateClock(){
    // Get current Date and time 
    const now = new Date()
    // Get hours, Minutes, Seconds 
    hours = now.getHours()
    minutes = now.getMinutes()
    second = now.getSeconds()
    // Determine AM or PM 
    const ampm = hours >= 12 ? 'PM' : 'AM'
    // convert 24-hours format to 12-hours format
    hours = hours%12 || 12

    // Add leading Zero 
    const formattedHours = String(hours).padStart(2,'0') // 1 => '01'
    const formattedMinutes = String(minutes).padStart(2,'0')
    const formattedSeconds = String(second).padStart(2,'0')

    // Display clock 
    clock.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
    period.textContent = ampm
    // clock.style.color = 'red' // it's working

    // format today's Date 
    todayDate.textContent = new Intl.DateTimeFormat('en-IN',{
       weekday : 'long',
       day : 'numeric',
       month : 'long',
       year : 'numeric'
    }).format(now)
}
// Run immediately 
updateClock()
// update every seconds 
setInterval(updateClock,1000) // call function every seconds

// Part B : Build the Delivery Date Calculator 
const deliveryDays = document.querySelector('#deliveryDays')
const calculateBtn  = document.querySelector('#calculateBtn')
const result = document.querySelector('#result')

// listen for button click 
calculateBtn.addEventListener('click', function(){
    // get delivery days from input thorough value
    let days = Number(deliveryDays.value)
    // Validate input 
    if(!Number.isInteger(days)|| days < 1 || days > 365){
        result.textContent  = 'Please enter a whole number between 1 to 365. '
        return // return can immediately stop the execution of current function
    }

    // Get today Date 
    let orderDate = new Date()
    // create a separate copy 
    const deliveryDate = new Date(orderDate)

    // add delivery days 
    deliveryDate.setDate(deliveryDate.getDate() + days)

    // format delivery Date 
    let formattedDate =  new Intl.DateTimeFormat('en-In',{
        weekday: 'long',
        day : 'numeric',
        month : 'long',
        year : 'numeric'
    }).format(deliveryDate)

    // display result 
    result.textContent = `Expected delivery: ${formattedDate}`
})