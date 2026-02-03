document.addEventListener("DOMContentLoaded", () => {

    const listaCarrito = document.getElementById("lista-carrito");
    const totalSpan = document.getElementById("total");

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    actualizarCarrito();

    document.addEventListener("click", (e) => {

        if (e.target.classList.contains("agregar")) {

            const boton = e.target;

            const producto = {
                id: parseInt(boton.dataset.id),
                nombre: boton.dataset.nombre,
                precio: parseFloat(boton.dataset.precio)
            };

            carrito.push(producto);
            guardarCarrito();
            actualizarCarrito();
        }

        if (e.target.classList.contains("eliminar")) {
            const index = e.target.dataset.index;
            carrito.splice(index, 1);
            guardarCarrito();
            actualizarCarrito();
        }
    });

    function actualizarCarrito() {
        listaCarrito.innerHTML = "";
        let total = 0;

        carrito.forEach((prod, index) => {
            total += prod.precio;

            const li = document.createElement("li");
            li.className = "flex justify-between items-center mb-2";

            li.innerHTML = `
                <span>${prod.nombre} - $${prod.precio}</span>
                <button class="eliminar text-red-600" data-index="${index}">
                    ❌ Quitar producto
                </button>
            `;

            listaCarrito.appendChild(li);
        });

        totalSpan.textContent = total.toFixed(2);
    }

    function guardarCarrito() {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
});
