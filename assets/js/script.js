function borderOn(){
  //Déclaration variable
  var image = document.getElementById('image');
  //Changement de la bordure en rouge et avec une largeur de 3px
  image.style.borderColor = "red";
  image.border = "3px";
}

function borderOff() {
  //Retire la bordure
  document.getElementById('image').border = 0;
}
