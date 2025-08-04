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


let total = 0;


function mostrarOfertaEspecial() {
    const ofertas = [
        '¡Oferta Especial! ¡10% de descuento en todos los vinos!',
        '¡2x1 en vinos espumosos!',
        '¡Envío gratis en compras mayores a $100!',
        '¡20% de descuento en la segunda unidad!'
    ];

    const ofertaAleatoria = ofertas[Math.floor(Math.random() * ofertas.length)];
    const ofertaBanner = document.getElementById('ofertaespecialbanner');
    
    if (ofertaBanner) {
        ofertaBanner.querySelector('p').textContent = ofertaAleatoria;
        ofertaBanner.style.display = 'block';
        
        setTimeout(() => {
            ofertaBanner.style.display = 'none';
        }, 10000); // Exactamente 10 segundos como se requiere
    }
}

function generarCards() {
    mostrarOfertaEspecial(); // Ya está implementado correctamente aquí
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

const filtroCategorias = document.getElementById('filtroCategorias');
if (filtroCategorias) {
    filtroCategorias.addEventListener('change', () => {
        generarCards();
    });
    generarCards();
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


    const carritoid = document.querySelectorAll('#carrito')[0];
    const cursos = document.querySelectorAll('#lista-cursos')[0];
    const listaCursos = document.querySelector('#lista-carrito tbody');
    const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
    const vaciarCarritoBtn2 = document.querySelector('#vaciar-carrito2');

function eventslisteners() {
    if (cursos) {
        cursos.addEventListener('click', comprarCurso);
    }

    if (carritoid) {
        carritoid.addEventListener('click', eliminarCurso);
    }

    if (vaciarCarritoBtn) {
        vaciarCarritoBtn.addEventListener('click', vaciarcarrito);
    }

    if (vaciarCarritoBtn2) {
        vaciarCarritoBtn2.addEventListener('click', () => {
            while (listaCursos.firstChild) {
                listaCursos.removeChild(listaCursos.firstChild);
            }
            vaciarLs();
            contador = 0;
            document.querySelector('#contador-carrito').textContent = contador;
            total = 0;
            document.querySelectorAll('#precio-total').forEach((elemento) => {
                elemento.textContent = `$0.00`;
            });

            return false;
        });
    }

    if (filtroCategorias) {
        filtroCategorias.addEventListener('change', generarCards);
        generarCards();
    }

    document.addEventListener('DOMContentLoaded', leerLS);
}
eventslisteners();


function obtenerCantidadEnCarritoDesdeLocalStorage() {
    const cantidadEnCarrito = localStorage.getItem('cantidadEnCarrito');
    return cantidadEnCarrito ? parseInt(cantidadEnCarrito) : 0;
}

function obtenerPrecioTotalDesdeLocalStorage() {
    const precioTotal = localStorage.getItem('precioTotal');
    return precioTotal ? parseFloat(precioTotal) : 0;
}

function guardarCantidadEnCarritoEnLocalStorage(cantidad) {
    localStorage.setItem('cantidadEnCarrito', cantidad.toString());
}

function guardarPrecioTotalEnLocalStorage(precio) {
    localStorage.setItem('precioTotal', precio.toString());
}

document.addEventListener('DOMContentLoaded', function() {
    const cantidadEnCarrito = obtenerCantidadEnCarritoDesdeLocalStorage();
    document.getElementById('contador-carrito').textContent = cantidadEnCarrito;

    total = obtenerPrecioTotalDesdeLocalStorage();
    document.querySelectorAll('#precio-total').forEach((elemento) => {
        elemento.textContent = `$${total.toFixed(2)}`;
    });
    
});

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
    document.querySelector('#contador-carrito').textContent = contador;

    total = 0;
    document.querySelectorAll('#precio-total').forEach((elemento) => {
        elemento.textContent = `$0.00`;
    });

    return false;
}



let contador = 0;

function comprarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains("agregar-carrito")) {
        const curso = e.target.parentElement.parentElement;
        leerDatosCurso(curso);
        let cantidadEnCarrito = obtenerCantidadEnCarritoDesdeLocalStorage();
        cantidadEnCarrito++;
        guardarCantidadEnCarritoEnLocalStorage(cantidadEnCarrito);
        document.querySelector('#contador-carrito').textContent = cantidadEnCarrito;
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

function insertarCurso(curso) {
    const filaExistente = document.querySelector(`#carrito tr[data-id="${curso.id}"]`);
    const precio = parseFloat(curso.precio.substring(1));
    const subtotal = precio * curso.cantidad;
    total += subtotal;
    if(filaExistente){
        let cantidadActual = parseInt(filaExistente.querySelector('.cant').textContent);
        let nuevaCantidad = cantidadActual + curso.cantidad;
        filaExistente.querySelector('.cant').textContent = nuevaCantidad;
        let nuevoSubtotal = precio * nuevaCantidad;
        filaExistente.querySelector('.subtotal').textContent = `$${nuevoSubtotal.toFixed(2)}`;
    }
else{
    const row = document.createElement('tr');
        row.setAttribute('data-id', curso.id);
        row.innerHTML = `
            <td><img src="${curso.imagen}" width="100"></td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td class="cant">${curso.cantidad}</td>
            <td class="subtotal">$${subtotal.toFixed(2)}</td>
            <td><a href="#" class="borrar-curso" data-id="${curso.id}"><i class="fa-regular fa-circle-xmark"></i></a></td>
        `;
        listaCursos.appendChild(row);
    guardarCursoLocalStorage(curso);

}
document.querySelectorAll('#precio-total').forEach((elemento) => {
    elemento.textContent = `$${total.toFixed(2)}`;
});
    
    guardarPrecioTotalEnLocalStorage(total);
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
  
      document.querySelectorAll('#precio-total').forEach((elemento) => {
        elemento.textContent = `$${total.toFixed(2)}`;
    });

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
    if (/[^0-9-\s]+/.test(value)) return false;
    let nCheck = 0, bEven = false;
    value = value.replace(/\D/g, "");
    for (var n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n),
        nDigit = parseInt(cDigit, 10);
        if (bEven && (nDigit *= 2) > 9) nDigit -= 9; nCheck +=  nDigit; bEven = !bEven;
    }
    return (nCheck % 10) == 0;
}


