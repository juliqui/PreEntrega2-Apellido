
const productos = [
    { nombre: "Camiseta", precio: 20, descripcion: "Camiseta de algodón." },
    { nombre: "Pantalones", precio: 30, descripcion: "Pantalones Sasteros." },
    { nombre: "Zapatos", precio: 40, descripcion: "Borcegos de cuero." },
    { nombre: "Sombrero", precio: 10, descripcion: "Sombrero." }
  ];
  
    const carrito = [];
  
 
  function agregarProductoAlCarrito(producto, cantidad) {
    carrito.push({ producto, cantidad });
  }
  

  function calcularPrecioTotal() {
    let total = 0;
    for (const item of carrito) {
      total += item.producto.precio * item.cantidad;
    }
    return total;
  }
  

  function mostrarCatalogo() {
    console.log("Productos disponibles:");
    console.log("ID | Nombre       | Precio | Descripción");
    for (let i = 0; i < productos.length; i++) {
      console.log(`${i + 1}  | ${productos[i].nombre} | $${productos[i].precio}    | ${productos[i].descripcion}`);
    }
  }
  
 
  function main() {
    console.log("¡Bienvenido a nuestra tienda en línea!");
    
    mostrarCatalogo(); 
  
    while (true) {
      console.log("Para agregar un producto al carrito, ingrese el ID del producto.");
      console.log("Para finalizar la compra, ingrese 0.");
  
      const opcion = parseInt(prompt("Ingrese el ID del producto que desea comprar:"));
  
      if (opcion === 0) {
        break;
      }
  
      if (opcion >= 1 && opcion <= productos.length) {
        const cantidad = parseInt(prompt(`¿Cuántos ${productos[opcion - 1].nombre} desea comprar?`));
        if (!isNaN(cantidad) && cantidad > 0) {
          agregarProductoAlCarrito(productos[opcion - 1], cantidad);
          console.log(`Se han agregado ${cantidad} ${productos[opcion - 1].nombre}(s) al carrito.`);
        } else {
          console.log("Cantidad inválida. Intente nuevamente.");
        }
      } else {
        console.log("Opción inválida. Intente nuevamente.");
      }
    }
  
    const precioTotal = calcularPrecioTotal();
    console.log("Resumen de la compra:");
    for (const item of carrito) {
      console.log(`${item.cantidad} ${item.producto.nombre}(s) - Precio unitario: $${item.producto.precio}`);
    }
    console.log(`Precio total de su compra: $${precioTotal}`);
    alert(`Precio total de su compra: $${precioTotal}`);
  }
  
  main();
  