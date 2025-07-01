// ------------------------------- Menu BURGER -------------------------------------//


// let menuBurger = document.querySelector(".menuBurger"), 
// basculant = document.querySelector(".basculant")

// basculant.addEventListener("click", function(event) {
//   menuBurger.classList.toggle("active")
// });


// --------------------------  AFFICHE LA POPUP AUTOMATIQUEMENT AU CHARGEMENT DE LA PAGE  ------------------------------------------ //
// #region Popup
// Lorsque la fenêtre est complètement chargée,
// ajoute la classe 'active' à l'élément ayant l'ID 'popup' pour l'afficher.
// window.onload = function() {
//   document.getElementById('popup').classList.add('active');
// }

// Lorsque l'utilisateur clique sur la croix de fermeture (élément avec l'ID 'closeBtn'),
// retire la classe 'active' de l'élément 'popup' pour masquer la pop-up.
// document.getElementById('closeBtn').onclick = function() {
//   document.getElementById('popup').classList.remove('active');
// }
// #endregion Popup
// --------------------------  FIN POPUP  ------------------------------------------ //




// ----------------------------------------------- FIZZBUZZ -----------------------------------------------
//#region Fizzbuzz

        // for(let i=1; i<200; i++) {
        //   if (i%3 === 0 && i%5 === 0) {
        //     console.log("fizzbuzz")
        //   } else if (i%3 === 0) {
        //     console.log ("Fizz")
        //   } else if (i%5 === 0) {
        //     console.log ("Buzz")
        //   } else {
        //     console.log (i)

        //   }
        // }
//#endregion Fizzbuzz
// ----------------------------------------------- FIN FIZZBUZZ -----------------------------------------------









// ------------------------------------------------NOMBRE MYSTERE-------------------------------------------------
//#region nombreMystere
// function nombreMystere() {
// let n = Math.floor(Math.random()*100);
// console.log (n)


    // for (i=0; i<10; i++){
    //   let essai = Number (prompt ("choisi un chiffre"));

    //   if (essai===n) {
    //     alert ("Bravo")
    //     return;
    //   }

    //   else if (essai<n){
    //     alert ("plus grand! Essaie encore") 
    //   } 
    //   else {
    //     alert ("plus petit! Essaie encore")
    //   }

    // }
    // alert ("Perdu, vous avez utilisé tous vos essais. Le nombre secret était " + n + ".")
// }
// nombreMystere();
//#endregion nombreMystere
// ------------------------------------------------FIN NOMBRE MYSTERE-------------------------------------------------


// <!-- --------------------------------------------------CHI FOU MI----------------------------------------- -->
// #region chi fou mi

    //   function comparaison(choix1, choix2) {
    //     if (choix1===choix2){
    //       return "Egalité"
    //     }
    //     switch (choix1){ 
    //       case "pierre":
    //         return choix2 === "ciseaux" ? "Ordi Gagne" : "Joueur Gagne";
    //       case "feuille":
    //         return choix2 === "pierre" ? "Ordi Gagne" : "Joueur Gagne";
    //       case "ciseaux":
    //         return choix2 === "feuille" ? "Ordi Gagne" : "Joueur Gagne";
    //       default :
    //         alert ("Choisissez pierre feuille ou ciseaux")
    //     }
    //   }


    //   function game() {
    //     let compScore = 0;
    //     let userScore = 0;

    //     for (i=0; i<3; i++){
          
    //       let compChoice = Math.random() <0.33 ? "pierre" : Math.random() <0.66 ? "feuille" : "ciseaux";
    //       let userChoice = prompt ("Pierre, Feuille ou Ciseaux");


    //       let resultat = comparaison(compChoice, userChoice);
    //       console.log("le resultat est : ", resultat);
        
    //       if (resultat === "Ordi Gagne"){
    //         compScore ++;
    //       }
    //       else if (resultat === "Joueur Gagne"){
    //         userScore ++;
    //       }
    //     }
    //     if (compScore>userScore){
    //         console.log ("L'ordinateur Gagne la partie");
    //     }
    //     else if (compScore<userScore){
    //         console.log ("L'utilisateur Gagne la partie");
    //     }
    //     else{
    //       console.log ("Match Nul")
    //     }
        
    //   }        
    // game();
 // #endregion chi fou mi       
// <!-- ---------------------------------------------- FIN CHI FOU MI----------------------------------------- -->




// <!-- -------------------------------------------------CALENDRIER----------------------------------------------- -->
// #region calendrier
// let jours = ['lun', '007', 'mer', 'jeu', 'ven', 'sam', 'BUG' ];
//   jours.push('dim');
//   jours.splice(1, 2, "mar");
//   console.log(jours);
//   console.log(jours.lenght);
//   console.log(jours[2]);
// #endregion calendrier
// <!-- -------------------------------------------------FIN CALENDRIER----------------------------------------------- -->



