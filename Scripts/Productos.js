// Array con todos los Cursos de Salud
const cursos = [
  { id: 1, nombre: "Salud - Agentes Quimicos #1", imagen: "../Imagenes/Cursos/curso1.jpg", descripcion: "Hecho de caña flecha, tejido a mano.", Valor: "Valor: $270000", Precio: 270000 },
  { id: 2, nombre: "Salud - Aiepi #2", imagen: "../Imagenes/Cursos/curso2.jpg", descripcion: "Diseño tradicional, tejido artesanalmente.", Valor: "Valor: $270000", Precio: 270000 },
  { id: 3, nombre: "Salud - RCP #3", imagen: "../Imagenes/Cursos/curso3.jpg", descripcion: "Alta calidad y elegancia.", Valor: "Valor: $240000", Precio: 240000 },
  { id: 4, nombre: "Salud - Soporte Vital Básico #4", imagen: "../Imagenes/Cursos/curso4.jpg", descripcion: "Alta calidad y elegancia.", Valor: "Valor: $300000", Precio: 300000 },
  { id: 5, nombre: "Salud - Soporte Vital Avanzado #5", imagen: "../Imagenes/Cursos/curso5.jpg", descripcion: "Alta calidad y elegancia.", Valor: "Valor: $250000", Precio: 250000 },
  { id: 6, nombre: "Salud - Victimas de Violencia #6", imagen: "../Imagenes/Cursos/curso6.jpg", descripcion: "Alta calidad y elegancia.", Valor: "Valor: $200000", Precio: 200000 },
  { id: 7, nombre: "Sistemas - Windows Básico #7", imagen: "../Imagenes/Cursos/curso7.jpg", descripcion: "Alta calidad y elegancia.", Valor: "Valor: $150000", Precio: 150000 },
  { id: 8, nombre: "Sistemas - Word #8", imagen: "../Imagenes/Cursos/curso8.jpg", descripcion: "Alta calidad y elegancia.", Valor: "Valor: $100000", Precio: 100000 },
  { id: 9, nombre: "Sistemas - Excel #9", imagen: "../Imagenes/Cursos/curso9.jpg", descripcion: "Alta calidad y elegancia.", Valor: "Valor: $100000", Precio: 100000 },
  { id: 10, nombre: "Sistemas - Power BI #10", imagen: "../Imagenes/Cursos/curso10.jpg", descripcion: "Alta calidad y elegancia.", Valor: "Valor: $200000", Precio: 200000 },
  { id: 11, nombre: "Sistemas - Sql Server #11", imagen: "../Imagenes/Cursos/curso11.jpg", descripcion: "Alta calidad y elegancia.", Valor: "Valor: $250000", Precio: 250000 },
  { id: 12, nombre: "Sistemas - Access #12", imagen: "../Imagenes/Cursos/curso12.jpg", descripcion: "Alta calidad y elegancia.", Valor: "Valor: $150000", Precio: 150000 },
];

// Array con todos las consultorias
const consultorias = [
  { id: 1, nombre: "Facturación en Salud #1", imagen: "../Imagenes/Consultorias/consultoria1.jpg", descripcion: "Contamos con un amplio equipo de colaboradores expertos en este tema.", Valor: "Valor: Por convenir", Precio: 0 },
  { id: 2, nombre: "Facturación de Servicios Públicos #2", imagen: "../Imagenes/Consultorias/consultoria2.jpg", descripcion: "Contamos con un amplio equipo de colaboradores expertos en este tema.", Valor: "Valor: Por convenir", Precio: 0 },
  { id: 3, nombre: "Facturación Comercial #3", imagen: "../Imagenes/Consultorias/consultoria3.jpg", descripcion: "Contamos con un amplio equipo de colaboradores expertos en este tema.", Valor: "Valor: Por convenir", Precio: 0 },
];

