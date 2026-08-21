let objData =  {}

async function sendForm(obj) {

    try {
        const response = await fetch('http://localhost:8080/offers', {
            method: 'POST',
            headers: {
                'Content-Type' : 'aplication/json'
            },
            body: JSON.stringify(obj)
        })
        const data = await response.json()
    } catch (error) {
        console.log('error: ', error)        
    }
}


function addFormData (target, featuresArr, avatar, images) {
    const formData = new FormData(target)
    
    const data = Object.fromEntries(formData.entries())
    
    let objForm = createObjForm(data, avatar, featuresArr, images)
    return objForm
}

function createObjForm(data, avatar, featuresArr, images){
    let offer = {}
    objData.avatar = avatar

    offer.address = data.address
    offer.checkin = data.timein
    offer.checkout = data.timeout
    offer.description = data.description
    offer.features = featuresArr
    offer.guests = `${data.capacity} guests`
    offer.images = images
    offer.price = `${data.price} $`
    offer.rooms = `${data.rooms} rooms`
    offer.title = data.title
    offer.type = data.type

    objData.offer = offer  
    
    return objData
}

export {addFormData, sendForm}