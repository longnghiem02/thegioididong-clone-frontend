
function addEventListenerList(list, event, fn) {      // Tạo một fuction lặp qua mảng Nodelist để thêm sự kiện cho từng cái
  for (var i = 0; i < list.length; i++) {
      list[i].addEventListener(event, fn);
  }
}

let timer

const handleShowDetail = function(e) {
  const detail = e.target.parentElement.querySelector('.small--detail')   // Lấy ra thẻ được đưa chuột vào và thêm class show ra màn hình
  timer = setTimeout(() => {
    detail.classList.add('detail-active')             // Thêm ra màn hình sau 2s
  }, 2000)
}


const handleHideDetail = function() {
  this.querySelector('.small--detail').classList.remove('detail-active')  // Lấy ra thẻ vừa được chọn và bỏ class show ra màn hình
  clearTimeout(timer)
}

const product = document.querySelectorAll('.owl-item .item')
addEventListenerList(product, "mouseenter", handleShowDetail)
addEventListenerList(product, "mouseleave", handleHideDetail)

