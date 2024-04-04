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

function buscarPizza(event) {
  event.preventDefault(); 

  var inputPizzaId = document.getElementById("pizzaId");
  var pizzaId = parseInt(inputPizzaId.value);
  var resultadoElemento = document.getElementById("resultado");
  resultadoElemento.innerHTML = ""; 

  if (pizzaId < 1 || pizzaId > 5) {
      mostrarError("El número de pizza debe estar entre 1 y 5.");
      return;
  }

  var pizzaEncontrada = pizzas.find(pizza => pizza.id === pizzaId);
  if (pizzaEncontrada) {
      mostrarPizza(pizzaEncontrada);
      localStorage.setItem("ultimaPizza", JSON.stringify(pizzaEncontrada));
  } else {
      mostrarError("No se encontró ninguna pizza con ese número.");
  }

  inputPizzaId.value = ""; 
}


function mostrarPizza(pizza) {
  var resultadoElemento = document.getElementById("resultado");
  var pizzaHTML = `
      <div class="card">
          <h2>${pizza.nombre}</h2>
          <img src="${pizza.imagen}" alt="${pizza.nombre}">
          <p>Precio: $${pizza.precio}</p>
          <p>Ingredientes: ${pizza.ingredientes.join(", ")}</p>
      </div>
  `;
  resultadoElemento.innerHTML = pizzaHTML;
}


function mostrarError(mensaje) {
  var resultadoElemento = document.getElementById("resultado");
  resultadoElemento.innerHTML = `<p class="error-message">${mensaje}</p>`;
}

function mostrarError(mensaje) {
  var resultadoElemento = document.getElementById("resultado");
  resultadoElemento.innerHTML = `<p class="error-message">${mensaje}</p>`;
}

document.getElementById("searchForm").addEventListener("submit", buscarPizza);

window.addEventListener("load", function() {
  var ultimaPizza = JSON.parse(localStorage.getItem("ultimaPizza"));
  if (ultimaPizza) {
      mostrarPizza(ultimaPizza);
  }
});