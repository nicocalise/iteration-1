//Punto Nro 1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

//obtener el Body o el padra donde quiera insertar la UL generada
let body = document.getElementById('body');

//Creo la UL
let countryList = document.createElement('ul');

//tengo que crear por cada pais un LI y meterlo dentro de la UL
//para esto lo que me conviene hacer es un BUCBLE for que recorra el array de paises y 
//vaya creando los LI

//for (let i = 0; i < countries.length; i++) {
//    //en el for convencional ya me viene el indice
//    //obtengo el element del array y me lo guardo en una variable
//    let country = countries[i];
//    let li = document.createElement('li');
//    //Asigno propiedades
//    li.id= 'country-' + i;
//    li.classList = 'countries-list__item';
//    li.innerText = country;
//    //Agrego el li a la UL
//    countryList.appendChild(li);  
//}

countries.forEach(element => {
    //le asigno un index al element
    let index = countries.indexOf(element);
    //creo cada LI
    let li = document.createElement('li');
    //Asigno propiedades
    li.id= 'country-' + index;
    li.classList = 'countries-list__item';
    li.innerText = element;
    //Agrego el li a la UL
    countryList.appendChild(li);
});

//agrego la UL al BODY
body.appendChild(countryList);

//Punto nro 2
//Elimina el elemento que tenga la clase .fn-remove-me.
//Por lo general para manipular el dom siempre primero tengo que buscar
let p = document.querySelector('.fn-remove-me');
p.remove();

//punto nro 3
//Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let div = document.querySelector('[data-function="printHere"]');
div.id = 'cars_list__container';
div.classList = 'cars-list__container';

let carList = document.createElement('ul');
carList.id = 'cars_list';
carList.classList = 'cars-list';

for (let i = 0; i < cars.length; i++) {
    const element = cars[i];

    let li = document.createElement('li');
    li.id = 'cars_list__item';
    li.classList = 'cars-list__item';
    li.innerText = element;

    carList.appendChild(li);
}

div.appendChild(carList);


//  ejercicio nro 4 Crea dinamicamente en el html una lista de div que contenga un elemento 
//  h4 para el titulo y otro elemento img para la imagen.
//<ul>
//      <li>
//          <div>
//              <h4>titulo</h4>
//              <img src="" alt="">
//          </div>
//      </li>
//</ul>

const ej4countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, //por cada objeto crear un li, con un div dentro, y dentro h4 y img
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

let countriesList = document.createElement('ul');
countriesList.id =  'ej4countries_list';
countriesList.classList = 'ej4countries-list'
body.appendChild(countriesList);

const deleteElement = (event) =>{
    debugger
    //que primero reconozca donde esta parado. Es decir cual es el elemento que va a tener que eliminar.
    let target = event.currentTarget;
    let id = target.id;
    let last  = id.slice(-1); 
    let liToDelete = document.getElementById('countries_list__item'+ last);
    liToDelete.remove();
}

ej4countries.forEach(element => {
    //le asigno un index al element
    
    let index = ej4countries.indexOf(element);

    let li = document.createElement('li');
    li.id = 'countries_list__item' + index;
    li.classList = 'countries-list__item';
    countriesList.appendChild(li);

    let div = document.createElement('div');
    div.id = 'country_container';
    div.classList = 'country-container';
    li.appendChild(div);

    let h4 = document.createElement('h4');
    h4.id = 'country_title' + index;
    h4.classList = 'country-title';
    h4.innerText = element.title;

    let img = document.createElement('img');
    img.id = 'country_img' + index;
    img.classList = 'country-img';
    img.src = element.imgUrl;

// ejercicio 6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//elementos de las listas que elimine ese mismo elemento del html.

    let buttonDeleteElement = document.createElement('button');
    buttonDeleteElement.id = 'btn_delete' + index;
    buttonDeleteElement.innerText = 'Delete item';
    buttonDeleteElement.addEventListener('click', deleteElement);


    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(buttonDeleteElement);    
});

//ejercicio 5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//elemento de la lista.

let buttonDeleteLastElement = document.createElement('button');
buttonDeleteLastElement.id = 'btn_delete_last';
buttonDeleteLastElement.innerText = 'Delete';

body.appendChild(buttonDeleteLastElement);


const deleteLastElement = (event) => {
    let info = event;
    let lastChild = countriesList.lastChild;
    lastChild.remove();
}

buttonDeleteLastElement.addEventListener('click', deleteLastElement);









