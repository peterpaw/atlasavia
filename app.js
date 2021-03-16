const menu = document.querySelector('.links')
const menuBtn = document.querySelector('.menu-btn')
const cancelBtn = document.querySelector('.cancel-btn')
const menuLinks = document.querySelectorAll('.menu-link')
const logoWrapper = document.querySelector('.logo-wrapper')

// mobile menu
menuBtn.onclick = () => {
  menu.classList.add('active')
  menuBtn.classList.add('hide')
}

cancelBtn.onclick = () => {
  menu.classList.remove('active')
  menuBtn.classList.remove('hide')
}

// close mobile menu on link click
logoWrapper.onclick = () => {
  menu.classList.remove('active')
  menuBtn.classList.remove('hide')
}

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active')
    menuBtn.classList.remove('hide')
  })
})

// scroll to top
document.querySelector('#scrollToTop').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})

// document.querySelector('#hero-btn').addEventListener('click', () => {
//   document.querySelector('#activities').scrollIntoView({
//     behavior: 'smooth'
//   })
// })

// // menu links
// document.querySelector('#link-activities').addEventListener('click', (e) => {
//   e.preventDefault()
//   document.querySelector('#activities').scrollIntoView({
//     behavior: 'smooth'
//   })
// })

// document.querySelector('#link-about-us').addEventListener('click', (e) => {
//   e.preventDefault()
//   document.querySelector('#about-us').scrollIntoView({
//     behavior: 'smooth'
//   })
// })

// document.querySelector('#link-contact').addEventListener('click', (e) => {
//   e.preventDefault()
//   document.querySelector('#contact').scrollIntoView({
//     behavior: 'smooth'
//   })
// })