// <!-- -------------------------------------------------------PENDU--------------------------------------------------- -->
//#region pendu

    // var mauvaisesLettres = [ ];
    // var lettresAttendues = [ 's', 'u', 'p', 'e', 'r' ];
    // var lettresTrouvees = [ ];
    // console.log (indexLettre);


    // for (i=0; i<10; i++){
    //   var lettresProposees = prompt ("choisissez une lettre".toLowerCase());
    //   var indexLettre = lettresAttendues.indexOf (lettresProposees);
      
    //   if (indexLettre === -1){
    //     mauvaisesLettres.push (lettresProposees);
    //     alert ("MAUVAISE Réponse");
    //     console.log (mauvaisesLettres);
    //   }
    //   else{  //if (indexLettre !== -1) {
    //     alert ("BONNE Réponse");
    //     lettresTrouvees.push (lettresProposees);
    //     console.log (lettresTrouvees);
    //   }
    //   if (lettresTrouvees.length === 5){
    //   alert ("Partie Gagnée");
    //   console.log (userScore);
    //   }
    // } 
    //   alert ("Partie Perdue");

    //#endregion pendu
// <!-- ------------------------------------------------------- FIN PENDU--------------------------------------------------- -->




// <!-- -------------------------------------------------------EPICERIE V2--------------------------------------------------- -->
//#region epicerie

// var fruitsInventory = [ 'mangue', 'raisin', 'figue', 'kiwi' ];
// console.log (fruitsInventory);

// var achat = prompt("Que voulez vous acheter?".toLowerCase());
// var indexAchat = fruitsInventory.indexOf(achat);
// console.log(indexAchat);


//   if (indexAchat === -1){
//     alert("indisponible");
//   }
//   else {
//     fruitsInventory.splice(indexAchat, 1);
//     alert("ok");
//     console.log (fruitsInventory)
//   }

//#endregion epicerie
// <!-- -------------------------------------------------------FIN EPICERIE V2--------------------------------------------------- -->



// -------------------------------------------------------  FONCTION DIVISER PAR 2-------------------------------------------------
// #region DiviserParDeux

// function diviserParDeux(nombre){
//   return nombre/2;
// }
// console.log(diviserParDeux(10))

// let resultat = diviserParDeux(10);
// console.log (resultat)

// FONCTION DIVISER PAR 2 (n)

// function diviserParDeux(nombre){
//         return nombre/2
// }
// let n = Math.random();
// console.log ("le chiffre choisi " + n)
// let resultat = diviserParDeux(n);
// console.log (resultat)

//#endregion DiviserParDeux
// -------------------------------------------------------  FIN FONCTION DIVISER PAR 2-------------------------------------------------







// ---------------------------------------------------- CHATBOT ---------------------------------------------
//#region ChatBot

        // let uneQuestion = prompt(
        //   "Dis moi bonjour (vous ne pouvez dire que bonjour)"
        // );
        // if (uneQuestion !== "bonjour") {
        //   alert("Au revoir dans ce cas!");
        // }
        // if (uneQuestion === "bonjour") {
        //   let questionDeux = prompt("Bonjour, ca va?");

        //   if (questionDeux === "oui") {
        //     let questionDeuxOui = prompt(
        //       "Que vas tu faire aujourd'hui? Vas tu 1 travailler ou 2 te détendre"
        //     );

        //     if (questionDeuxOui === "1") {
        //       alert("bon travail!");
        //     }
        //     if (questionDeuxOui === "2") {
        //       alert("détend toi bien");
        //     } else {
        //       alert("Ciao!");
        //     }
        //   }
        //   if (questionDeux === "non") {
        //     let questionDeuxNon = prompt("Ah Bon? Pourquoi? Tu as mal dormi ?");

        //     if (questionDeuxNon === "oui") {
        //       let questionDodo = prompt("un cauchemar?");
        //     }
        //     if (questionDeuxNon === "non") {
        //       alert("D'accord, passe une bonne journée quand même");
        //     }

        //     if (questionDodo === "oui") {
        //       alert("vas te reposer aujourd'hui");
        //     }
            
        //   } else {
        //     alert("ok bye");
        //   }
        // } else {
        //   alert("Désolé, il faut que je file");
        // }

        //#endregion ChatBot
        // ------------------------------------------- FIN CHATBOT -----------------------------------------

        




// ---------------------------------------------------- ANNUAIRE -------------------------------------------
//#region annuaire

//------------- Partie 1 Annuaire
// var annuaire = {
//   patricia: '06 66 66 66 66',
//   david: '07 77 77 77 77',
//   maxime: '08 88 88 88 88',
//   }; 
// // console.log (annuaire.patricia);

// var request = prompt("qui voulez vous appeler?");
// var response = annuaire[request];
// alert(response)

// ------------ Partie 2 Repertoire Telephonique
// 