// Array con todos los Equipos de Computo
const equipos =[
  { id: 1, nombre: "equipo #1", imagen: "../Imagenes/Equipos/equipo1.jpg", descripcion: "Equipos de la Mejor Calidad.", Valor: "Valor: $165000", Precio: 165000 },
  { id: 2, nombre: "equipo #2", imagen: "../Imagenes/Equipos/equipo2.jpg", descripcion: "Equipos de la Mejor Calidad.", Valor: "Valor: $150000", Precio: 150000 },
  { id: 3, nombre: "equipo #3", imagen: "../Imagenes/Equipos/equipo3.jpg", descripcion: "Equipos de la Mejor Calidad.", Valor: "Valor: $180000", Precio: 180000 },
  { id: 4, nombre: "equipo #4", imagen: "../Imagenes/Equipos/equipo4.jpg", descripcion: "Equipos de la Mejor Calidad.", Valor: "Valor: $170000", Precio: 170000 },
  { id: 5, nombre: "equipo #5", imagen: "../Imagenes/Equipos/equipo5.jpg", descripcion: "Equipos de la Mejor Calidad.", Valor: "Valor: $175000", Precio: 175000 },
  { id: 6, nombre: "equipo #6", imagen: "../Imagenes/Equipos/equipo6.jpg", descripcion: "Equipos de la Mejor Calidad.", Valor: "Valor: $173000", Precio: 173000 },
  { id: 7, nombre: "equipo #7", imagen: "../Imagenes/Equipos/equipo7.jpg", descripcion: "Equipos de la Mejor Calidad.", Valor: "Valor: $185000", Precio: 185000 },
  { id: 8, nombre: "equipo #8", imagen: "../Imagenes/Equipos/equipo8.jpg", descripcion: "Equipos de la Mejor Calidad.", Valor: "Valor: $140000", Precio: 140000 },
  { id: 9, nombre: "equipo #9", imagen: "../Imagenes/Equipos/equipo9.jpg", descripcion: "Equipos de la Mejor Calidad.", Valor: "Valor: $150000", Precio: 150000 },
  { id: 10, nombre: "equipo #10", imagen: "../Imagenes/Equipos/equipo10.jpg", descripcion: "Equipos de la Mejor Calidad.", Valor: "Valor: $175000", Precio: 175000 },
];

// Array con todos los accesorios
const accesorios =[
  { id: 1, nombre: "Accesorio #1", imagen: "../Imagenes/Accesorios/accesorio1.jpg", descripcion: "Accesorios de Calidad.", Valor: "Valor: $15000", Precio: 15000 },
  { id: 2, nombre: "Accesorio #2", imagen: "../Imagenes/Accesorios/accesorio2.jpg", descripcion: "Accesorios de Calidad.", Valor: "Valor: $20000", Precio: 20000 },
  { id: 3, nombre: "Accesorio #3", imagen: "../Imagenes/Accesorios/accesorio2.jpg", descripcion: "Accesorios de Calidad.", Valor: "Valor: $30000", Precio: 30000 },
  { id: 4, nombre: "Accesorio #4", imagen: "../Imagenes/Accesorios/accesorio3.jpg", descripcion: "Accesorios de Calidad.", Valor: "Valor: $25000", Precio: 25000 },
  { id: 5, nombre: "Accesorio #5", imagen: "../Imagenes/Accesorios/accesorio4.jpg", descripcion: "Accesorios de Calidad.", Valor: "Valor: $18000", Precio: 18000 },
  { id: 6, nombre: "Accesorio #6", imagen: "../Imagenes/Accesorios/accesorio5.jpg", descripcion: "Accesorios de Calidad.", Valor: "Valor: $25000", Precio: 25000 },
  { id: 7, nombre: "Accesorio #7", imagen: "../Imagenes/Accesorios/accesorio6.jpg", descripcion: "Accesorios de Calidad.", Valor: "Valor: $23000", Precio: 23000 },
  { id: 8, nombre: "Accesorio #8", imagen: "../Imagenes/Accesorios/accesorio7.jpg", descripcion: "Accesorios de Calidad.", Valor: "Valor: $27000", Precio: 27000 },
  { id: 9, nombre: "Accesorio #9", imagen: "../Imagenes/Accesorios/accesorio8.jpg", descripcion: "Accesorios de Calidad.", Valor: "Valor: $18000", Precio: 18000 },
  { id: 10, nombre: "Accesorio #10", imagen: "../Imagenes/Accesorios/accesorio9.jpg", descripcion: "Accesorios de Calidad.", Valor: "Valor: $20000", Precio: 20000 },
  { id: 11, nombre: "Accesorio #11", imagen: "../Imagenes/Accesorios/accesorio10.jpg", descripcion: "Accesorios de Calidad.", Valor: "Valor: $13000", Precio: 13000 },
];


