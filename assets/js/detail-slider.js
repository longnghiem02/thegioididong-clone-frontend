const $$ = document.querySelector.bind(document);
const $$$ = document.querySelectorAll.bind(document);


$('.detail-slider-1').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    appendArrows:'.view-detail.active .owl-nav',
    prevArrow:"<button type='button'><i class='arrow-circle ti-angle-left'></i></button>",
    nextArrow:"<button type='button'><i class='arrow-circle ti-angle-right'></i></button>",

  });

/* $('.detail-slider-2').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  appendArrows:'.detail-slider-tab-2 .owl-nav',
  prevArrow:"<button type='button'><i class='arrow-circle ti-angle-left'></i></button>",
  nextArrow:"<button type='button'><i class='arrow-circle ti-angle-right'></i></button>",

}); */

/* $('.detail-slider-3').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  appendArrows:'.detail-slider-tab-3 .owl-nav',
  prevArrow:"<button type='button'><i class='arrow-circle ti-angle-left'></i></button>",
  nextArrow:"<button type='button'><i class='arrow-circle ti-angle-right'></i></button>",

}); */


/* --------------------change slider button------------------ */


const optionBtn = $$$('.option-view .item-border')
const optionContent = $$$('.view-detail')

optionBtn.forEach((option, index) => {              /* Duyệt */
    const detail = optionContent[index];            /* lấy ra index */

    option.onclick = function(){
        $$('.option-view .item-border.option-active').classList.remove('option-active')     /* thẻ có option-active sẽ bị xóa option-active */
        $$('.view-detail.active').classList.remove('active')      /* thẻ có active sẽ bị xóa active */

        this.classList.add('option-active')         /* Thẻ vừa click được thêm option-active */
        detail.classList.add('active')              /* Thẻ cùng index với thẻ vừa click được thêm active */
    }
});



