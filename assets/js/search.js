const productsApi = 'http://localhost:3000/products'  // Lấy API

fetch(productsApi)                
.then((response) => response.json())
.then((data) => {
// console.log("Success:", data);
  const searchSuggest = document.querySelector(".search--suggest");   // Thẻ hiện kết quar tìm kiếm
  function showData(products, data) {
    products.innerHTML = data.length      // Kiểm tra điều kiện data.length
    ? data.map((product) => {             // Nếu có thì dùng map() chỉnh sửa elements của array
      return `
        <a href="${product.link}">
          <div class="product__item" data-id="${product.id}">
            <img src="${product.image}">
            <p class="product--name">
              ${product.name}
            </p>
          </div>
        </a>
      `;
    })
    .join('')
    : `<div class="product__item">Dữ liệu trống</div>`;     // Nếu không có thì trả về
  }
  
  showData(searchSuggest, data);        // Gọi function showData
  const searchInput = document.getElementById("search");

  searchInput.addEventListener("keyup", (e) => {            // Thêm sự kiện keyup
    const convertToLowerCase = e.target.value.toLowerCase().trim();   // Lấy dữ liệu nhập vào chuyển thành chữ thường và bỏ khoảng trống 2 đầu
    
    const filterData = data.filter((item) => {
      return item.name.toLowerCase().includes(convertToLowerCase);    // Lọc và trả về name được chuyển thành chữ thường khớp với dữ liệu nhập vào
    });
    if (convertToLowerCase !== '') {                        // Nếu dữ liệu nhập vào không bằng chuỗi rỗng
      showData(searchSuggest, filterData);                  // Gọi function showData nhưng lấy dữ liệu sau khi lọc và render ra
      const searchValue = document.querySelectorAll(".product__item")
      searchValue.forEach(value => value.classList.add('search--active'))   // Duyệt qua tìm sản phẩm trùng khớp với dữ liệu lọc và thêm class show ra màn hình
    } else {
      const searchValue = document.querySelectorAll(".product__item")
      searchValue.forEach(value => value.classList.remove('search--active'))  // Duyệt qua sản phẩm và bỏ class show ra màn hình
      return
    }
  })
  
});
