document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("productos-container");
    const buscador = document.getElementById("buscador");
    const botonesFiltro = document.querySelectorAll(".filtro");

    let productos = [];

    // Cargar productos desde JSON
    fetch("Public/data/productos.json")
        .then(respuesta => respuesta.json())
        .then(data => {
            productos = data;
            mostrarProductos(productos);
        })
        .catch(error => {
            console.error("Error cargando productos:", error);
        });

    function mostrarProductos(lista) {
        contenedor.innerHTML = "";

        lista.forEach(prod => {
            const card = document.createElement("article");
            card.className = "producto-card p-4 bg-white rounded-lg shadow-md text-center";
            card.dataset.categoria = prod.categoria;

            card.innerHTML = `
                <img src="${prod.imagen}" class="mx-auto mb-4" width="180">
                <h3 class="text-xl font-semibold mb-2">${prod.nombre}</h3>
                <p class="mb-2">${prod.descripcion}</p>
                <p class="font-bold mb-2">$${prod.precio}</p>

                <button 
                    class="agregar bg-green-500 text-white px-4 py-2 rounded"
                    data-id="${prod.id}"
                    data-nombre="${prod.nombre}"
                    data-precio="${prod.precio}">
                    Agregar al carrito
                </button>
            `;

            contenedor.appendChild(card);
        });
    }

    // Buscador
    buscador.addEventListener("input", () => {
        const texto = buscador.value.toLowerCase();
        const filtrados = productos.filter(p =>
            p.nombre.toLowerCase().includes(texto)
        );
        mostrarProductos(filtrados);
    });

    // Filtros por categoría
    botonesFiltro.forEach(boton => {
        boton.addEventListener("click", () => {
            const categoria = boton.dataset.categoria;

            if (categoria === "todos") {
                mostrarProductos(productos);
            } else {
                const filtrados = productos.filter(
                    p => p.categoria === categoria
                );
                mostrarProductos(filtrados);
            }
        });
    });
});
