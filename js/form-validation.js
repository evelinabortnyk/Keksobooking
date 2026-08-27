const form = document.querySelector('.ad-form')
const roomCount = document.querySelector('#room_number')
const capacity = document.querySelector('#capacity')
const imgForm = document.querySelector('#images').accept="image/*"
const priceForm = document.querySelector('#price') 
const titleForm = document.querySelector('#title')
let features =document.querySelectorAll('.feature__checkbox')
titleForm.maxLength = '100'

let featuresArr = []

const PRICE_RANGE = {
    min: 1, max: 100000,
}
function priceValidation (){
    if(priceForm.value < PRICE_RANGE.min ){
        priceForm.setCustomValidity(`minimum price ${PRICE_RANGE.min}`)
    } else if (priceForm.value > PRICE_RANGE.max){
        priceForm.setCustomValidity(`maximum price ${PRICE_RANGE.max}`)
    } else{
        priceForm.setCustomValidity('')
    }
}
function titleValidation (){
    if(titleForm.value.length <30){
        titleForm.setCustomValidity(`at least 30 characters`)
    } else {
        titleForm.setCustomValidity('')
    }
    return error
}

function roomsAndGuestvalidation (guests, rooms, inputValidation) {
    let roomsValue= + rooms.value
    let guestsValue =  +guests.value

    if(guestsValue > roomsValue){
        inputValidation.setCustomValidity(`no more than ${roomsValue} guests`)
    } else if(roomsValue === 100 && guestsValue != 0){
        inputValidation.setCustomValidity('Not for guests')
    } else if(roomsValue !== 100 && guestsValue === 0){
        inputValidation.setCustomValidity('At least 1 guest')
    } else {
        inputValidation.setCustomValidity('')
    }
}
function validationForm(){
    roomsAndGuestvalidation(capacity, roomCount, roomCount)
    roomsAndGuestvalidation(capacity, roomCount, capacity)
    titleValidation()
    priceValidation()
}
function featuresAdd () {
    features.forEach(e => {
        e.checked ? featuresArr.push(e.value ): 0
    });
    return [...new Set(featuresArr)]
}
form.addEventListener('click', (e)=>{
    roomCount.setCustomValidity('')
    capacity.setCustomValidity('')
    priceForm.setCustomValidity('')
    titleForm.setCustomValidity('')
})

export{validationForm, featuresAdd}