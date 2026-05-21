function createFiltersObj (){
    let filtersObj = {}
    filtersObj.features = []
    let features = document.querySelectorAll('.map__features input')
    features.forEach(e => {
        if(e.checked){
            filtersObj.features.push(e.value)
        } 
    })
    filtersObj.type = document.querySelector('#housing-type').value
    filtersObj.price = document.querySelector('#housing-price').value
    filtersObj.rooms = document.querySelector('#housing-rooms').value
    filtersObj.guests = document.querySelector('#housing-guests').value
    return filtersObj
}

let filteredArr = []

function createFiteringArr (filters, guests) {
    filteredArr = []
    guests.forEach(el => {
        const offer = el.offer
        let count = 0
        count = priceFiltering(count,offer.price, filters.price)
        count = dataFiltering(count, offer.type, filters.type)
        count = dataFiltering(count, offer.rooms, filters.rooms === 'any'?filters.rooms : `${filters.rooms} rooms`)
        count = dataFiltering(count, offer.guests, filters.guests === 'any'?filters.guests :`${filters.guests} guests`)
        count = featuresFiltering(count, offer.features, filters.features)
        count === 5 ? filteredArr.push(el) : 0
    });
}

function dataFiltering(count, elAtribut, filterAtribut) {
    count = filterAtribut === 'any' || elAtribut === filterAtribut ? count + 1 : count
    return count
}
function priceFiltering(count, elAtribut, filterAtribut) {
    let elPrice = elAtribut.replace(/\D/g,'')
    switch (filterAtribut) {
        case 'middle':
            count = +elPrice >= 100 ? count + 1 : count
            break;
        case 'low':
            count = +elPrice >= 500 ? count + 1 : count
            
            break;
        case 'high':
            count = +elPrice >= 1000 ? count + 1 : count
            break;
        case 'any':
            count += 1
            break;
        default:
            break;
    }
    return count
}

function featuresFiltering(count,  elFeaturs, filterFeaturs) {
    let considenc = 0
    filterFeaturs.forEach(filter=>{
        elFeaturs.forEach(featur=> {
            filter === featur ? considenc +=1 : 0
        })
    })
    count = considenc === filterFeaturs.length ? count + 1 : count
    return count
}
export {createFiltersObj, createFiteringArr, filteredArr }