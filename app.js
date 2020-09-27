document.querySelector('#scrollToTop').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})

document.querySelector('#hero-btn').addEventListener('click', () => {
  document.querySelector('#activities').scrollIntoView({
    behavior: 'smooth'
  })
})
