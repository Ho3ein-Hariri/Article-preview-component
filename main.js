const shareBTN = document.querySelector('#share-btn')
const img = document.querySelector('#share-btn img')
const socialIcons = document.querySelector('.social-icons-container')

shareBTN.addEventListener('click', () =>{
    shareBTN.classList.toggle('active')
    img.classList.toggle('active')
    socialIcons.classList.toggle('active')
})