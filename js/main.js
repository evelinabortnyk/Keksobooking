import { priseCorecting, selectedTime} from "./cards-filtering.js";
import { form,  mapFilters,  disabledForm, map } from "./create-map.js";
import { validationForm, featuresAdd} from "./form-validation.js";
import { addFormData, sendForm } from "./send-form.js";
import { avatarUrl, imagesUrlsArr } from "./add_photos.js";
import { removedForm } from "./removed-form.js";
import { createMarkers } from "./places-markers-create.js";
import { createFiltersObj, createFiteringArr , filteredArr} from "./data-filtred.js";


async function getCards(){
    try {
        const response = await fetch('http://localhost:8080/offers')
        if(!response.ok) {
            throw new Error('Error server', response.status)
        }
        const cardsArr = await response.json()

        return cardsArr
    } catch (error) {
        console.log('error !!!', error)
        return 
    }
}

let cardsArr = await getCards()

Array.isArray(cardsArr) ? createMarkers(cardsArr, map) : ''

const formHhousingType = document.querySelector('#type') 
formHhousingType.addEventListener('change', (e)=> {
    let target = e.target.value 
    priseCorecting(target)
})

const timeIn= document.querySelector('#timein')
const timeOut= document.querySelector('#timeout')

timeIn.addEventListener('change', (e)=>{
    let target = e.target.value
    selectedTime(target, timeOut)
})
timeOut.addEventListener('change', (e)=>{
    let target = e.target.value
    selectedTime(target, timeIn)
})

// Leaflet map create

const formAtributs = document.querySelectorAll('.ad-form fieldset')
const filterAtributs = document.querySelectorAll('.map__filters select, fieldset')

disabledForm(filterAtributs, true)
disabledForm(formAtributs, true)

map.whenReady(() => {
    if (cardsArr.length > 0) {
        form.classList.remove('ad-form-disabled')
        mapFilters.classList.remove('ad-form-disabled')
    } 
    setTimeout(() => {
        disabledForm(filterAtributs, false)
        disabledForm(formAtributs, false)
    }, 1000);
})

const resetFormBtn = document.querySelector('.ad-form__reset')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const featuresArr = featuresAdd()
    validationForm()
    form.reportValidity()
    if(form.checkValidity() === true) {
        const objDataForm = addFormData(e.target, featuresArr,avatarUrl, imagesUrlsArr)
        sendForm(objDataForm)
        location.reload()
    }
})
resetFormBtn.addEventListener('click', e=> removedForm(form))

// filtered arr

const mapHousingType = document.querySelector('.map__filters')

mapHousingType.addEventListener('change', e => {
    let filtersObj = createFiltersObj()
    
    if (Array.isArray(cardsArr)) {
        createFiteringArr(filtersObj, cardsArr)
        createMarkers(filteredArr, map)
    }
})
