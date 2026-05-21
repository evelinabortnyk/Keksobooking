import { getRandArr } from "./places-markers-create.js"

function createFiteringArr (arr, atribut) {
    let filteredArr =  atribut === 'any' ? arr : arr.filter((el) =>  el.offer.type === atribut)

    return filteredArr.lenght > 10 ? getRandArr(filteredArr) : filteredArr
}
export {createFiteringArr}