
async function sendForm(obj) {
    try {
        const response = await fetch('http://localhost:8080/offer', {
            method: 'POST',
            headers: {
                'Content-Type' : 'aplication/json'
            },
            body: JSON.stringify(obj)
        })
    } catch (error) {
        console.log('error: ', error)        
    }
}

export {sendForm}