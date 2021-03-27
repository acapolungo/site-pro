// Constantes

const btnmenu = document.querySelector('.btn-round-menu');
// Nav avec les a
const nav = document.querySelector('.menu-items');
// items de la navigation
const allItemNav = document.querySelectorAll('.nav-menu-item');
// Le conteneur de lignes
const ligne = document.querySelector('.container-line')

// dès qu'on clique dessue on envoi la fonction
btnmenu.addEventListener('click', () => {

        // la fonction va appeler ligne.classlist.toogle
        // on va toogle la classe active (ajout / enleve)
        ligne.classList.toggle('active');
        nav.classList.toggle('responsive');
})

// Animation Type writer

const txtAnim = document.querySelector('.txt-animation');

// on fait un nouvel objet (majuscule prem:ire lettre) qui va prendre l'élément qu'on veut animer et on lui passe des propriétés
let typewriter = new Typewriter(txtAnim, {
        loop: false,
        deleteSpeed: 20
})

// Ecrire des méthoe les une à la suite des autres
typewriter
.pauseFor(1800)
.changeDelay(20) // vitesse écriture
.typeString('Bienvenue sur')
.pauseFor(300) // petit temps d'arrêt
.typeString('<strong>, Mon site WEB</strong>')
.pauseFor(1000)
.deleteChars(3)
// span avec style inline
.typeString('<span style="color: #27ae60;"> en Html / CSS</span> !')
.pauseFor(1000)
.deleteChars(15)
.typeString('<span style="color: #EA39ff;"> avec du Javascript</span> !')
.pauseFor(1000)
.deleteChars(20)
.typeString('<strong> WEB</strong>')
.pauseFor(1000)
.start()

// Animation Contact

const input_fields = document.querySelectorAll('input');

for(let i = 0; i < input_fields.length; i++) {
        // à chaque itération on aura l'input sélectionné
        let field = input_fields[i];

        // si on écrit dans l'input on rajoute la classe animation au parent de la cible soit parent de l'input c'est form-group
        field.addEventListener('input', (e) => {
              if(e.target.value !== '') {
                e.target.parentNode.classList.add('animation')
              }  else if (e.target.value == '') {
                e.target.parentNode.classList.remove('animation')    
              }
        })
}