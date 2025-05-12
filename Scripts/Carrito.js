let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('agregar-carrito')) {
      const id = parseInt(e.target.getAttribute('data-id'));
      const nombre = e.target.getAttribute('data-nombre');
      const precio = parseFloat(e.target.getAttribute('data-precio'));
      const imagen = e.target.getAttribute('data-imagen');
  
      const producto = {
        id,
        nombre,
        Precio: precio,
        imagen
      };
  
      carrito.push(producto);
      guardarCarrito();
      actualizarCarrito();
      actualizarContadorCarrito();
    }
});

function actualizarCarrito() {
    const carritoElemento = document.getElementById('carrito');
    if (!carritoElemento) return;
  
    carritoElemento.innerHTML = '';
  
    carrito.forEach((item, index) => {
      const li = document.createElement('li');
      // li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
      li.classList.add('list-group-item');
      li.innerHTML = `
        <div class = "d-flex justify-content-between align-item-center">
          <div class="d-flex align-items-center">
            <img src="${item.imagen}" alt="${item.nombre}" width="60" class="me-3 rounded">
            <div>
              <div><strong>${item.nombre}</strong></div>
              <div>$${item.Precio.toFixed(0)}</div>
            </div>
          </div>
        <button class="btn btn-danger btn-sm eliminar-item" data-index="${index}">X</button>
      </div>
      `;
      carritoElemento.appendChild(li);
    });
  
    // Mostrar total opcionalmente
    const totalElemento = document.getElementById('total-carrito');
    if (totalElemento) {
      const total = carrito.reduce((sum, item) => sum + parseFloat(item.Precio), 0);
      totalElemento.textContent = `${total.toFixed(2)}`;
    }

    // Actualizar contador del carrito en el ícono del header
    const contadorElemento = document.getElementById('contador-carrito');
    if (contadorElemento) {
      contadorElemento.textContent = carrito.length;
    }
}

// Guardar en localStorage
function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Eliminar del carrito
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('eliminar-item')) {
    const index = parseInt(e.target.getAttribute('data-index'));
    carrito.splice(index, 1);
    guardarCarrito();
    actualizarCarrito();
  }
});

// Vaciar todo el carrito
const btnVaciar = document.getElementById('vaciar-carrito');
if (btnVaciar) {
  btnVaciar.addEventListener('click', function() {
    carrito = [];
    guardarCarrito();
    actualizarCarrito();
  });
}

function mostrarCarrito() {
  window.location.href = "../hojas/CarroCompras.html";
}

function actualizarContadorCarrito() {
  const contador = document.getElementById('contador-carrito');
  if (contador) {
    contador.textContent = carrito.length;
  }
}

// Actualizar carrito al cargar la página
document.addEventListener('DOMContentLoaded', 
  () => { actualizarCarrito(); actualizarContadorCarrito();

});

