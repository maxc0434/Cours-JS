//----------------------------  Accordeon  ------------------------------

// const { createElement } = require("react");

// classList.toggle permet d’ajouter ou de retirer une classe CSS sur un élément en fonction de si elle est initialement présente ou non.
// document.getElementById('OpTitle').onclick = function hide(){
//     let synopsis = document.getElementsByClassName("SynopsiOP");
//     for (let i = 0; i < synopsis.length; i++) {
//     synopsis[i].classList.toggle("hidden");
//     }
// };
// document.getElementById('DbzTitle').onclick = function hide(){
//     let synopsis = document.getElementsByClassName("SynopsiDbz");
//     for (let i = 0; i < synopsis.length; i++) {
//     synopsis[i].classList.toggle("hidden");
//     }
// };
// document.getElementById('NickLarsTitle').onclick = function hide(){
//     let synopsis = document.getElementsByClassName("SynopsiNl");
//     for (let i = 0; i < synopsis.length; i++) {
//     synopsis[i].classList.toggle("hidden");
//     }
// };


// ----------------------------- Carousel ----------------------------------

// function carousel(){;
// // Creation du tableau d'images
// const pictures = [
//     "/image/carousel_gear_1.jpg",
//     "/image/carousel_gear_2.jpg",
//     "/image/carousel_gear_3.jpg",
//     "/image/carousel_gear_4.jpg",
//     "/image/carousel_gear_5.jpg",
// ];
// //Selection des elements du DOM
// let img = document.getElementById("carouselImage");
// let buttonNext = document.getElementById("next");
// let buttonPrevious = document.getElementById("previous");

// //Affichage de la première image
// let index = 0;
// img.src = pictures[index];

// //Affichage des images suivantes au clic
// buttonNext.onclick = function(){
//     index = (index + 1) % pictures.length;
//     // creation d'effet de transition : au clic l'image se rend opaque
//     img.style.opacity = 0.5;
//     // setTimeout = au bout de tant de ms, on change l'image
//     setTimeout(()=>{
//     // rappeler img.src pour "mettre a jour" la nouvelle image au clic qui revient à opacité normale
        // img.src = pictures[index];
//         img.style.opacity = 1;
//     }, 150);
// };
// buttonPrevious.onclick = function(){
//     index = (index - 1 + pictures.length) % pictures.length;
//     img.style.opacity = 0.5;
//     setTimeout(()=>{
//         img.src = pictures[index];
//         img.style.opacity = 1;
//     }, 150);
// };
// };
// carousel();

// ----------------------------------------- Galerie Video SIMPLE ----------------------------

const extraitVideo = [
    "https://www.youtube.com/embed/?v=UYYwaFy05-U&list=PLMl4WmJENZ56p7DQRK88w3hEsVfOrKXjJ",
    "https://www.youtube.com/embed/VmiDFH4H2dM",
    "https://www.youtube.com/embed/dsPP_lvXFmg",
];

let video = document.getElementById("videoDiv");
let buttons = document.getElementsByClassName("extrait");

function showVideo(i) {
    return function(){
        video.innerHTML = `<iframe width="100%" height="100%" src="${extraitVideo[i]}" frameborder="0" allowfullscreen></iframe>`;
    }
};

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = showVideo(i);
};

// -------------------------------------------- Galerie Video AVANCEE -----------------------------------



// // Creation d'un tableau avec les éléments à l'interieur
//     const videos = [
//     {
//         titre: "Diner de con",
//         vignette: "https://img.youtube.com/vi/UYYwaFy05-U/hqdefault.jpg",
//         url: "https://www.youtube.com/embed/?v=UYYwaFy05-U&list=PLMl4WmJENZ56p7DQRK88w3hEsVfOrKXjJ",
//     },

//     {
//         titre: "Tontons flingueurs",
//         vignette: "https://img.youtube.com/vi/VmiDFH4H2dM/hqdefault.jpg",
//         url: "https://www.youtube.com/embed/VmiDFH4H2dM",
//     },

//     {
//         titre: "Lebowski",
//         vignette: "https://img.youtube.com/vi/dsPP_lvXFmg/hqdefault.jpg",
//         url: "https://www.youtube.com/embed/dsPP_lvXFmg",
//     },
// ];

// //creation des constantes qui joignent le HTML et JS
// let galery = document.getElementById("galery");
// let videosContainer = document.getElementById("videosContainer");


// //  Boucle for pour creer en premier lieu generer les miniatures à partir du tableau
// for ( let i=0; i < videos.length; i++){
//     let img = document.createElement('img');
//     img.src = videos[i].vignette;
//     img.alt = videos[i].titre;
//     img.className = 'vignette';

// // creer un evenement pour lire la video en rapport avec la miniature (===> onclick)
//     img.onclick = function(){
//         showVideo(i);
//     };
// // creation d'un enfant dans la div id=galery en fonction du nombre d'elements présent du tableau 
//     galery.appendChild(img);
// }


// // creation de la fonction qui me permet de visoionner la video en insérant une balise iframe
// function showVideo(index){
//     videosContainer.innerHTML = 
//     `<iframe width="100%" height="100%" src="${videos[index].url}" frameborder="0" allowfullscreen></iframe>`;
// }
// showVideo(0);

