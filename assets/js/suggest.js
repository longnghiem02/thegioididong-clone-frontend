
const $$ = document.querySelector.bind(document);
const $$$ = document.querySelectorAll.bind(document);

const suggestBtn = $$$('.button-suggest')
const suggestContent = $$$('.block-product__content')

suggestBtn.forEach((btn, index) => {                // Duyệt khi click vào nút
    const suggest = suggestContent[index];          // Lấy ra index của nội dung

    btn.onclick = function(){
        $$('.button-suggest.button-active').classList.remove('button-active')               // Bỏ class active cho nút có class active
        $$('.block-product__content.content-active').classList.remove('content-active')     // Bỏ class show ra màn hình cho nội dung có class show

        this.classList.add('button-active')         // Thêm class active cho nút được ấn
        suggest.classList.add('content-active')     // Thêm class show ra màn hình cho phần nội dung tương ứng với nút được ấn
    }
});


