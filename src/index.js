let id = 0;

const products = [
  {
    id: id++,
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
    id: id++,
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
    id: id++,
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
    id: id++,
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
    id: id++,
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
    id: id++,
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

const gridProducts = document.getElementById("gridProducts");

window.addEventListener("load", displayProducts());

function displayProducts() {
  products.map((e) => {
    const card = document.createElement("div");
    card.id = e.id;
    let i = 0;
    card.innerHTML = `
        <div class="flex items-center">
            <button class="bg-green-400 px-4 py-2 rounded-full hover:bg-green-300 hover:-translate-x-1" id="prevImage"><</button>
            <div class="h-60 w-60">
                <img class="w-full h-full object-cover" src="${e.images[i]}" id="cardImage">
            </div>
            <button class="bg-green-400 px-4 py-2 rounded-full hover:bg-green-300 hover:translate-x-1" id="nextImage">></button>
        </div>
        <h3>${e.name}</h3>
        <p>${e.description}</p>
        <p>${e.price}${e.coin} / ${e.unit}</p>`;

    const prevImage = card.querySelector("#prevImage");
    prevImage.addEventListener("click", function (event) {
      event.preventDefault();
      --i;
      if (i < 0) {
        i = e.images.length-1;
      } 
      console.log(i)
        card.querySelector("#cardImage").src = e.images[i];
    });

    const nextImage = card.querySelector("#nextImage");
    nextImage.addEventListener("click", function (event) {
      event.preventDefault();
      ++i;
      if (i > e.images.length-1) {
        i = 0;
      }
      console.log(i)
      card.querySelector("#cardImage").src = e.images[i];
    });

    gridProducts.appendChild(card);
  });
}
