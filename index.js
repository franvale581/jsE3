const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


 const searchForm = document.getElementById('search-form');
 const inputNumero = document.getElementById('numero');
 const contenedorResultados = document.getElementById('container');

 searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const numero = parseInt(inputNumero.value);

  if (isNaN(numero)) {
    contenedorResultados.innerHTML = '<p>Por favor, ingrese un número válido.</p>';
  } else if (numero < 1 || numero > pizzas.length) {
    contenedorResultados.innerHTML = '<p>No existe una pizza con ese número.</p>';
  } else {
    const pizza = pizzas[numero - 1];
    contenedorResultados.innerHTML = `
      <h2>${pizza.nombre}</h2>
      <img src="${pizza.imagen}">
      <p>Precio: $${pizza.precio}</p>
      <p>Ingredientes: ${pizza.ingredientes.join(', ')}</p>
    `;
  }
});

