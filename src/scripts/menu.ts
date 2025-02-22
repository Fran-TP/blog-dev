const navBar = document.querySelector('#nav-bar') as HTMLDivElement
const burgerButton = document.querySelector('#hamburger-button') as HTMLButtonElement

burgerButton?.addEventListener('click', () => {
  navBar?.classList.toggle('expand')
})
