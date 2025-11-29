const products = document.querySelectorAll(".product");

products.forEach(product => {
  // Update spotlight position on mouse move
  product.addEventListener("mousemove", (e) => {
    const rect = product.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    product.style.setProperty("--mouse-x", (x / product.clientWidth) * 100 + "%");
    product.style.setProperty("--mouse-y", (y / product.clientHeight) * 100 + "%");
  });

  // Hover: activate spotlight, dim others
  product.addEventListener("mouseenter", () => {
    product.classList.add("active");
    products.forEach(p => {
      if (p !== product) p.classList.add("dim");
    });
  });

  // Leave: remove spotlight, restore others
  product.addEventListener("mouseleave", () => {
    product.classList.remove("active");
    products.forEach(p => p.classList.remove("dim"));
  });
});




// .product {
//   position: relative; 
//   background: transparent;
//   padding: 1rem;
//   border-radius: 0.6rem;
//   overflow: hidden;
//   transition: opacity 0.3s ease;
// }

// /* Spotlight layer on the whole product */
// .product::after {
//   content: "";
//   position: absolute;
//   inset: 0;
//   pointer-events: none;

//   background: radial-gradient(
//     circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
//     rgba(255, 255, 255, 0.45) 0%,
//     rgba(255, 255, 255, 0.25) 30%,
//     transparent 60%
//   );

//   opacity: 0;
//   transition: opacity 0.25s ease-out;
//   z-index: 1;
// }

// /* Active product gets spotlight */
// .product.active::after {
//   opacity: 1;
// }

// /* Dim other products */
// .product.dim {
//   opacity: 0.1;
// }