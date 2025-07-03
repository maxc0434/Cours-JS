
    // <!-- ------------------------------- RECUPERER des Valeurs via JS-------------------- -->
// let nom = document.getElementById("nom").value;
// alert("le nom saisi est: " + nom);

// let prenom = document.getElementById("prenom").value;
// alert("le prénom saisi est: " + prenom);
    //<!-- ------------------------------- FIN RECUPERER des Valeurs via JS-------------------- -->


// --------------------------------------------------------------------------------
// document.getElementById('mon-bouton').onclick = function direBonjour() {
//   alert('bonjour !');
// };
// --------------------------------------------------------------------------------

//      -----------------------------Calculatrice addition -------------------------------
// document.getElementById('mon-bouton').onclick = function addition() {
//     let PremierNombre = document.getElementById("PremierNombre").value;
//     let DeuxiemeNombre = document.getElementById("DeuxiemeNombre").value;    
//     document.getElementById("Resultat").value = parseFloat(PremierNombre) + parseFloat(DeuxiemeNombre);

// };

//      ----------------------------- Fin Calculatrice addition -------------------------------


// ----------------------------- AFFICHER / CACHER ---------------------------------------

// let element = document.getElementById("second");
// element.classList.remove("hidden"); //ajouter ou retirer cette ligne pour "activer ou desactiver" la class hidden

// ----------------------------- FIN AFFICHER / CACHER ---------------------------------------


// ----------------------------- SPOILER AFFICHER / CACHER ---------------------------------------

// let spoilers = document.getElementsByClassName("spoiler");
// document.getElementById('mon-bouton').onclick = function hide(){
//     for (let i = 0; i < spoilers.length; i++) {
//     spoilers[i].classList.add("hidden");
//     }
// }
// ----------------------------- FIN SPOILER AFFICHER / CACHER ---------------------------------------


// --------------------------- Surbrillance au clic ---------------------------------------------

// let element = document.getElementById('second');
// document.getElementById("second").onclick = function color(){
//      element.style.backgroundColor = 'yellow' ;
// }


// let paragraphe = document.getElementsByTagName('p');
// for (let i = 0; i < paragraphe.length; i++){
//     paragraphe[i].onclick = function(event){
//         event.target.style.backgroundColor = 'yellow' ;
//     }
// }

// --------------------------- FIN Surbrillance au clic ---------------------------------------------

//  ------------- Changer la couleur du parent au clic 

// ----------------- colore au clic
// let boutons = document.getElementsByTagName('button');
// for (let i = 0; i < boutons.length; i++) {
//     boutons[i].onclick = function(event) {
//         event.target.parentNode.style.backgroundColor = 'yellow';
//     }
// }

//  ----------------------colore et decolore au clic

// let boutons = document.getElementsByTagName('button');
// for (let i = 0; i < boutons.length; i++) {
//     boutons[i].onclick = function(event) {
//         let parent = event.target.parentNode;
//         if (parent.style.backgroundColor === 'yellow'){
//             parent.style.backgroundColor = "";
//         }
//         else{
//             parent.style.backgroundColor = 'yellow';        
//         }   
//     };
// }

// ---------------------colore parent ET grand parent et decolore au clic

// let boutons = document.getElementsByTagName('button');
//     for (let i = 0; i < boutons.length; i++) {
//         boutons[i].onclick = function(event) {
//         let parent = event.target.parentNode;
//         let grandParent = parent.parentNode;  
        
//     if (parent.style.backgroundColor === 'yellow' && grandParent.style.backgroundColor === 'blue') {
//         parent.style.backgroundColor = "";
//         grandParent.style.backgroundColor = "";
//     }
//     else {
//         parent.style.backgroundColor = "yellow"
//         grandParent.style.backgroundColor = "blue"
//     }
//     };
//     }

// ------bouton remise a zero -------

let champs= document.createElement('input');
document.getElementById("sectionTestJs").appendChild(champs);

let bouton = document.createElement('button');
let textBouton = document.createTextNode("RAZ");
bouton.appendChild(textBouton);
document.getElementById("sectionTestJs").appendChild(bouton);

bouton.onclick = function() {
    champs.value = "";
    };
