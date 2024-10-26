'use strict';
/*
 *  Sueiro
 */

class Producto {
    constructor(id, nombre, descripcion, precio, imagen, categoria) {
      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
      this.imagen = imagen;
      this.categoria = categoria;
    }
  }

  let productos = [
    new Producto(
      1,
      'Cabernet Sauvignon',
      'Cuerpo completo, grosella negra, especias, taninos firmes.',
      10,
      'img/ejemplo.png',
      'Tinto'
    ),
    new Producto(
        2,
        'Merlot',
        'Suave, afrutado, ciruela, chocolate, vainilla.',
        10,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        3,
        'Pinot Noir',
        'Elegante, ligero, frutos rojos, tierra, especias.',
        10,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        4,
        'Syrah',
        'Audaz, especiado, moras, pimienta, notas ahumadas.',
        10,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        5,
        'Malbec',
        'Robusto, frutado, ciruela, zarzamora, taninos firmes.',
        10,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        6,
        'Tempranillo',
        'España, cereza, cuero, vainilla, acidez equilibrada.',
        10,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        7,
        'Sangiovese',
        'Italiano, cereza, ciruela, hierbas, taninos moderados.',
        20,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        8,
        'Zinfandel',
        'Rico, afrutado, moras, especias, toque dulce.',
        20,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        9,
        'Carmenere',
        'Chile, pimientos rojos, frutos oscuros, especias, textura suave.',
        20,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        10,
        'Nebbiolo',
        'Italiano, cereza, rosa, regaliz, taninos astringentes.',
        20,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        11,
        'Grenache',
        'Medio cuerpo, frutos rojos, especias, toque dulce.',
        20,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        12,
        'Petite Sirah',
        'Intenso, robusto, arándanos, ciruelas, chocolate, especias.',
        20,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        13,
        'Chardonnay',
        'Cuerpo, manzana, pera, melocotón, roble, mantequilla.',
        25,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        14,
        'Sauvignon Blanc',
        'Refrescante, cítricos, hierbas, maracuyá, notas herbáceas.',
        25,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        15,
        'Riesling',
        'Aromático, ácido, frutas tropicales, cítricos, toques minerales.',
        25,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        16,
        'Pinot Grigio',
        'Seco, ligero, pera, manzana, cítricos, almendra.',
        25,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        17,
        'Gewürztraminer',
        'Fragante, lichis, rosas, especias, sabores tropicales.',
        25,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        18,
        'Chenin Blanc',
        'Versátil, melocotón, pera, miel, acidez refrescante.',
        25,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        19,
        'Viognier',
        'Exuberante, albaricoque, melocotón, flores blancas, toque especiado.',
        30,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        20,
        'Albariño',
        'Fresco, crujiente, cítricos, melocotón, mariscos, final salino.',
        30,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        21,
        'Grüner Veltliner',
        'Austria, pimienta blanca, cítricos, notas herbáceas, acidez vibrante.',
        30,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        22,
        'Muscadet',
        'Francia, limpio, fresco, notas cítricas, mariscos, final mineral.',
        30,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        23,
        'Vermentino',
        'Ligero, cítricos, melón, hierbas, mariscos, acidez brillante.',
        30,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        24,
        'Sémillon',
        'Notas cítricas, melocotón, miel, cuerpo medio, acidez equilibrada.',
        30,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto( 
        25,
        'Rosé de Provence',
        'Provenza, fresco, frutos rojos, notas florales, equilibrado.',
        30,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        26,
        'White Zinfandel',
        'Afrutado, dulce, fresas, frambuesas, fácil de beber.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        27,
        'Shiraz Rosado',
        'Especiado, frutas rojas, cuerpo medio, acidez refrescante.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        28,
        'Garnacha Rosado',
        'Frutos rojos, fresco, especiado, toque dulce, versátil.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        29,
        'Pinot Noir Rosado',
        'Delicado, frutos rojos, floral, acidez brillante, ligero.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        30,
        'Cabernet Sauvignon Rosado',
        'Elegante, grosella negra, especias, cuerpo medio, refrescante.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        31,
        'Cinsault Rosado',
        'Ligero, fresco, frutas rojas, floral, acidez suave.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        32,
        'Sangiovese Rosado',
        'Italiano, cereza, especias, cuerpo medio, final seco.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        33,
        'Tempranillo Rosado',
        'España, fresas, frutas rojas, especias, acidez equilibrada.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        34,
        'Malbec Rosado',
        'Frutas rojas, floral, especiado, acidez refrescante, final seco.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        35,
        'Merlot Rosado',
        'Suave, frutos rojos, notas herbáceas, equilibrado, fácil de beber.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        36,
        'Grenache Rosado',
        'Fresco, frutos rojos, especias, toque dulce, versátil.',
        12,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto( 
        37,
        'Champagne',
        'Prestigioso, burbujas finas, manzana, brioche, elegante.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        38,
        'Cava',
        'España, burbujas, manzana, pera, tostado, refrescante.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        39,
        'Prosecco',
        'Italia, burbujas, melocotón, pera, ligero, refrescante.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        40,
        'Franciacorta',
        'Italiano, burbujas, manzana, pera, pan tostado, elegante.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        41,
        "Moscato d'Asti",
        'Dulce, aromático, notas de albaricoque y flores, bajo contenido alcohólico.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        42,
        'Lambrusco',
        'Italiano, semidulce, frutos rojos, burbujas, refrescante.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        43,
        'Crémant de Loire',
        'Francés, burbujas, manzana, cítricos, fresco, elegante.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        44,
        'Sekt',
        'Alemán, burbujas, manzana, cítricos, refrescante, seco o dulce.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        45,
        ' English Sparkling Wine',
        'Inglaterra, burbujas, manzana, cítricos, elegante, creciente calidad.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        46,
        'Blanquette de Limoux',
        'Francés, burbujas, manzana, pera, fresco, más asequible.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        47,
        'Asti Spumante',
        'Italiano, burbujas, albaricoque, melocotón, dulce, bajo contenido alcohólico.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        48,
        "Cremant d'Alsace",
        'Francés, burbujas, manzana, pera, pan tostado, elegante.',
        120,
        'img/ejemplo.png',
        'Espumoso',
    ),
];


let total = 0; // Ejemplo de total inicial (ajústalo al total real del carrito)

// Función para mostrar la oferta especial
function mostrarOfertaEspecial() {
    const ofertaEspecial = document.getElementById('ofertaespecialbanner');
    ofertaEspecial.style.display = 'block'; // Muestra el banner

    setTimeout(() => {
        ofertaEspecial.style.display = 'none'; // Oculta el banner después de 10 segundos
    }, 10000);
}

// Función para aplicar el descuento
function aplicarDescuento() {
    const descuento = 0.10; // 10% de descuento
    const descuentoAplicado = total * descuento;
    total -= descuentoAplicado; // Actualiza el total
    document.getElementById('precio-total').textContent = `$${total.toFixed(2)}`; // Muestra el total con el descuento
    
    // Guarda el nuevo total en Local Storage
    guardarPrecioTotalEnLocalStorage(total);
    
    // Desactiva el botón para evitar aplicar el descuento más de una vez
    document.getElementById('aplicarDescuentoBtn').disabled = true;
}


// Al cargar el DOM, se configura el botón de descuento
document.addEventListener('DOMContentLoaded', () => {
    const aplicarDescuentoBtn = document.getElementById('aplicarDescuentoBtn');
    if (aplicarDescuentoBtn) {
        aplicarDescuentoBtn.addEventListener('click', aplicarDescuento);
    }
    
    mostrarOfertaEspecial(); // Muestra la oferta especial al cargar la página
});


function generarCards() {
    mostrarOfertaEspecial()
    const containerId = 'slideContainer';
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    const filtroCategorias = document.getElementById('filtroCategorias');
    const categoriaSeleccionada = filtroCategorias.value;
    const productosFiltrados = categoriaSeleccionada === 'Todos' ? productos : productos.filter(producto => producto.categoria === categoriaSeleccionada);


    productosFiltrados.sort(() => Math.random() - 0.5);
  
    productosFiltrados.forEach(producto => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const circulo = document.createElement('div');
      circulo.classList.add('circulo');
      const imagen = document.createElement('img');
      imagen.src = producto.imagen;
      circulo.appendChild(imagen);
  
      const infoCard = document.createElement('div');
      infoCard.classList.add('info-card');
  
      const nombre = document.createElement('h4');
      nombre.textContent = producto.nombre;
  
      const precio = document.createElement('p');
      precio.classList.add('precio');
      precio.textContent = `$${producto.precio}`;
  
      const categoriaElement = document.createElement('p');
      categoriaElement.textContent = producto.categoria;
  
      const descripcion = document.createElement('p');
      descripcion.textContent = producto.descripcion;
  
      const cantidadDiv = document.createElement('div');
      cantidadDiv.classList.add('cantidad-div');
  
      const cantidad = document.createElement('input');
      cantidad.type = 'number';
      cantidad.value = 1;
      cantidad.min = 1;
      cantidad.classList.add('cantidad');
  
      const masBtn = document.createElement('button');
      masBtn.textContent = '+';
      masBtn.classList.add('mas');
      masBtn.addEventListener('click', () => {
        cantidad.value = parseInt(cantidad.value) + 1;
      });
  
      const menosBtn = document.createElement('button');
      menosBtn.textContent = '-';
      menosBtn.classList.add('menos');
      menosBtn.addEventListener('click', () => {
        const currentValue = parseInt(cantidad.value);
        if (currentValue > 1) {
          cantidad.value = currentValue - 1;
        }
      });
  
      cantidadDiv.appendChild(menosBtn);
      cantidadDiv.appendChild(cantidad);
      cantidadDiv.appendChild(masBtn);
  
      const agregarCarrito = document.createElement('a');
      agregarCarrito.href = '#';
      agregarCarrito.classList.add('u-full-width', 'button-primary', 'button', 'input', 'agregar-carrito');
      agregarCarrito.dataset.id = producto.id;
      agregarCarrito.textContent = 'Agregar al Carrito';
  
      infoCard.appendChild(nombre);
      infoCard.appendChild(precio);
      infoCard.appendChild(categoriaElement);
      infoCard.appendChild(descripcion);
      infoCard.appendChild(cantidadDiv);
      infoCard.appendChild(agregarCarrito);
  
      card.appendChild(circulo);
      card.appendChild(infoCard);
  
      container.appendChild(card);
    });
  }

  
// Filtro de categorías
const filtroCategorias = document.getElementById('filtroCategorias');
if (filtroCategorias) {
    filtroCategorias.addEventListener('change', () => {
        generarCards();
    });
    generarCards(); // Generar las tarjetas inicialmente
}
  
  const agregarCarritoButtons = document.querySelectorAll('.agregar-carrito');
  
  agregarCarritoButtons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonText = this.textContent; 
      this.textContent = '<i class="fa-regular fa-circle-check"></i>';
      setTimeout(() => {
        this.textContent = buttonText;
      }, 1000);
    });
  });
  

