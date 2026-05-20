import { displayCards } from "./cards-display.js";
// console.log(displayCards)

const customIcon = L.icon({
    iconUrl: './img/marker.svg',
    iconSize: [40, 40]
})

function createMarkers(arr, map){
    let arrForMarkers = arr.slice(0, 10)
    // console.log(arrForMarkers)

    arrForMarkers.forEach(el => {
        let popupWrap = document.createElement('div')
        let popup = displayCards(el)
        popupWrap.appendChild(popup)
        let addressArr = el.offer.address.split(' ')
        L.marker([addressArr[0], addressArr[1]], {icon: customIcon })  
        .addTo(map)
        .bindPopup(popupWrap)
    });
}

export {createMarkers}