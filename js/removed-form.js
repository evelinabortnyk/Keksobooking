import { start, end } from "./add_photos.js";

const avatarImg = document.querySelector('.ad-form-header__preview img')

function removedForm (form) {
    form.reset()
    avatarImg.src = 'img/muffin-grey.svg'
    let node = start.nextSibling;
    while (node && node !== end) {
        const next = node.nextSibling;
        node.remove()
        node = next
    }
    start.remove()
    end.remove()
}

export {removedForm}