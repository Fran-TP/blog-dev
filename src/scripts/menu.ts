const navBar = document.querySelector('#nav-bar') as HTMLDivElement
const hamburgerButton = document.querySelector(
  '#hamburger-button'
) as HTMLButtonElement

hamburgerButton?.addEventListener('click', () => {
  navBar?.classList.toggle('hidden-navbar')
})
