import { displayCards } from "./cards-display.js";

const customIcon = L.icon({
    iconUrl: './img/marker.svg',
    iconSize: [40, 40]
})

const markersArr =[]

function getRandArr(arr){
    let arrRand = [...arr];
    for(let i = arrRand.length -1; i>0; i--){
        const count = Math.floor(Math.random() * (i + 1));
        [arrRand[i], arrRand[count]] = [arrRand[count], arrRand[i]]
    }
    return arrRand.slice(0 ,10)
}
function createMarkers(arr, map){
    markersArr.forEach(marker => map.removeLayer(marker))

    let arrForMarkers = getRandArr(arr)

    arrForMarkers.forEach(el => {
        let popupWrap = document.createElement('div')
        let popup = displayCards(el)
        popupWrap.appendChild(popup)

        let addressArr = el.offer.address.split(', ')
        const marker = L.marker([addressArr[0], addressArr[1]], {icon: customIcon })  
            .addTo(map)
            .bindPopup(popupWrap)
        markersArr.push(marker)
    });
}

export {createMarkers, getRandArr}