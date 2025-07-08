// Creation d'un tableau avec les éléments à l'interieur
    const videos = [
    {
        titre: "Diner de con",
        vignette: "https://img.youtube.com/vi/UYYwaFy05-U/hqdefault.jpg",
        url: "https://www.youtube.com/embed/?v=UYYwaFy05-U&list=PLMl4WmJENZ56p7DQRK88w3hEsVfOrKXjJ",
    },

    {
        titre: "Tontons flingueurs",
        vignette: "https://img.youtube.com/vi/VmiDFH4H2dM/hqdefault.jpg",
        url: "https://www.youtube.com/embed/VmiDFH4H2dM",
    },

    {
        titre: "Lebowski",
        vignette: "https://img.youtube.com/vi/dsPP_lvXFmg/hqdefault.jpg",
        url: "https://www.youtube.com/embed/dsPP_lvXFmg",
    },
    ];

// creation de la fonction qui me permet de visoionner la video en insérant une balise iframe
function showVideo(index){
    let videosContainer = document.getElementById("videosContainer");
    videosContainer.innerHTML = 
    `<iframe width="100%" height="100%" src="${videos[index].url}" frameborder="0" allowfullscreen></iframe>`;
    // videosContainer.style.display = "block";
}

function initGalery(){
//creation des constantes qui joignent le HTML et JS
let galery = document.getElementById("galery");
galery.innerHTML = "";

//  Boucle for pour creer en premier lieu generer les miniatures à partir du tableau
for ( let i=0; i < videos.length; i++){
    
    let img = document.createElement('img');
    img.src = videos[i].vignette;
    img.alt = videos[i].titre;
    img.className = 'vignette';

// creer un evenement pour lire la video en rapport avec la miniature (===> onclick)
    img.onclick = function(){
        showVideo(i);
    };
// creation d'un enfant dans la div id=galery en fonction du nombre d'elements présent du tableau 
    galery.appendChild(img);
}
// galery.style.display = "flex";

showVideo(0);
}

document.getElementById("showGalerieBtn").onclick = function() {
    initGalery();
};