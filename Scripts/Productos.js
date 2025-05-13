// Array con todos los Cursos de Salud
const cursos = [
  { id: 1, nombre: "Salud - Agentes Quimicos #1", imagen: "../Imagenes/Cursos/curso1.jpg", descripcion: "Curso Online Sincronico y Asincronico 60 horas Certificadas.", Valor: "Valor: $270.000", Precio: 270000 },
  { id: 2, nombre: "Salud - Aiepi #2", imagen: "../Imagenes/Cursos/curso2.jpg", descripcion: "Curso Online Sincronico y Asincronico 60 horas Certificadas", Valor: "Valor: $270.000", Precio: 270000 },
  { id: 3, nombre: "Salud - RCP #3", imagen: "../Imagenes/Cursos/curso3.jpg", descripcion: "Curso Online Sincronico y Asincronico 60 horas Certificadas.", Valor: "Valor: $240.000", Precio: 240000 },
  { id: 4, nombre: "Salud - Soporte Vital Básico #4", imagen: "../Imagenes/Cursos/curso4.jpg", descripcion: "Curso Online Sincronico y Asincronico 60 horas Certificadas.", Valor: "Valor: $300.000", Precio: 300000 },
  { id: 5, nombre: "Salud - Soporte Vital Avanzado #5", imagen: "../Imagenes/Cursos/curso5.jpg", descripcion: "Curso Online Sincronico y Asincronico 60 horas Certificadas.", Valor: "Valor: $250.000", Precio: 250000 },
  { id: 6, nombre: "Salud - Victimas de Violencia #6", imagen: "../Imagenes/Cursos/curso6.jpg", descripcion: "Curso Online Sincronico y Asincronico 60 horas Certificadas.", Valor: "Valor: $200.000", Precio: 200000 },
  { id: 7, nombre: "Sistemas - Windows Básico #7", imagen: "../Imagenes/Cursos/curso7.jpg", descripcion: "Curso Online Sincronico y Asincronico 120 horas Certificadas.", Valor: "Valor: $350.000", Precio: 350000 },
  { id: 8, nombre: "Sistemas - Word #8", imagen: "../Imagenes/Cursos/curso8.jpg", descripcion: "Curso Online Sincronico y Asincronico 40 horas Certificadas.", Valor: "Valor: $150.000", Precio: 150000 },
  { id: 9, nombre: "Sistemas - Excel #9", imagen: "../Imagenes/Cursos/curso9.jpg", descripcion: "Curso Online Sincronico y Asincronico 40 horas Certificadas.", Valor: "Valor: $150.000", Precio: 150000 },
  { id: 10, nombre: "Sistemas - Power BI #10", imagen: "../Imagenes/Cursos/curso10.jpg", descripcion: "Curso Online Sincronico y Asincronico 40 horas Certificadas.", Valor: "Valor: $200.000", Precio: 200000 },
  { id: 11, nombre: "Sistemas - Sql Server #11", imagen: "../Imagenes/Cursos/curso11.jpg", descripcion: "Curso Online Sincronico y Asincronico 40 horas Certificadas.", Valor: "Valor: $200.000", Precio: 200000 },
  { id: 12, nombre: "Sistemas - Access #12", imagen: "../Imagenes/Cursos/curso12.jpg", descripcion: "Curso Online Sincronico y Asincronico 40 horas Certificadas.", Valor: "Valor: $200.000", Precio: 200000 },
];

// Array con todos las consultorias
const consultorias = [
  { id: 1, nombre: "Facturación en Salud #1", imagen: "../Imagenes/Consultorias/consultoria1.jpg", descripcion: "Contamos con un amplio equipo de colaboradores expertos en este tema.", Valor: "Valor: Por convenir", Precio: 0 },
  { id: 2, nombre: "Facturación de Servicios Públicos #2", imagen: "../Imagenes/Consultorias/consultoria2.jpg", descripcion: "Contamos con un amplio equipo de colaboradores expertos en este tema.", Valor: "Valor: Por convenir", Precio: 0 },
  { id: 3, nombre: "Facturación Comercial #3", imagen: "../Imagenes/Consultorias/consultoria3.jpg", descripcion: "Contamos con un amplio equipo de colaboradores expertos en este tema.", Valor: "Valor: Por convenir", Precio: 0 },
];