function verificarCamposFormulario() {
    const campos = document.querySelectorAll('#form-compra [required]');
    let camposCompletos = true;

    campos.forEach((campo) => {
        if (!campo.value.trim()) {
            camposCompletos = false;
            campo.classList.add('campo-vacio'); // Agrega una clase para resaltar el campo vacío, opcional
        } else {
            campo.classList.remove('campo-vacio'); // Remueve la clase si el campo está lleno, opcional
        }
    });

    return camposCompletos;
}


function hayElementosEnCarrito() {
    const cursos = obtenerCursosLocalStorage();
    return cursos.length > 0;
}

function vaciarFormulario() {
    const formulario = document.getElementById('form-compra');
    formulario.reset();
}




document.addEventListener('DOMContentLoaded', function() {

    const botonFinalizarCompra = document.querySelector('.finalizar-compra');
    if (botonFinalizarCompra) {
        botonFinalizarCompra.addEventListener('click', function(event) {
            event.preventDefault();
            if (!hayElementosEnCarrito()) {
                document.getElementById('modalVacio').style.display = 'block';
            } else if (!verificarCamposFormulario()) {
                document.getElementById('modalDatos').style.display = 'block';
            } else {
                document.getElementById('modal').style.display = 'block';
                vaciarcarrito();
                vaciarFormulario();
            }
        });
    }


    const botonComprar = document.getElementById('comprar-btn');
    if (botonComprar) {
        botonComprar.addEventListener('click', function(event) {
            event.preventDefault();
            const checkoutSection = document.getElementById('checkout-section');
            const nuestrosVinosSection = document.getElementById('NuestrossVinos');
            
            if (checkoutSection && nuestrosVinosSection) {
                checkoutSection.style.display = 'block';
                nuestrosVinosSection.style.display = 'none';
                window.location.href = '#checkout-section';
            }
        });
    }

    // Add event listener for "Seguir Comprando" button
    document.querySelector('.seguir-comprando')?.addEventListener('click', function(event) {
        event.preventDefault();
        const checkoutSection = document.getElementById('checkout-section');
        const nuestrosVinosSection = document.getElementById('NuestrossVinos');
        
        if (checkoutSection && nuestrosVinosSection) {
            checkoutSection.style.display = 'none';
            nuestrosVinosSection.style.display = 'block';
            window.location.href = '#NuestrossVinos';
        }
    });

    // Update modal close handlers to show NuestrosVinos section
    document.querySelector('.volver-tienda')?.addEventListener('click', function(event) {
        event.preventDefault();
        const checkoutSection = document.getElementById('checkout-section');
        const nuestrosVinosSection = document.getElementById('NuestrossVinos');
        
        if (checkoutSection && nuestrosVinosSection) {
            checkoutSection.style.display = 'none';
            nuestrosVinosSection.style.display = 'block';
            document.getElementById('modal').style.display = 'none';
            window.location.href = '#NuestrossVinos';
        }
    });
    if (botonComprar) {
        botonComprar.addEventListener('click', function(event) {
            event.preventDefault();
            localStorage.setItem('cursosCompra', JSON.stringify(obtenerCursosLocalStorage()));
            window.location.href = 'compra.html';
        });
    }
});


document.getElementById('cerrar-modalVacio').addEventListener('click', function() {
    document.getElementById('modalVacio').style.display = 'none';
});

document.getElementById('cerrar-modalDatos').addEventListener('click', function() {
    document.getElementById('modalDatos').style.display = 'none';
});

document.getElementById('cerrar-modal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});
document.getElementById('form-compra').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const camposObligatorios = ['nombre', 'email', 'direccion', 'tarjeta', 'exp_date', 'cvv'];
    let camposInvalidos = false;

    camposObligatorios.forEach(campo => {
        const elemento = document.getElementById(campo);
        if (!elemento.value.trim()) {
            elemento.classList.add('campo-invalido');
            camposInvalidos = true;
        } else {
            elemento.classList.remove('campo-invalido');
        }
    });

    if (camposInvalidos) {
        document.getElementById('modalDatos').style.display = 'block';
        return;
    }

    // Si el carrito está vacío
    if (total <= 0) {
        document.getElementById('modalVacio').style.display = 'block';
        return;
    }

    // Mostrar modal de éxito y resetear carrito
    document.getElementById('modal').style.display = 'block';
    vaciarcarrito();
});

// Agregar detección de teclado para cerrar modales con ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modales = document.querySelectorAll('.modal');
        modales.forEach(modal => modal.style.display = 'none');
    }
});
