document.getElementById("hamburger-btn").addEventListener("click", () => {
  document.querySelector(".ham").classList.add("hamburgerListOpen");
});
document.querySelector(".itemBtn").addEventListener("click", () => {
  document.querySelector(".ham").classList.remove("hamburgerListOpen");
});

// WhatsApp ordering
const WHATSAPP_NUMBER = "916909372551"; // country code + number, no + or spaces

document.querySelectorAll(".order-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    let name, price;
    const card = btn.closest(".productCard");

    if (card) {
      name = card.querySelector(".product-name").textContent.trim();
      price = card.querySelector(".product-price").textContent.trim();
    } else {
      name = btn.dataset.name;
      price = btn.dataset.price;
    }

    const message = `Hi Bleedout! I'd like to order:\n${name} - ${price}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  });
});
