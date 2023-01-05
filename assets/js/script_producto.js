let productos = [
    {
        id: 1,
        nombre: "Producto 1",
        descripcion: "Descripción producto 1",
        precio: 1000,
        imagen: "https://picsum.photos/id/686/600/400",
        descuento: 0
    },
    {
        id: 2,
        nombre: "Producto 2",
        descripcion: "Descripción producto 2",
        precio: 2000,
        imagen: "https://picsum.photos/id/687/600/400",
        descuento: 500
    },
    {
        id: 3,
        nombre: "Producto 3",
        descripcion: "Descripción producto 3",
        precio: 3000,
        imagen: "https://picsum.photos/id/688/600/400",
        descuento: 1000
    },
    {
        id: 4,
        nombre: "Producto 4",
        descripcion: "Descripción producto 4",
        precio: 4000,
        imagen: "https://picsum.photos/id/689/600/400",
        descuento: 700
    },
]

let parametro = new URLSearchParams(location.search)
console.log(parametro.get("id")); //obtenemos los ids de los productos
let idProducto = parametro.get("id");

let found= productos.find(producto => producto.id == idProducto);


if(found){
    document.querySelector(".detalle-producto").innerHTML = `
        <div class="card mb-3 mx-auto" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${found.imagen}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${found.nombre}</h5>
                    <p class="card-text">${found.descripcion}</p>
                    <p class="card-text"><small class="text-muted">Precio $ ${found.precio} </small></p>
                    </div>
                </div>
            </div>
        </div>
`
}else{
    document.querySelector(".detalle-producto").innerHTML = `
    <h2 class='text-center'>PRODUCTO NO ENCONTRADO</h2>
    <a href="/" class="btn btn-danger d-block text-center m-auto" style="width:200px;'">Volver a la página principal</a>
    `
}

