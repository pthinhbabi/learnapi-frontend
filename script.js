// Gọi API backend trên Render
fetch("https://learnapi-ey8d.onrender.com/api/products") // thay bằng URL backend của bạn
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("products");
    data.forEach(p => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <h2>${p.name}</h2>
        <p>Giá: ${p.price}</p>
        <img src="${p.image_url}" alt="${p.name}">
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error("Lỗi:", err));
