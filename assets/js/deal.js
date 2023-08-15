const dealProductsApi = 'http://localhost:3000/products'


fetch(dealProductsApi)                
.then((response) => response.json())
.then((data) => {
  
  const dealProducts = document.querySelector('.click-slider-1');
  const dealProduct = data.map((product) => {
     return `<div class="owl-item product-size">
                        <div class="item">
                          <a href=${product.link}>
                            <div class="item-label">
                              <span class="label-tragop">Trả góp 0%</span>
                            </div>
                            <div class="item-img">
                              <img src=${product.image} alt="">
                            </div>
                            <div class="result">
                              <p class="result-label">
                                <img src="./assets/img/icon/uu-dai-sinh-nhat.png" alt="">
                                <span>ƯU ĐÃI SINH NHẬT</span>
                              </p>
                            </div>
                            <h3>${product.name}</h3>
                            <strong class="price">
                              ${product.price}
                              <small>${product.sale}</small>
                            </strong>
                            <p class="vote">
                              <b>4.5</b>
                              <i class="star-size fa-solid fa-star"></i>
                              (50)
                            </p>
                          </a>
                        </div>
                    </div>`
                  }).join("")
                  console.log(dealProducts);
  // dealProducts.innerHTML = dealProduct
  
})