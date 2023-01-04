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

//AQUÍ RECORREMOS CADA UNO DE LOS PRODUCTOS DENTRO DE ARRAY Y LOS CARGAMOS AL TEMPLATE.

let template = "";

for (let index = 0; index < productos.length; index++) {
    let producto = productos[index];
    template += `
                <div class="col-12 col-md-6 col-lg-4">
                        <div class="card m-auto my-3" style="width: 18rem;">
                            <img src="${producto.imagen}" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">${producto.nombre}</h5>
                              <p class="card-text">${producto.descripcion}</p>
                              <p class="card-text">Precio Normal: $${producto.precio}</p>
                              <p class="card-text">Descuento: $${producto.descuento}</p>
                              <p class="card-text">Precio final: $${producto.precio - producto.descuento}</p>
                            </div>
                            <div class="card-body">
                              <a href="#" class="card-link btn btn-primary">Agregar al carro</a>
                              <a href="#" class="card-link btn btn-success" data-id='${producto.id}'>Ver más</a>
                            </div>
                          </div>
                </div>
`
}


//AQUÍ CARGAMOS EL TEMPLATE QUE ACUMULA EL CÓDIGO HTML DE TODOS LOS PRODUCTOS
let contedorProductos = document.querySelector("#productos .contenedor-productos .row");

contedorProductos.innerHTML = template;



