// let nom = document.getElementById("nom").value;
// alert("le nom saisi est: " + nom);

// let prenom = document.getElementById("prenom").value;
// alert("le prénom saisi est: " + prenom);

// --------------------------------------------------------------------------------
// document.getElementById('mon-bouton').onclick = function direBonjour() {
//   alert('bonjour !');
// };
// --------------------------------------------------------------------------------


document.getElementById('mon-bouton').onclick = function addition() {
    let PremierNombre = document.getElementById("PremierNombre").value;
    let DeuxiemeNombre = document.getElementById("DeuxiemeNombre").value;    
    document.getElementById("Resultat").value = parseFloat(PremierNombre) + parseFloat(DeuxiemeNombre);;

};