const carritoid = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const vaciarCarritoBtn2 = document.querySelector('#vaciar-carrito2');

function eventslisteners() {

    if (cursos) {cursos.addEventListener('click', comprarCurso);}

    if (carritoid) {carritoid.addEventListener('click', eliminarCurso);}

    if (vaciarCarritoBtn) {vaciarCarritoBtn.addEventListener('click', vaciarcarrito);}
    if (vaciarCarritoBtn2) {vaciarCarritoBtn2.addEventListener('click', () =>{
        while (listaCursos.firstChild) {
            listaCursos.removeChild(listaCursos.firstChild);
          }
          vaciarLs();
          contador = 0;
          document.getElementById('contador-carrito').textContent = contador;
          total = 0;
          document.getElementById('precio-total').textContent = '$0.00';
        
          return false;
    });}

    if (filtroCategorias) {
        filtroCategorias.addEventListener('change', generarCards);
        generarCards();
    }

        document.addEventListener('DOMContentLoaded', leerLS);
    }
eventslisteners();

// Obtener y guardar la cantidad en el Local Storage
function obtenerCantidadEnCarritoDesdeLocalStorage() {
    const cantidadEnCarrito = localStorage.getItem('cantidadEnCarrito');
    return cantidadEnCarrito ? parseInt(cantidadEnCarrito) : 0; // Si no hay, retorna 0
}

