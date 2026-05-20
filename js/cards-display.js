// Виведіть заголовок оголошення offer.title у заголовок .popup__title.

// Виведіть адресу offer.address до блоку .popup__text - address.

// Виведіть ціну offer.price в блок .popup__text - price 
// рядком виду {{offer.price}} грн/ніч. Наприклад, «5200 грн/ніч».

// У блок .popup__type виведіть тип житла offer.type, 
// зіставивши з підписами:
// Квартира для flat
// Бунгало для bungalow
// Будинок для будинку
// Палац для palace

// Виведіть кількість гостей та кімнат offer.rooms та offer.guests 
// до блоку .popup__text--capacity рядком виду {{offer.rooms}} 
// кімнати для {{offer.guests}} гостей. 
// Наприклад, "2 кімнати для 3 гостей".

// Час заїзду та виїзду offer.checkin та offer.checkout в 
// блок .popup__text--time рядком виду Заїзд після {{offer.checkin}}, 
// виїзд до {{offer.checkout}}. 
// Наприклад, "Заїзд після 14:00, виїзд до 14:00".

// У списку .popup__features виведіть всі доступні зручності в оголошенні.

// У блок .popup__description виведіть опис об'єкта нерухомості offer.description.

// У блок .popup__photos виведіть усі фотографії зі списку offer.photos. 
// Кожний рядок масиву photos повинен записуватися як src відповідного зображення.

// Замініть src у аватарки користувача - зображення, яке записано в .popup__avatar - 
// на значення поля author.avatar об'єкта, що відмальовується.

const card = document.querySelector('#card')
const fragment =new DocumentFragment()

function displayCards(e) {
    const offersObj = e.offer
    const cloneElement = card.content.cloneNode(true);

    cloneElement.querySelector('.popup__avatar').src = e.avatar
    cloneElement.querySelector('.popup__title').textContent = offersObj.title
    cloneElement.querySelector('.popup__text--address').textContent = offersObj.address
    cloneElement.querySelector('.popup__text--price').textContent = offersObj.price
    cloneElement.querySelector('.popup__type').textContent = typeCreate(offersObj.type)
    cloneElement.querySelector('.popup__text--capacity').textContent = `${offersObj.rooms} для ${offersObj.guests}`
    cloneElement.querySelector('.popup__text--time').textContent = `Заїзд після ${offersObj.checkin}, виїзд до ${offersObj.checkout}`
    featuresCreate(cloneElement.querySelectorAll('.popup__feature'), offersObj.features)
    cloneElement.querySelector('.popup__description').textContent = offersObj.description

    let photosArr = offersObj.photos
    Array.isArray(photosArr) ? addPhotos(cloneElement.querySelector('.popup__photos'), photosArr) : 0
    fragment.appendChild(cloneElement)
    return fragment
}
function typeCreate(data){
    let type = ''

    switch (data) {
        case 'flat':
            type = 'Квартира'
            break;
        case 'bungalow':
            type = 'Бунгало'
            break;
        case 'house':
            type = 'Будинок'
            break;
        case 'palace':
            type = 'Палац'
            break;
        default:
            break;
    }
    return type
}

function featuresCreate(elements,arr ){
    for(let i=0; i< elements.length; i++){
        let elTarget =elements[i]
        let value = elTarget.classList[1]
        elTarget.classList.add('hidden')
        arr.forEach(e => {
            if (`popup__feature--${e}` === value) {
                elTarget.classList.remove('hidden')
                return
            }
        })
    }
}
function addPhotos(perents, arr){
    perents.innerHTML=''
    
 arr.forEach(e=>{
        let img = document.createElement('img')
        img.classList='popup__photo'
        img.width='45'
        img.height='40'
        img.alt='Фотографія житла'
        img.src = e
        perents.appendChild(img)
    }) 
}
export {displayCards}