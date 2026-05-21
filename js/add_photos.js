const avatar = document.querySelector('#avatar')
const avatarPreview = document.querySelector('.ad-form-header__preview img')
const imagesContainer = document.querySelector('.ad-form__photo-container')
const imagesAddButton = document.querySelector('#images')
const formImgBlock = document.querySelector('.ad-form__photo')
const image = document.querySelector('#form_photo')
const start = document.createComment('fragment-start')
const end = document.createComment('fragment-end')

imagesAddButton.multiple = true

let avatarUrl= ''
let imagesUrlsArr= []
avatar.addEventListener('change', (e)=>{
    avatarUrl = e.target.files[0]
    let url = addPrewue(avatarUrl)
    avatarPreview.src = url
    avatarUrl = url
})

const fragment = new DocumentFragment()

imagesAddButton.addEventListener('change', e =>{
    formImgBlock.classList.add('hidden')
    fragment.appendChild(start)

    for( let file of e.target.files){
        imagesUrlsArr.push(file)

        let url = addPrewue(file)
        displayUsersPhotos(url)

    }
    fragment.appendChild(end)
    imagesContainer.appendChild(fragment)
})

function addPrewue (file) {
    if(!file) return
    const blob = new Blob([file], { type: file.type })
    const url = URL.createObjectURL(blob)
    return url  
}

function displayUsersPhotos(url) {
    const cloneElement = image.content.cloneNode(true);
    cloneElement.querySelector('.form__photo-img').src = url
    fragment.appendChild(cloneElement)
}

export {avatarUrl, imagesUrlsArr, start, end}
