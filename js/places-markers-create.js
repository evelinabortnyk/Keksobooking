import { displayCards } from "./cards-display.js";

const customIcon = L.icon({
    iconUrl: './img/marker.svg',
    iconSize: [40, 40]
})

const markersArr =[]

function createMarkers(arr, map){
    markersArr.forEach(marker => map.removeLayer(marker))

    let arrForMarkers = arr.slice(0, 10)
    arrForMarkers.forEach(el => {
        let popupWrap = document.createElement('div')
        let popup = displayCards(el)
        popupWrap.appendChild(popup)

        let addressArr = el.offer.address.split(' ')
        const marker = L.marker([addressArr[0], addressArr[1]], {icon: customIcon })  
            .addTo(map)
            .bindPopup(popupWrap)
        markersArr.push(marker)
    });
}

export {createMarkers}