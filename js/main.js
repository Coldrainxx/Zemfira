//burger menu
const navButton = document.querySelector('.burger__menu')
const nav = document.querySelector('.nav')
if (navButton) {
  navButton.addEventListener('click', function (e) {
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