// function annuaire() {
//   let lesCoordonnees = {
//     patricia: '06 66 66 66 66',
//     david: '07 77 77 77 77',
//     maxime: '08 88 88 88 88',
//     }; 
//   let userChoice = '';
  

//   while (userChoice!=="q") {
//     userChoice = prompt("Que voulez vous faire:\nr -> pour rechercher,\n l -> pour liste,\n a -> pour ajouter,\ns -> pour supprimer,\n q -> pour quitter");

//     switch (userChoice){
//       case "r":
//         let request = prompt("qui voulez vous appeler?");
//         if (lesCoordonnees[request]){
//           alert("le numero demandé est: " + lesCoordonnees[request]);
//         }
//         else {
//           alert("le correspondant n'existe pas");
//         }
//         break;
//       case "l":
//         let liste = "liste des contacts: \n";
//         for ( let request in lesCoordonnees) {
//           liste += request + " : " + lesCoordonnees[request] + "\n";
//         }
//         alert(liste);
//         break;
//       case "a":
//         let nouvelleEntreeNom = prompt("ajouter un nom");
//         let nouvelleEntreeTelephone = prompt("ajouter un numéro");
//         lesCoordonnees[nouvelleEntreeNom] = nouvelleEntreeTelephone;
//         alert("Vous avez bien ajouté " + nouvelleEntreeNom + " et son numero => " + nouvelleEntreeTelephone);
//         console.log(lesCoordonnees);
//         break;
//       case "s":
//         let entreesAsupprimer = prompt("quel nom voulez vous supprimer");
//         if (lesCoordonnees[entreesAsupprimer]){
//           delete(lesCoordonnees[entreesAsupprimer]);
//           alert("vous avez bien supprimé l'entrée");
//           console.log(lesCoordonnees);
//         }
//         else{
//           alert("le nom est inconnu");
//         }
//         break;
//       case "q": 
//         alert("Au revoir");
//         break;
//       default: 
//         alert("cette fonctionnalité n'existe pas");

//     }
//   }
// }
// annuaire();

//#endregion annuaire
// ----------------------------------------------------FIN ANNUAIRE -----------------------------------------






// -------------------------------------------------INTRODUCTION A LA Programmation Orienté Objet ------------------------------
//#region Intro POO

// class Etudiant{
//     constructor(age, poids, sexe){
//         this.age=age;
//         this.poids=poids;
//         this.sexe=sexe;
//         // alert ("etudiant instancié")
//     }
// }


// let etudiant1 = new Etudiant(36, 89, "Masculin" );
// // alert(etudiant1.age);
// let etudiant2 = new Etudiant(85, 150);
// // alert(etudiant2.poids);

// alert("etudiant1 a " + etudiant1.age + "ans et pèse " + etudiant1.poids + "kg et est de sexe " + etudiant1.sexe )

//#endregion Intro POO
// ---------------------------------------------FIN INTRODUCTION A LA Programmation Orienté Objet --------------


let actionsMangas = document.getElementsByClassName("action");
let aventuresMangas = document.getElementsByClassName("aventure");
let comedieMangas = document.getElementsByClassName("comedie");
let allMangas = document.getElementsByClassName("action" + "aventure" + "comedie");

document.getElementById('actionBtn').onclick = function hide(){
    for (let i = 0; i < aventuresMangas.length; i++) {
        aventuresMangas[i].classList.add("hidden");
    }
    for (let i = 0; i < comedieMangas.length; i++) {
        comedieMangas[i].classList.add("hidden");
    }
    for (let i = 0; i < actionsMangas.length; i++) {
        actionsMangas[i].classList.remove("hidden");
    }
  }

  document.getElementById('aventureBtn').onclick = function hide(){
    for (let i = 0; i < actionsMangas.length; i++) {
        actionsMangas[i].classList.add("hidden");
    }
    for (let i = 0; i < comedieMangas.length; i++) {
        comedieMangas[i].classList.add("hidden");
    }
    for (let i = 0; i < aventuresMangas.length; i++) {
        aventuresMangas[i].classList.remove("hidden");
    }
  }
  document.getElementById('comedieBtn').onclick = function hide(){
    for (let i = 0; i < actionsMangas.length; i++) {
        actionsMangas[i].classList.add("hidden");
    }
    for (let i = 0; i < aventuresMangas.length; i++) {
        aventuresMangas[i].classList.add("hidden");
    }
    for (let i = 0; i < comedieMangas.length; i++) {
        comedieMangas[i].classList.remove("hidden");
    }
  }
  document.getElementById('allBtn').onclick = function reveal(){
    for (let i = 0; i < comedieMangas.length; i++) {
        comedieMangas[i].classList.remove("hidden");
    }
    for (let i = 0; i < aventuresMangas.length; i++) {
        aventuresMangas[i].classList.remove("hidden");
    }
    for (let i = 0; i < actionsMangas.length; i++) {
        actionsMangas[i].classList.remove("hidden");
    }
  }