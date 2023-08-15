const addressS = document.querySelectorAll('.js-add') // chọn ra nút địa chỉ

const modal = document.querySelector('.modal') // chọn ra class modal

const modalClose = document.querySelector('.js-close')// chọn ra nút close

const hideModal = document.querySelector('.js-hide-modal') // lấy ra toàn bộ thẻ modal





modalClose.addEventListener('click', closeModal)

for(const address of addressS){
  address.addEventListener('click', showAdd )
}



function showAdd(){
  modal.classList.add('open-modal')

}

function closeModal(){
  modal.classList.remove('open-modal')
}