function obtenerPrecioTotalDesdeLocalStorage() {
    const precioTotal = localStorage.getItem('precioTotal');
    return precioTotal ? parseFloat(precioTotal) : 0; // Retorna 0 si no hay
}

function guardarCantidadEnCarritoEnLocalStorage(cantidad) {
    localStorage.setItem('cantidadEnCarrito', cantidad.toString());
}

function guardarPrecioTotalEnLocalStorage(precio) {
    localStorage.setItem('precioTotal', precio.toString());
}

// Cargar datos desde el Local Storage al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Recuperar la cantidad en el carrito
    const cantidadEnCarrito = obtenerCantidadEnCarritoDesdeLocalStorage();
    document.getElementById('contador-carrito').textContent = cantidadEnCarrito;

    // Recuperar y mostrar el total en el carrito
    total = obtenerPrecioTotalDesdeLocalStorage(); // Cargar el total guardado
    document.getElementById('precio-total').textContent = `$${total.toFixed(2)}`;
});

// Vaciar Local Storage
function vaciarLs() {
    localStorage.clear();
}



function eliminarCursoLS(curso) {
    let cursosLS;
    cursosLS = obtenerCursosLocalStorage();
    
    cursosLS = cursosLS.filter(cursoLS => cursoLS.id !== curso);
  
    localStorage.setItem('cursos', JSON.stringify(cursosLS));
  }
  


