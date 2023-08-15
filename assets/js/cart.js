/* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 200000; 
var fadeTime = 300;


/* các hành động cick */
$('.product-quantity input').change( function() {
  updateQuantity(this);
});

$('.product-removal button').click( function() {
  removeItem(this);
});


//  tính toán trong giỏ hàng
function recalculateCart()
{
  var subtotal = 0;
  
// tổng tiền mặt hàng
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });
  
// tổng  các loại tiền 
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;
  
// cập nhật lại tổng giá
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal);
    $('#cart-tax').html(tax);
    $('#cart-shipping').html(shipping);
    $('#cart-total').html(total);
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


/* cập nhật số lượng */
function updateQuantity(quantityInput)
{
  /* tính giá  các dòng*/
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
  
  /* cập nhật lại giá và tổng giỏ hàng */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice);
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}


/* xóa sản phẩm trong giỏ hàng  */
function removeItem(removeButton)
{
  /* xóa dòng trong DOM and recalctổng số giở àng */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}