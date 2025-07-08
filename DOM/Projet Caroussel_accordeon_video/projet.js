//----------------------------  Accordeon  ------------------------------

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
//         img.src = pictures[index];
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


// -------------------------------------------- Galerie Video-----------------------------------

const videosGalery = [
    {
        titre: ,
        vignette: ,
        url: ,
    }

    {
        titre: ,
        vignette: ,
        url: ,
    }

    {
        titre: ,
        vignette: ,
        url: ,
    }
];


let playVideos = document.getElementById("videosGalery");

