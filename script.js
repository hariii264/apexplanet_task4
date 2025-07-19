const products = [
  {
    name: "Wireless Earbuds",
    category: "electronics",
    price: 1299,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdpcmVsZXNzJTIwZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Leather Jacket",
    category: "fashion",
    price: 3499,
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/10522812/2021/7/27/1bd65cb2-7511-4b81-ac00-03bf6ee8af671627373286341HIGHLANDERMenBrownSolidLeatherBikerJacket1.jpg"
  },
  {
    name: "Smartphone",
    category: "electronics",
    price: 14999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "T-Shirt",
    category: "fashion",
    price: 799,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT86cTnHRL0nsUqUdd3JrzmoZdcq7Kv73k9QUz3Xizv-X7ePlEymAq9tSR_LD3VC8hB9wWMVTm0Wchkz5RlDoqvq3yf6wm-lFEYrlc4EvHH65Z1ejqodLtBN8Q&usqp=CAc"
  },
  {
    name: "Novel - Mystery",
    category: "books",
    price: 499,
    image: "https://m.media-amazon.com/images/I/81jBRBKdx+L._UF1000,1000_QL80_.jpg"
  },
  {
    name: "Laptop",
    category: "electronics",
    price: 49999,
    image: "https://m.media-amazon.com/images/I/510uTHyDqGL._UF1000,1000_QL80_.jpg"
  },
  {
    name: "Backpack",
    category: "accessories",
    price: 1599,
    image: "https://www.fgear.in/cdn/shop/files/1_9822ae18-0551-41fa-8cc1-1745a1359531.jpg?v=1717826522&width=1946"
  },
  {
    name: "Running Shoes",
    category: "footwear",
    price: 2999,
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/30577225/2025/2/5/a19c0276-3672-47cd-82a7-81ad6f8f22fb1738761642840-Puma-Unisex-Conduct-Pro-Running-Shoes-8321738761642558-1.jpg"
  },
  {
    name: "Smartwatch",
    category: "electronics",
    price: 1999,
    image: "https://m.media-amazon.com/images/I/61GRy-zyB-L.jpg"
  },
  {
    name: "Leather Wallet",
    category: "accessories",
    price: 699,
    image: "https://www.kamalwatch.com/cdn/shop/products/1169814-fossilneutrachronographblackleatherwatch.jpg?v=1685439764"
  }
];

const productList = document.getElementById("product-list");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortBy = document.getElementById("sortBy");
const toggleTheme = document.getElementById("toggleTheme");

function renderProducts(filteredProducts) {
  productList.innerHTML = "";
  filteredProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-details">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <p>${product.category}</p>
      </div>
    `;
    productList.appendChild(card);
  });
}

function filterAndSortProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value.toLowerCase();
  const sortOption = sortBy.value;

  let filtered = products.filter((product) => {
    const productName = product.name.toLowerCase();
    const productCategory = product.category.toLowerCase();

    return (
      (productName.includes(searchTerm) || searchTerm === "") &&
      (selectedCategory === "" || productCategory === selectedCategory)
    );
  });

  if (sortOption === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

searchInput.addEventListener("input", filterAndSortProducts);
categoryFilter.addEventListener("change", filterAndSortProducts);
sortBy.addEventListener("change", filterAndSortProducts);

renderProducts(products);
