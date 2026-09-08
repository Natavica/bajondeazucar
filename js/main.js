const grid = document.querySelector("#productsGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const modal = document.querySelector("#productModal");
const modalImage = document.querySelector("#modalImage");
const modalImageWrap = document.querySelector("#modalImageWrap");

let filtroActual = "todos";

const categoriaNombre = {
  dulce: "Dulce",
  salado: "Salado",
  catering: "Catering",
  pedido: "A pedido"
};

function renderProductos() {
  const termino = searchInput.value.toLowerCase().trim();

  const filtrados = productos.filter(p => {
    const coincideFiltro =
      filtroActual === "todos" ||
      p.categoria === filtroActual ||
      (filtroActual === "pedido" && p.pedido);

    const texto = `${p.nombre} ${p.descripcion} ${p.categoria}`.toLowerCase();
    return coincideFiltro && texto.includes(termino);
  });

  grid.innerHTML = filtrados.map(p => `
    <article class="product-card" data-id="${p.id}" tabindex="0" aria-label="Ver ${p.nombre}">
      <div class="product-image">
        <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
        <div class="product-overlay"></div>
        <span class="zoom-label">⊕ Ver detalle</span>
      </div>
      <div class="product-info">
        <div class="product-meta">
          <span>${categoriaNombre[p.categoria]}</span>
          ${p.pedido ? "<span>A pedido</span>" : ""}
        </div>
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <div class="product-price">${p.precio}</div>
      </div>
    </article>
  `).join("");

  emptyState.hidden = filtrados.length !== 0;

  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => abrirModal(Number(card.dataset.id)));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") abrirModal(Number(card.dataset.id));
    });
  });
}

function cambiarFiltro(filtro) {
  filtroActual = filtro;
  document.querySelectorAll("[data-filter]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === filtro);
  });
  renderProductos();
}

document.querySelectorAll(".filter-btn, .category-card").forEach(btn => {
  btn.addEventListener("click", () => cambiarFiltro(btn.dataset.filter));
});

searchInput.addEventListener("input", renderProductos);

function abrirModal(id) {
  const p = productos.find(producto => producto.id === id);
  if (!p) return;

  modalImage.src = p.imagen;
  modalImage.alt = p.nombre;
  document.querySelector("#modalCategory").textContent = categoriaNombre[p.categoria];
  document.querySelector("#modalTitle").textContent = p.nombre;
  document.querySelector("#modalDescription").textContent = p.descripcion;
  document.querySelector("#modalIngredients").textContent = p.ingredientes;
  document.querySelector("#modalFormat").textContent = p.formato;
  document.querySelector("#modalPrice").textContent = p.precio;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function cerrarModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalImageWrap.classList.remove("zoomed");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-close-modal]").forEach(el => {
  el.addEventListener("click", cerrarModal);
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") cerrarModal();
});

// Zoom de imagen con posición del cursor
modalImageWrap.addEventListener("mousemove", e => {
  const rect = modalImageWrap.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  modalImageWrap.style.setProperty("--mx", `${x}%`);
  modalImageWrap.style.setProperty("--my", `${y}%`);
});

modalImageWrap.addEventListener("click", () => {
  modalImageWrap.classList.toggle("zoomed");
});

// Menú móvil
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const abierto = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", abierto);
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

renderProductos();
