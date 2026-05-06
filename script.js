// Gọi API backend Render để lấy dữ liệu từ MongoDB Atlas
fetch("https://learnapi-ey8d.onrender.com/api/products") // thay bằng URL backend của bạn
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("product-list");
    products.forEach(p => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${p.image_url}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>Giá: ${p.price} VNĐ</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error("Lỗi:", err));
