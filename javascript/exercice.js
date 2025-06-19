// --------------------------  AFFICHE LA POPUP AUTOMATIQUEMENT AU CHARGEMENT DE LA PAGE  ------------------------------------------ //

// Lorsque la fenêtre est complètement chargée,
// ajoute la classe 'active' à l'élément ayant l'ID 'popup' pour l'afficher.
window.onload = function() {
  document.getElementById('popup').classList.add('active');
};

// Lorsque l'utilisateur clique sur la croix de fermeture (élément avec l'ID 'closeBtn'),
// retire la classe 'active' de l'élément 'popup' pour masquer la pop-up.
document.getElementById('closeBtn').onclick = function() {
  document.getElementById('popup').classList.remove('active');
};

