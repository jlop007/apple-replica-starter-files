const selectElement = (element) => document.querySelector(element)

selectElement('.mobile-menu').addEventListner('click', () => {
    selectElement('header').classList.toggle('active')
})

