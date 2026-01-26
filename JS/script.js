//Búsqueda dinámica por nombre
const buscador = document.getElementById("buscador");
const productos = document.querySelectorAll(".producto");

buscador.addEventListener("keyup", () => {
    const texto = buscador.value.toLowerCase();
    productos.forEach(producto => {
        const nombre = producto.querySelector("h3").textContent.toLowerCase();
        producto.style.display = nombre.includes(texto) ? "block" : "none";
    });
});

//Filtrar por categoría
const botones = document.querySelectorAll(".filtro");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const categoria = boton.getAttribute("data-categoria");
        productos.forEach(producto => {
            if(categoria === "todos" || producto.getAttribute("data-categoria") === categoria){
                producto.style.display = "block";
            } else {
                producto.style.display = "none";
            }
        });
    });
});

// Resaltar producto 
productos.forEach(producto => {
    producto.addEventListener("click", () => {
        productos.forEach(p => p.classList.remove("bg-yellow-100"));
        producto.classList.add("bg-yellow-100");
        alert(`Has seleccionado: ${producto.querySelector("h3").textContent}`);
    });
});