// Array con todos los Equipos de Computo
const equipos =[
  { id: 1, nombre: "equipo #1", imagen: "../Imagenes/Equipos/equipo1.jpg", descripcion: "Lenovo Thinksystem ST250 V3 Intel Xeon E-2468 32GB 4 TB.", Valor: "Valor: $4.799.000", Precio: 4799000 },
  { id: 2, nombre: "equipo #2", imagen: "../Imagenes/Equipos/equipo2.jpg", descripcion: "Servidor Lenovo St50 V2 Xeon E2324g 16gb 2tb.", Valor: "Valor: $5.999.999", Precio: 5999999 },
  { id: 3, nombre: "equipo #3", imagen: "../Imagenes/Equipos/equipo3.jpg", descripcion: "Servidor Lenovo Ts440 Intel Xeon E3 1226 V3 Ram 32gb 1tb Ssd (Usado).", Valor: "Valor: $1.300.000", Precio: 1300000 },
  { id: 4, nombre: "equipo #4", imagen: "../Imagenes/Equipos/equipo4.jpg", descripcion: "Servidor Lenovo Thinkserver Ts150 Xeon / Ram 32gb /disco 2tb (Usado).", Valor: "Valor: $2.100.000", Precio: 2100000 },
  { id: 5, nombre: "equipo #5", imagen: "../Imagenes/Equipos/equipo5.jpg", descripcion: "Servidor Lenovo Xeon 657 Ram 32 Gb DD 1 TB SD", Valor: "Valor: $2.874.000", Precio: 2874000 },
  { id: 6, nombre: "equipo #6", imagen: "../Imagenes/Equipos/equipo6.jpg", descripcion: "Portatil Dell Latitude 14 pulgadas Procesador Intel Core I5, DD 512 Gb, 8 Gb RAM.", Valor: "Valor: $874.900", Precio: 874000},
  { id: 7, nombre: "equipo #7", imagen: "../Imagenes/Equipos/equipo7.jpg", descripcion: "Portatil Lenovo 14 pulgadas procesador Core I5, 8 Gb Ram, DD 256 SD.", Valor: "Valor: $1.499.900", Precio: 1499900 },
  { id: 8, nombre: "equipo #8", imagen: "../Imagenes/Equipos/equipo8.jpg", descripcion: "Portatil Laptop Lenovo Thinkpad Twist .", Valor: "Valor: $849.000", Precio: 849000 },
  { id: 9, nombre: "equipo #9", imagen: "../Imagenes/Equipos/equipo9.jpg", descripcion: "Portatil Lenovo Thinkpad T440P USADO.", Valor: "Valor: $1.049.000", Precio: 1049000 },
];

// Array con todos los Softwares
const programas =[
  { id: 1, nombre: "Software #1", imagen: "../Imagenes/Softwares/Software1.jpg", descripcion: "Windows 11 Pro.", Valor: "Valor: $55.000", Precio: 55000 },
  { id: 2, nombre: "Software #2", imagen: "../Imagenes/Softwares/Software2.jpg", descripcion: "Windows Server 2019.", Valor: "Valor: $20.000", Precio: 20000 },
  { id: 3, nombre: "Software #3", imagen: "../Imagenes/Softwares/Software3.jpg", descripcion: "Windows Server 2024.", Valor: "Valor: $30.000", Precio: 30000 },
  { id: 4, nombre: "Software #4", imagen: "../Imagenes/Softwares/Software4.jpg", descripcion: "Office 2024 Pro plus.", Valor: "Valor: $25.000", Precio: 25000 },
  { id: 5, nombre: "Software #5", imagen: "../Imagenes/Softwares/Software5.jpg", descripcion: "Office 365 - Arriendo anual.", Valor: "Valor: $18.000", Precio: 18000 },
  { id: 6, nombre: "Software #6", imagen: "../Imagenes/Softwares/Software6.jpg", descripcion: "Avast Internet Security.", Valor: "Valor: $25.000", Precio: 25000 },
  { id: 7, nombre: "Software #7", imagen: "../Imagenes/Softwares/Software7.jpg", descripcion: "Ripslab - Software para IPS (Salud) - Alquiler Mensual.", Valor: "Valor: $3.000.000", Precio: 3000000 },
  { id: 8, nombre: "Software #8", imagen: "../Imagenes/Softwares/Software8.jpg", descripcion: "Sysfac - Software para ESP (Servicios Públicos) - Alquiler Mensual.", Valor: "Valor: $1.500.000", Precio: 1500000 },
  { id: 9, nombre: "Software #9", imagen: "../Imagenes/Softwares/Software9.jpg", descripcion: "Credisys - Software Comercial (Almacenes).", Valor: "Valor: $800.000", Precio: 800000 },
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

// Función para mostrar los Softwares
function mostrarProgramas() {
  const contenedor = document.getElementById('contenedor-programas');
  
  if (!contenedor) {
    console.error('No se encontró el contenedor para Softwares.');
    return;
  }

  programas.forEach(programa => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
      <div class="card h-100">
        <img src="${programa.imagen}" class="card-img-top" alt="${programa.nombre}" style="height:250px; object-fit:cover;">
        <div class="card-body">
          <h5 class="card-title">${programa.nombre}</h5>
          <p class="card-text">${programa.descripcion}</p>
          <p class="card-text">${programa.Valor}</p>
          <button class="btn btn-success agregar-carrito"
                  data-id="${programa.id}"
                  data-nombre="${programa.nombre}"
                  data-precio="${programa.Precio}"
                  data-imagen="${programa.imagen}">
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
  mostrarProgramas()
);
