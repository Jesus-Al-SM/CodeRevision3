// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.getElementById("lista-de-productos"); //debe ser get element by id
const $i = document.querySelector('input'); //lleva un punto extra

function displayProductos(array){
  for (let i = 0; i < array.length; i++) {
    let divisionElement = document.createElement("div");
    divisionElement.classList.add("producto");

    let ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = array[i].nombre;
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', array[i].img);

    divisionElement.appendChild(ti);
    divisionElement.appendChild(imagen);

    //El depurador dice que li.appendChild no es una función, podemos notar que se esta llamando al reves
    li.appendChild(divisionElement);
  }
}

displayProductos(productos);

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }
  
  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );
  
  
  displayProductos(productosFiltrados);
/*   for (let i = 0; i < productosFiltrados.length; i++) {
    let divisionElement = document.createElement("div");
    divisionElement.classList.add("producto");
  
    let ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    divisionElement.appendChild(ti);
    divisionElement.appendChild(imagen);
  
    li.appendChild(divisionElement); */
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  