// Función para mostrar los cursos
function mostrarcursos() {
  const contenedor = document.getElementById('contenedor-cursos');
  
  if (!contenedor) {
    console.error('No se encontró el contenedor para cursos.');
    return;
  }

  cursos.forEach(Curso => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
      <div class="card h-100">
        <img src="${Curso.imagen}" class="card-img-top" alt="${Curso.nombre}" style="height:250px; object-fit:cover;">
        <div class="card-body">
          <h5 class="card-title">${Curso.nombre}</h5>
          <p class="card-text">${Curso.descripcion}</p>
          <p class="card-text">${Curso.Valor}</p>
          <button class="btn btn-success agregar-carrito"
                  data-id="${Curso.id}"
                  data-nombre="${Curso.nombre}"
                  data-precio="${Curso.Precio}"
                  data-imagen="${Curso.imagen}">
            Agregar al carrito
          </button>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

// Función para mostrar las consultorias
function mostrarConsultorias() {
  const contenedor = document.getElementById('contenedor-consultorias');
  
  if (!contenedor) {
    console.error('No se encontró el contenedor para consultorias.');
    return;
  }

  consultorias.forEach(consultoria => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
      <div class="card h-100">
        <img src="${consultoria.imagen}" class="card-img-top" alt="${consultoria.nombre}" style="height:250px; object-fit:cover;">
        <div class="card-body">
          <h5 class="card-title">${consultoria.nombre}</h5>
          <p class="card-text">${consultoria.descripcion}</p>
          <p class="card-text">${consultoria.Valor}</p>
          <button class="btn btn-success agregar-carrito"
                  data-id="${consultoria.id}"
                  data-nombre="${consultoria.nombre}"
                  data-precio="${consultoria.Precio}"
                  data-imagen="${consultoria.imagen}">
            Agregar al carrito
          </button>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

// Función para mostrar los equipos
function mostrarEquipos() {
  const contenedor = document.getElementById('contenedor-equipos');
  
  if (!contenedor) {
    console.error('No se encontró el contenedor para equipos.');
    return;
  }

  equipos.forEach(equipo => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
      <div class="card h-100">
        <img src="${equipo.imagen}" class="card-img-top" alt="${equipo.nombre}" style="height:250px; object-fit:cover;">
        <div class="card-body">
          <h5 class="card-title">${equipo.nombre}</h5>
          <p class="card-text">${equipo.descripcion}</p>
          <p class="card-text">${equipo.Valor}</p>
          <button class="btn btn-success agregar-carrito"
                  data-id="${equipo.id}"
                  data-nombre="${equipo.nombre}"
                  data-precio="${equipo.Precio}"
                  data-imagen="${equipo.imagen}">
            Agregar al carrito
          </button>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

// Función para mostrar los accesorios
function mostrarAccesorios() {
  const contenedor = document.getElementById('contenedor-accesorios');
  
  if (!contenedor) {
    console.error('No se encontró el contenedor para accesorios.');
    return;
  }

  accesorios.forEach(accesorio => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
      <div class="card h-100">
        <img src="${accesorio.imagen}" class="card-img-top" alt="${accesorio.nombre}" style="height:250px; object-fit:cover;">
        <div class="card-body">
          <h5 class="card-title">${accesorio.nombre}</h5>
          <p class="card-text">${accesorio.descripcion}</p>
          <p class="card-text">${accesorio.Valor}</p>
          <button class="btn btn-success agregar-carrito"
                  data-id="${accesorio.id}"
                  data-nombre="${accesorio.nombre}"
                  data-precio="${accesorio.Precio}"
                  data-imagen="${accesorio.imagen}">
            Agregar al carrito
          </button>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

// Llamar la función al cargar el DOM
document.addEventListener('DOMContentLoaded', 
  mostrarcursos(), 
  mostrarConsultorias(), 
  mostrarEquipos(),
  mostrarAccesorios()
);
