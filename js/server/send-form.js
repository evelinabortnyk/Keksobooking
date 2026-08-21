// async function sendForm(obj) {
//     try {
//         const response = await fetch('http://localhost:8080/offers', {
//             method: 'POST',
//             headers: {
//                 'Content-Type' : 'apзlication/json'
//             },
//             body: JSON.stringify(obj)
//         })
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('error: ', error)        
//     }
// }

// export {sendForm}