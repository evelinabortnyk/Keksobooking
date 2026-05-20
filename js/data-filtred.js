function createFiteringArr (arr, atribut) {
    let filteredArr = arr.filter((el) =>  el.offer.type === atribut)
    return filteredArr.lenght > 10 ? filteredArr.slice(0, 10) : filteredArr
}
export {createFiteringArr}