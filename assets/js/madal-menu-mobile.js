//  bát tắt menu  mobile tablet
const menuMobile = document.querySelector('.js-menu') // chọn ra nút menu
const modalMenu = document.querySelector('.modal-mb')  // chọn ra cái menu-moble
const closeMenu = document.querySelector('.js-close-mobile')

menuMobile.addEventListener('click',showMenuMoblie )
closeMenu.addEventListener('click', hideMenuMoblie )

function showMenuMoblie(){
  modalMenu.classList.add('modal-mb-open')
}

function hideMenuMoblie(){
  modalMenu.classList.remove('modal-mb-open')
}