function vaciarLs() {
    localStorage.clear();
}


function vaciarcarrito() {
    while (listaCursos.firstChild) {
      listaCursos.removeChild(listaCursos.firstChild);
    }
  

    vaciarLs();
  
    contador = 0;
    document.getElementById('contador-carrito').textContent = contador;
    total = 0;
    document.getElementById('precio-total').textContent = '$0.00';
  
    return false;
  }


let contador = 0;

function comprarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains("agregar-carrito")) {
        const curso = e.target.parentElement.parentElement;
        leerDatosCurso(curso);
        let cantidadEnCarrito = obtenerCantidadEnCarritoDesdeLocalStorage();
        cantidadEnCarrito++
        guardarCantidadEnCarritoEnLocalStorage(cantidadEnCarrito); // Guarda la cantidad en el localStorage
        document.getElementById('contador-carrito').textContent = cantidadEnCarrito; // Actualiza el contador del carrito
    }
}


function leerDatosCurso(curso) {
    const infoCurso = {
      imagen: curso.querySelector('img').src,
      titulo: curso.querySelector('h4').textContent,
      precio: curso.querySelector('.precio').textContent,
      id: curso.querySelector('a').getAttribute('data-id'),
      cantidad: parseInt(curso.querySelector('.cantidad').value)
    };
    insertarCurso(infoCurso);
  }
  



  async function insertarCurso(curso) {
    const precio = parseFloat(curso.precio.substring(1));
    const subtotal = precio * curso.cantidad;
    total += subtotal;
    const row = document.createElement('tr');
    row.insertAdjacentHTML('beforeend', `
      <td><img src="${curso.imagen}" width="100"></td>
      <td>${curso.titulo}</td>
      <td>${curso.precio}</td>
      <td>${curso.cantidad}</td> <!-- Nueva línea -->
      <td><a href="#" class="borrar-curso" data-id="${curso.id}"><i class="fa-regular fa-circle-xmark"></i></a></td>
      `);
    listaCursos.appendChild(row);
    guardarCursoLocalStorage(curso);
    console.log('desde insertar', listaCursos);

    // Actualiza el total y lo guarda en el Local Storage
    document.getElementById('precio-total').textContent = `$${total.toFixed(2)}`;
    guardarPrecioTotalEnLocalStorage(total); // Guarda el total en Local Storage
}



  function eliminarCurso(e) {
    e.preventDefault();
  
    let curso, cursoId;
  
    if (e.target.classList.contains('fa-circle-xmark')) {
      curso = e.target.parentElement.parentElement.parentElement;
      cursoId = curso.querySelector('a').getAttribute('data-id');
      const cantidadCurso = parseInt(curso.querySelector('td:nth-child(4)').textContent);
      const precioCurso = parseFloat(curso.querySelector('td:nth-child(3)').textContent.substring(1));
      const subtotalCurso = precioCurso * cantidadCurso;
      total -= subtotalCurso;
  
      eliminarCursoLS(cursoId);
      let cantidadEnCarrito = obtenerCantidadEnCarritoDesdeLocalStorage();
      cantidadEnCarrito--;
      guardarCantidadEnCarritoEnLocalStorage(cantidadEnCarrito);
      contador--;
  
      document.getElementById('contador-carrito').textContent = cantidadEnCarrito;
  
      document.getElementById('precio-total').textContent = `$${total.toFixed(2)}`;
  
      // Guarda el nuevo total en Local Storage
      guardarPrecioTotalEnLocalStorage(total);
  
      curso.remove();
    }
}



  function guardarCursoLocalStorage(curso) {
    let cursos = obtenerCursosLocalStorage();
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));
}


