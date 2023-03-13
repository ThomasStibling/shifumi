const p = document.querySelector(".pierre");
const f = document.querySelector(".feuille");
const c = document.querySelector(".ciseau");
const resultatPrompt = document.querySelector(".res");
const scoreJoueur = document.querySelector(".scoreJoueur");
const scoreOrdi = document.querySelector(".scoreOrdi");
const ordiPrompt = document.querySelector(".resultatOrdi");
const nomJOueur = document.querySelector(".playerName");
const points = document.querySelector(".points");

const images = ['assets/img/Pierre.png','assets/img/Feuille.png','assets/img/Ciseau.png' ]

var resultat = "";
var mesPoints = 0;

class Joueur {

    constructor(n, p, b){
        this.nom=n;
        this.prenom=p;
        this.anniversaire=b
    }
}

window.addEventListener("load", function(){
    var j=new Joueur('Thomas', 'Stibling', '04/09/2002');
    console.log(j);
    nomJOueur.textContent += j.prenom +" "+ j.nom ;
    points.textContent = mesPoints;
});

//1 = pierre
//2 = feuille
//3 = ciseau

p.addEventListener("click", function() {
  const jouer = 1;
  console.log(jouer);
  const ordi = randomGenerator();
  console.log(ordi);
  jeu(jouer, ordi);
  console.log(resultat);
  resultatPrompt.textContent = resultat;
});

f.addEventListener("click", function() {
  const jouer = 2;
  console.log(jouer);
  const ordi = randomGenerator();
  console.log(ordi);
  jeu(jouer, ordi);
  console.log(resultat);
  resultatPrompt.textContent = resultat;
});

c.addEventListener("click", function() {
  const jouer = 3;
  console.log(jouer);
  const ordi = randomGenerator();
  console.log(ordi);
  jeu(jouer, ordi);
  console.log(resultat);
  resultatPrompt.textContent = resultat;
});

function jeu(user, ordi){
    switch (user){
        case 1: 
            if(ordi === 1){
                resultat = "Egalité";
            }
            if(ordi === 2){
                resultat = "Perdu";
            }
            if(ordi === 3){
                resultat = "Gagné";
                mesPoints++;
                points.textContent = mesPoints;
            }
        break
        case 2: 
            if(ordi === 1){
                resultat = "Gagné";
                mesPoints++;
                points.textContent = mesPoints;
            }
            if(ordi === 2){
                resultat = "Egalité";
            }
            if(ordi === 3){
                resultat = "Perdu";
            }
        break
        case 3: 
            if(ordi === 1){
                resultat = "Perdu";
            }
            if(ordi === 2){
                resultat = "Gagné";
                mesPoints++;
                points.textContent = mesPoints;
            }
            if(ordi === 3){
                resultat = "Egalité";
            }
        break
    }
    var image = document.createElement('img');
    image.src=images[ordi-1];
    ordiPrompt.appendChild(image);
}

function randomGenerator(){
    return Math.floor(Math.random() * 3) + 1;
}