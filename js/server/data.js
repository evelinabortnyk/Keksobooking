// У файлі main.js напишіть необхідні функції для створення масиву з 
// 10 згенерованих JS-об'єктів. Кожен об'єкт масиву - 
// опис схожого оголошення неподалік.

// Структура кожного об'єкта має бути такою:

// -author, об'єкт - описує автора. Містить одне поле:
// -avatar, рядок — адреса зображення виду img/avatars/user{{xx}}.png, де {{xx}} це випадкове число від 1 до 8 з провідним нулем. 
// Наприклад, 01, 02 і т.д.
// -offer, об'єкт - містить інформацію про оголошення. Складається з полів:
// -title, рядок - заголовок речення. Придумайте самостійно.
// -address, рядок - адреса пропозиції. Для простоти нехай поки що складається 
//     з географічних координат по масці {{location.x}}, {{location.y}}.
// -price, число – вартість. Випадкове ціле додатне число
// -type, рядок – одне з чотирьох фіксованих значень: palace, flat, house або 
//     bungalow.
// -rooms, число – кількість кімнат. Випадкове ціле додатне число.
// -guests, число - кількість гостей, які можна розмістити. 
//     Випадкове ціле додатне число.
// -checkin, рядок – одне з трьох фіксованих значень: 12:00, 13:00 або 14:00.
// -checkout, рядок – одне з трьох фіксованих значень: 12:00, 13:00 або 14:00.
// -Features, масив рядків - масив випадкової довжини з значень: wifi, 
//     dishwasher, parking, washer, elevator, conditioner. 
//     Значення не повинні повторюватись.
// -description, рядок - Опис приміщення. Придумайте самостійно.
// -photos, масив рядків - масив випадкової довжини з значень: 
//     http://o0.github.io/assets/images/tokyo/hotel1.jpg, 
//     http://o0.github.io/assets/images/tokyo/hotel2.jpg, 
//     http://o0.github.io/assets/images/tokyo/hotel3.jpg.
// -location, об'єкт - місце розташування у вигляді географічних координат. 
//     Складається із двох полів:
// -x, число з плаваючою точкою - широта, випадкове значення від
//     35.65000 до 35.70000
// -y, число з плаваючою точкою - довгота, випадкове значення від 
//     139.70000 до 139.80000

let cardsArr = []

const USSERS_ARR_LENGTH = 40
const titelsArr = [
    'Cozy apartment in the heart of the city',
    'Bright and comfortable apartment in the city center',
    'Stylish home in a central neighborhood',
    'Warm and well-maintained apartment close to everything you need',
    'Spacious and cozy apartment with a beautiful view',
    'Comfortable home in the city center',
    'Small but very cozy apartment',
    'A cozy nest in the heart of the city',
    'Pleasant apartment for comfortable living',
    'Clean and bright apartment in a great location',
    'Apartment in the city center',
    'Cozy home for peaceful living in the city center',
    'Beautiful apartment with a great atmosphere and location',
    'Nice apartment close to public transport and shops',
]

const X_RANGE = { 'min': 35.65000, 'max': 35.70000 }
const Y_RANGE = { 'min': 139.70000, 'max': 139.80000 }
const PRISE_RANGE = { 'min': 100, 'max': 5000 }
const ROOMS_RANGE = { 'min': 1, 'max': 5 }
const GUESTS_RANGE = { 'min': 1, 'max': 10 }
const typesArr = ['palace', 'flat', 'house', 'bungalow']
const checkinsArr = ['12:00', '13:00', '14:00']
const checkoutsArr = ['12:00', '13:00', '14:00']
const featuresArr = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']
const descriptionsArr = [
    'The apartment is fully furnished and ready to move in.',
    'The space is thoughtfully designed for comfortable living.',
    'Large windows provide plenty of natural light.',
    'The convenient layout makes efficient use of every square meter.',
    'The modern renovation is finished in light, neutral tones.',
    'The kitchen is equipped with all the necessary appliances.',
    'The bathroom is clean, well-maintained, and functional.',
    'There is plenty of storage space for personal belongings.',
    'The apartment is quiet, with windows overlooking a peaceful courtyard.',
    'The interior creates a cozy and welcoming atmosphere.',
    'The property is well insulated and suitable for living all year round.',
    'All utilities and systems work properly without interruptions.',
    'The balcony provides additional space for relaxation.',
    'High ceilings create a spacious feeling.',
    'The apartment is well maintained and regularly serviced.',
    'Fast internet and all necessary connections are available.',
    'The flooring is in good condition and pleasant to walk on.',
    'The lighting is designed for a comfortable atmosphere in the evening.',
    'The apartment is suitable for both a single person and a couple.',
    'The overall atmosphere of the apartment is calm and comfortable.'
]
const photosArr = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']


function createCard() {
    let card = {
        'avatar': `img/avatars/user0${Math.floor(Math.random() * (8 - 1 + 1)) + 1}.png`,
        'offer': {
            'title': titelsArr[Math.floor(Math.random() * titelsArr.length)],
            'address': `${(Math.random() * (X_RANGE.max - X_RANGE.min) + X_RANGE.min).toFixed(5)}, ${(Math.random() * (Y_RANGE.max - Y_RANGE.min) + Y_RANGE.min).toFixed(5)}`,
            'price': `${Math.floor(Math.random() * (PRISE_RANGE.max - PRISE_RANGE.min) + PRISE_RANGE.min)} $`,
            'type': typesArr[Math.floor(Math.random() * typesArr.length)],
            'rooms': `${Math.floor(Math.random() * (ROOMS_RANGE.max - ROOMS_RANGE.min) + ROOMS_RANGE.min)} rooms`,
            'guests': `${Math.floor(Math.random() * (GUESTS_RANGE.max - GUESTS_RANGE.min) + GUESTS_RANGE.min)} guests`,
            'checkin': checkinsArr[Math.floor(Math.random() * checkinsArr.length)],
            'checkout': checkoutsArr[Math.floor(Math.random() * checkinsArr.length)],
            'features': createFeatures(featuresArr),
            'description': descriptionsArr[Math.floor(Math.random() * descriptionsArr.length)],
            'photos': createFeatures(photosArr),
        }
    }

    return card
}

function createFeatures(dataArr) {
    let arr = []
    for (let i = 0; i <= 10; i++) {
        arr.push(dataArr[Math.floor(Math.random() * dataArr.length)])
    }
    let uniqeArr = [...new Set(arr)]
    return uniqeArr.slice(0, Math.random() * dataArr.length)
}

for (let i = 0; i < USSERS_ARR_LENGTH; i++) {
    cardsArr.push(createCard())
}

export {cardsArr}