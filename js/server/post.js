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
const titelsArr = ['Затишна квартира в самому серці міста', 'Світла та комфортна квартира в центрі', 'Стильне житло в центральному районі', 'Тепла та охайна квартира поруч із усім необхідним', 'Простора та затишна квартира з гарним', 'Комфортне житло в центрі ', 'Невелика, але дуже затишна квартира', 'Затишне гніздечко в самому центрі', 'Приємна квартира для комфортного проживання', 'Чиста та світла квартира в хорошій локації', 'Квартира в центрі', 'Затишне житло для спокійного життя в центрі', 'Квартира з чудовою атмосферою та локацією', 'Гарна квартира поруч із транспортом і магазинами']
const X_RANGE = { 'min': 35.65000, 'max': 35.70000 }
const Y_RANGE = { 'min': 139.70000, 'max': 139.80000 }
const PRISE_RANGE = { 'min': 100, 'max': 5000 }
const ROOMS_RANGE = { 'min': 1, 'max': 5 }
const GUESTS_RANGE = { 'min': 1, 'max': 10 }
const typesArr = ['palace', 'flat', 'house', 'bungalow']
const checkinsArr = ['12:00', '13:00', '14:00']
const checkoutsArr = ['12:00', '13:00', '14:00']
const featuresArr = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']
const descriptionsArr = ['Квартира повністю мебльована та готова до заселення', 'Простір продуманий до дрібниць для комфортного проживання.', 'У квартирі багато природного світу завдяки великим вікнам.', 'Зручне планування дозволяє ефективно використовувати кожен метр.', 'Сучасний ремонт виконаний у світлих, нейтральних тонах.', 'Кухня оснащена всією необхідною технікою.', 'Ванна кімната чиста, доглянута та функціональна.', 'Є достатньо місця для зберігання речей.', 'Квартира тиха, вікна виходять у спокійний двір.', 'Інтер`єр створює відчуття затишку та домашнього тепла.', 'Житло добре утеплене та підходить для проживання в будь-яку пору року.', 'Усі комунікації працюють справно та без перебоїв.', 'Балкон додає додатковий простір для відпочинку.', 'Високі стелі створюють відчуття простору.', ' Квартира доглянута та регулярно обслуговується.', 'Є швидкий інтернет та всі необхідні підключення.', 'Підлога в хорошому стані, приємна на дотик', 'Освітлення підібране для комфортного перебування у вечірній час.', 'Житло підходить як для однієї людини, так і для пари.', 'Загальна атмосфера квартири спокійному та комфорту']
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

async function sendData() {
    try {
        const response = await fetch('http://localhost:8080/offert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cardsArr)
        })

        const result = await response.json()

    } catch (error) {
        console.log('Error:', error)
    }
}

sendData()
