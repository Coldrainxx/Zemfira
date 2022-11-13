//burger menu
const navButton = document.querySelector('.burger__menu')
const nav = document.querySelector('.nav')
if (navButton) {
  navButton.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock')
    navButton.classList.toggle('_active')
    nav.classList.toggle('_active')
  })
}
//scroll
const navLinks = document.querySelectorAll('.nav__row-link')
if (navLinks.length > 0) {
  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', onNavLinkClick)
  })
  function onNavLinkClick(e) {
    const navLink = e.target
    if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
      const gotoSection = document.querySelector(navLink.dataset.goto)
      const gotoSectionValue =
        gotoSection.getBoundingClientRect().top +
        scrollY -
        document.querySelector('header').offsetHeight

      if (nav.classList.contains('_active')) {
        document.body.classList.remove('_lock')
        navButton.classList.remove('_active')
        nav.classList.remove('_active')
      }

      window.scrollTo({
        top: gotoSectionValue,
        behavior: 'smooth',
      })
      e.preventDefault()
    }
  }
}
//show more button
const showMoreBtn = document.querySelector('.show-more__btn')
let currentImg = 6
showMoreBtn.addEventListener('click', function (e) {
  let images = [
    ...document.querySelectorAll('.container .arts__flexbox .arts__img'),
  ]
  for (let i = currentImg; i < currentImg + 3; i++) {
    images[i].style.display = 'block'
  }
  currentImg += 3
  
  if (currentImg >= images.length) {
    showMoreBtn.style.display = 'none'
  }
})