function obtenerCursosLocalStorage() 
{
    let cursosLS;
    
    if (localStorage.getItem('cursos') === null) {
        cursosLS = [];        
    } else {
        cursosLS = JSON.parse(localStorage.getItem('cursos'));
    }
    return cursosLS;
}


async function leerLS() {
    let cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach(function (curso) {
        const row = document.createElement('tr');
    row.insertAdjacentHTML('beforeend', `
      <td><img src="${curso.imagen}" width="100"></td>
      <td>${curso.titulo}</td>
      <td>${curso.precio}</td>
      <td>${curso.cantidad}</td>
      <td><a href="#" class="borrar-curso" data-id="${curso.id}"><i class="fa-regular fa-circle-xmark"></i></a></td>
      `);
        listaCursos.appendChild(row);
    });
}

const carritoElement = document.getElementById('carrito');
const carritoIcono = document.getElementById('carrito-icono');

 if (carritoIcono) {
carritoIcono.addEventListener('click', () => {
  carritoElement.style.display = carritoElement.style.display === 'none' ? 'block' : 'none';
});
 }


function validarTipoTarjeta(opt, codigo) {
    const tarjetas = {
      VISA: /^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/,
      MASTERCARD: /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/,
      AMEX: /^3[47][0-9-]{16}$/,
      CABAL: /^(6042|6043|6044|6045|6046|5896)[0-9]{12}$/,
      NARANJA: /^(589562|402917|402918|527571|527572|0377798|0377799)[0-9]*$/
    };
    if (!tarjetas[opt].test(codigo)) alert("Número de tarjeta inválido para tipo seleccionado.");
  }

function luhn(value) {
    // Accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(value)) return false;
    // The Luhn Algorithm. It's so pretty.
    let nCheck = 0, bEven = false;
    value = value.replace(/\D/g, "");
    for (var n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n),
        nDigit = parseInt(cDigit, 10);
        if (bEven && (nDigit *= 2) > 9) nDigit -= 9; nCheck +=  nDigit; bEven = !bEven;
    }
    return (nCheck % 10) == 0;
}

// Obtén el botón de Comprar y agrega un evento click
// Modifica el evento btnComprar.addEventListener en index.js
// Declaración de la variable btnComprar
const btnComprar = document.getElementById('comprar-btn');

// Evento click en el botón de compra
btnComprar.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Resto del código para manejar la compra
    // Guarda los cursos en el Local Storage para que estén disponibles en compra.html
    localStorage.setItem('cursosCompra', JSON.stringify(obtenerCursosLocalStorage()));
    
    window.location.href = 'compra.html';
});




document.getElementById('form-compra').addEventListener('submit', function(event) {
    event.preventDefault(); 
    console.log('Compra procesada');

});

document.getElementById('form-pago').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let numeroTarjeta = document.getElementById('nro_tarjeta').value;
    if (luhn(numeroTarjeta)) {

        console.log('Número de tarjeta válido');

        console.log('Pago procesado');

    } else {
        console.log('Número de tarjeta inválido');
        alert('El número de tarjeta de crédito es inválido');
    }
});



document.getElementById('form-compra').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let direccion = document.getElementById('direccion').value;

    if (nombre.trim() === '' || correo.trim() === '' || direccion.trim() === '') {
        alert('Por favor completa todos los campos antes de finalizar la compra');
        return;
    }

    window.location.href = 'index.html';

    alert('¡Compra realizada con éxito!');
setTimeout(() => window.location.href = 'index.html', 2000);

});