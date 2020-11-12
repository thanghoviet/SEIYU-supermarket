let products = ["Dưa hấu Japan", "Cà chua", "Rau Xà lách"];

function Product(img, name, price, kg) {
  this.img = img;
  this.name = name;
  this.price = price;
  this.kg = kg;

  this.kgButton = function () {
    let show = "";
    for (const value of this.kg) {
      show += `<button class="kg">${value}kg</button>`;
    }
    return show;
  };

  this.showPrice = function () {
    return parseInt(this.price).toLocaleString("vn-VN", {
      style: "currency",
      currency: "vnd",
    });
  };
}

let productList = [
  new Product("Shop-1.webp", "Dưa hấu", 22000, [3, 2, 1]),
  new Product("Shop-2.webp", "Cà chua", 50000, [3, 2, 1]),
  new Product("Shop-3.webp", "Trứng gà", 30000, [3, 2, 1]),
  new Product("Shop-4.webp", "Bông cải xanh", 5000, [,]),
  new Product("Shop-5.webp", "Gà nướng", 150000, [3, 2, 1]),
  new Product("Shop-6.webp", "Đậu nành", 50000, [3, 2, 1]),
  new Product("Shop-7.webp", "Bánh Nuts", 30000, [3, 2, 1]),
  new Product("Shop-8.webp", "Gạo", 90000, [3, 2, 1]),
  new Product("Shop-9.webp", "Nấm bào ngư", 80000, [3, 2, 1]),
  new Product("Shop-10.webp", "Khoai tây", 30000, [3, 2, 1]),
  new Product("Shop-11.webp", "Thịt bò áp chảo", 90000, [1, 0.5, 0.1]),
  new Product("Shop-12.png", "Cá hồi nướng khói", 80000, [1, 0.5, 0.1]),
  new Product("Shop-13.webp", "Thịt gà sông khói", 30000, [1, 0.5, 0.1]),
  new Product("Shop-14.png", "Bánh quy bơ", 30000, [3, 2, 1]),
  new Product("Shop-15.webp", "Bông cải xanh", 30000, [3, 2, 1]),
  new Product("Shop-16.webp", "Dưa Trắng", 30000, [3, 2, 1]),
  new Product("Shop-17.webp", "Cam", 60000, [3, 2, 1]),
  new Product("Shop-18.webp", "Táo", 50000, [3, 2, 1]),
  new Product("Shop-20.webp", "Nho việt", 200000, [3, 2, 1]),
  new Product("Shop-21.webp", "Cheri(Trứng ca)", 300000, [3, 2, 1]),
  // new Product("Shop-19.webp", "", 300000, [3, 2, 1]),
  new Product("Shop-22.webp", "Củ dền", 30000, [3, 2, 1]),
  // new Product("Shop-23.webp", "Quả cheri(trứng cá)", 300000, [3, 2, 1]),
  new Product("Shop-24.png", "Nho Mỹ", 3000000, [3, 2, 1]),
  // new Product("Shop-23.webp", "", 300000, [3, 2, 1]),
  new Product("Shop-25.png", "Lúa mỳ", 400000, [3, 2, 1]),
  // new Product("Shop-26.webp", "", 300000, [3, 2, 1]),
  // new Product("Shop-27.webp", "", 300000, [3, 2, 1]),
  new Product("Shop-28.png", "Đậu nành", 30000, [3, 2, 1]),
  new Product("Shop-29.webp", "Bánh mỳ ổ", 120000, []),
  new Product("Shop-30.png", "Bánh quy giòn", 3000, []),
];

function showProduct() {
  let tbProducts = document.getElementById("products-container");
  tbProducts.innerHTML = "";
  for (let item of productList) {
    tbProducts.innerHTML += `<div class="tbProduct">
    <img src="/image/sản phẩm/${item.img}" />
    <div>${item.kgButton()}</div>
        <h3 id="name">${item.name}</h3>
        <span>${item.showPrice()}</span>
        <br />
        <button>Mua Hàng</button>
        </div>`;
  }
}

showProduct();
