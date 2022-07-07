
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")


// Ciao ragazze e ciao ragazzi!!
// Esercizio di oggi: Carosello Array di Oggetti
// nome repo: js-array-objects-carousel
// ## Consegna
// Dato un array di oggetti letterali con:
// - url dell’immagine
// - titolo
// - descrizione
// Creare un carosello ispirandosi alla foto allegata. Potete anche usare come base il carosello dell'esercizio precedente
//
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// ## Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.
// ---
// ## BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// ## BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// ## BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
// ---

const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
];


//   recupero la galleria dove mettere le immmagini

const contenitore = document.getElementById("galleria")
console.log(contenitore)

const thumbnails = document.getElementById("thumb")


let item = '';
let thumb = '';

let active = [0];

for (let key in images) {
    item += `
    <img class="item"src="${images[key].url}" alt="">
<div class="textcontent">
    <h3>${images[key].title}</h3>
    <p>${images[key].description}</p>
    </div>
      
            `
    thumb += `
        <div class="thumb">
            <img class="scale" src="${images[key].url}" alt="">
        </div>
    `
}


contenitore.innerHTML += item

thumbnails.innerHTML += thumb



// Prendo le classi item&scale dal css per attivare disattivare stili sulle immagini

document.getElementsByClassName('item')[active].classList.add('active');

document.getElementsByClassName('scale')[active].classList.add('scaleactive');


// MILESTONE 3
// Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider, prendendo il posto della precedente.
// e sul thumbnail cambia il grayscale e si aggiunge una boxshadow

// Aggiungo i bottoni

const prima = document.getElementById('prima');
const dopo = document.getElementById('dopo');
console.log(prima, dopo)

// Aggiungo la listener al button

dopo.addEventListener('click', function () {
    //rimuovo la classe active
    document.querySelector(".active").classList.remove('active')
    document.querySelector(".scaleactive").classList.remove('scaleactive')

    // incremento activindex 
    active++;

    // RIPARTO DA 0 quando arrivo in fondo alle immagini
    if (active > images.length - 1) {


        active = 0;
    }

    // aggiungo la classe active
    document.getElementsByClassName('item')[active].classList.add('active');
    document.getElementsByClassName('scale')[active].classList.add('scaleactive');
})

// BONUS 1:
// Aggiungere il ciclo infinito del carosello. Ovvero se l' immagine attiva è la prima 
// e l'utente clicca la freccia per andare indietro, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura s
// e l'utente clicca la freccia verso avanti, deve attivarsi la prima immgine.


prima.addEventListener('click', function () {
    //rimuovo la classe active
    document.querySelector(".active").classList.remove('active')
    document.querySelector(".scaleactive").classList.remove('scaleactive')

    // RIPARTO DA 0 quando arrivo in fondo alle immagini
    active--

    if (active < 0) {
        active = images.length - 1;
    }

    // aggiungo la classe active
    document.getElementsByClassName('item')[active].classList.add('active');
    document.getElementsByClassName('scale')[active].classList.add('scaleactive');
})




