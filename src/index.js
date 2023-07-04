const products = [
  {
    id: 0,
    name: "Pastanaga",
    description: "Les conrea en Lluís a Manresa",
    images: [
      "./img/pila-zanahorias-cuenco-sobre-marmol.jpg",
      "./img/textura-primer-plano-zanahorias.jpg",
      "./img/deliciosa-zanahoria-cruda.jpg",
      "./img/ramo-arreglo-zanahorias-frescas.jpg",
    ],
    unit: "kg",
    price: 1.8,
    coin: "€",
  },
  {
    id: 1,
    name: "Cogombre",
    description: "Els conrea la Maria a Cardona",
    images: [
      "./img/pepino-verde (1).jpg",
      "./img/vista-superior-pepino-rodajas-recipiente-vidrio-bolsa-lino-color-beige-sobre-blanco-horizontal-madera.jpg",
      "./img/pepino-verde.jpg",
      "./img/vista-superior-pepino-rodajas-recipiente-vidrio-bolsa-lino-color-beige-sobre-blanco-horizontal-madera.jpg",
    ],
    unit: "kg",
    price: 2.0,
    coin: "€",
  },
  {
    id: 2,
    name: "Patates",
    description: "Les conrea la Maria a Cardona",
    images: [
      "./img/papa-mesa.jpg",
      "./img/patatas-crudas-cesta-mimbre-tejida-hojas-romero-natural-sobre-mesa-rustica-madera.jpg",
      "./img/papas-rusticas-pelar-escritorio.jpg",
      "./img/arreglo-deliciosas-papas-fritas.jpg",
    ],
    unit: "kg",
    price: 1.6,
    coin: "€",
  },
  {
    id: 3,
    name: "Pèsols",
    description: "Els conrea la Carme a Amposta",
    images: [
      "./img/guisantes-naturales.jpg",
      "./img/guisantes-alto-angulo-vaina.jpg",
      "./img/arreglo-vista-superior-guisantes.jpg",
      "./img/vegetales-guisantes-mesa.jpg",
    ],
    unit: "kg",
    price: 3.0,
    coin: "€",
  },
  {
    id: 4,
    name: "Pebrot vermell",
    description: "Els conreen la Julia i l'Anna al Prat de Llobregat",
    images: [
      "./img/chiles-rojos-aislados-blanco.jpg",
      "./img/chiles-blanco.jpg",
      "./img/pimientos-rojos-mini-cubo-pared-blanca-madera-grunge-primer.jpg",
      "./img/pimientos-rojos-pieza-madera-vista-angulo-alto-pared-gris-sucio.jpg",
    ],
    unit: "kg",
    price: 5.0,
    coin: "€",
  },
  {
    id: 5,
    name: "Carxofa",
    description: "Les conreen la Julia i l'Anna al Prat de Llobregat",
    images: [
      "./img/vista-angulo-alto-alcachofas-picadas-espacio-horizontal-texto.jpg",
      "./img/apetitosa-alcachofa-vegetal.jpg",
      "./img/recortar-manos-mostrando-alcachofa.jpg",
      "./img/alcachofas-picadas-planas-vertical.jpg",
    ],
    unit: "kg",
    price: 2.5,
    coin: "€",
  },
];
let totalPrice = 0;
let cartProducts = [];
const gridProducts = document.getElementById("gridProducts");
const cleanButton = document.getElementById("cleanButton");
const total = document.getElementById("total");
const shopingCart = document.getElementById("shopingCart");
const payButton = document.getElementById("payButton");

window.addEventListener("load", displayProducts);
payButton.addEventListener("click", payProducts);
cleanButton.addEventListener("click", cleanCart);

function displayProducts(event) {
  event.preventDefault();
  products.map((e) => {
    let id;
    const card = document.createElement("div");
    id = e.id;
    let i = 0;
    card.innerHTML = `
        <div class="flex items-center">
            <button class="bg-lime-600 px-4 py-2 rounded-full hover:bg-lime-400 hover:-translate-x-1" id="prevImage"><</button>
            <div class="h-60 w-60">
                <img class="w-full h-full object-cover" src="${e.images[i]}" id="cardImage">
            </div>
            <button class="bg-lime-600 px-4 py-2 rounded-full hover:bg-lime-400 hover:translate-x-1" id="nextImage">></button>
        </div>
        <h3>${e.name}</h3>
        <p>${e.description}</p>
        <p>${e.price}${e.coin} / ${e.unit}</p>
        <button class="bg-lime-600 hover:bg-lime-400 px-4 py-1 rounded-lg" id="addButton">Add to cart</button>`;

    const prevImage = card.querySelector("#prevImage");
    prevImage.addEventListener("click", function (event) {
      event.preventDefault();
      --i;
      if (i < 0) {
        i = e.images.length - 1;
      }
      card.querySelector("#cardImage").src = e.images[i];
    });

    const nextImage = card.querySelector("#nextImage");
    nextImage.addEventListener("click", function (event) {
      event.preventDefault();
      ++i;
      if (i > e.images.length - 1) {
        i = 0;
      }
      card.querySelector("#cardImage").src = e.images[i];
    });

    const addButton = card.querySelector("#addButton");
    addButton.addEventListener("click", function (event) {
      event.preventDefault();
      addToCart(id);
    });

    gridProducts.appendChild(card);
  });
}

function addToCart(id) {
  let currentCard = products.find((e) => e.id === id);
  currentCard = { ...currentCard, quantity: 1 };
  console.log(currentCard);
  let addedProduct = cartProducts.find((e) => e.id === currentCard.id);
  if (addedProduct) {
    currentCard = { ...addedProduct, quantity: (addedProduct.quantity += 1) };
  }
  cartProducts.push(currentCard);
  totalPrice += currentCard.price;
  const cartItem = document.createElement("li");
  cartItem.innerHTML = `${currentCard.quantity} ${currentCard.name}: ${currentCard.price}${currentCard.coin} <button class="bg-rose-600 hover:bg-rose-400 px-3 py-1 rounded-full">x</button>`;

  shopingCart.appendChild(cartItem);

  total.innerText = `Total : ${totalPrice.toFixed(2)}${currentCard.coin}`;
}

function payProducts(event) {
  event.preventDefault();
  if (cartProducts.length > 0) {
    cartProducts = [];
    shopingCart.innerHTML = "";
    totalPrice = 0;
    total.innerText = `Total :`;
    alert("thanks for your shoping");
  } else {
    alert("Please, add some products to your cart");
  }
}

function cleanCart(event) {
  event.preventDefault();
  cartProducts = [];
  shopingCart.innerHTML = "";
  totalPrice = 0;
  total.innerText = `Total :`;
}
