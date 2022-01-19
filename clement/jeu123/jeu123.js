// déclaration des variables
var reponse = document.querySelector('#reponse')
var qst = document.querySelector('#question')
var buttons = document.querySelector('#buttons')
var bool = true;
const questionDeBase = 'Tappe un nombre entre 1 et 3 (mais 2 c\'est mieux)'
qst.innerHTML = questionDeBase
reponse.innerHTML = '*'

var chiffresTapes = {
    1: 0,
    2: 0,
    3: 0,
    'default':0
}
var nombreDentrees = 0
var derniereEntree = 0
var message = ''
var dernierMessage = ''
var derniereQuestion = ''


//boutons

var choixMenu;

var b1 = document.querySelector('#b1');
b1.addEventListener('click', function() {
	boutonAppuyé(1);
}, false);

var b2 = document.querySelector('#b2');
b2.addEventListener('click', function() {
	boutonAppuyé(2);
}, false);

var b1 = document.querySelector('#b3');
b1.addEventListener('click', function() {
	boutonAppuyé(3);
}, false);


function boutonAppuyé(choixMenu) { //génération des réponses
    nombreDentrees += 1
    
    question = questionDeBase;
    switch(choixMenu){
        case 1:
            chiffresTapes[1] += 1

            if (derniereEntree == 3 && chiffresTapes[3] == 2) {
                message = 'mais srx je viens de dire quoi ?!';
                break;
            }

            else if (derniereEntree == 1 && chiffresTapes[3] == 2) {
                message = 'Tu m\'écouteras jamais en fait ?';
                break;
            }

            switch(chiffresTapes[1]){
                case 1:
                    message = 'non c\'est 2';
                    break;

                case 2:
                    if (derniereEntree == 1) {
                        message = 'arrête'}

                    else {
                        message = 'nan srx c\'est 2'}
                    break;
                case 3:
                    if (dernierMessage == 'arrête') {
                        message = 'stop';
                    }
                    else {
                        message = '...';
                    }
                    
                    break;
                case 4:
                    if (dernierMessage == 'stop') {
                        message = 'bon je vais m\'énerver là'
                    }
                    else if (derniereEntree == 3) {
                        message = 't\'alternes les 1 et les 3 ?'
                    }
                    else {
                        message = 'bon tu arrêtes maintenant et tu mets un 2'
                        question = 'bon tu me mets 2 ou j\'me fâche'
                    }
                    break;
                case 5:
                    if (dernierMessage == 'bon je vais m\'énerver là') {
                        var yenAMarre = ['A','R','R','E','T','E']
                        for (let i = 0; i < 6; i++) {
                            reponse.innerHTML = yenAMarre[i]
                        }
                        question = 'TU METS UN 2'
                        message = '???'
                    }

            }
            break;
        
        case 2:
            chiffresTapes[2] += 1
            if (nombreDentrees == 1) {
            message = 'Enfin quelqu\'un qui m\'obéit du premier coup...';
            }
            else if (derniereEntree == 3 && chiffresTapes[3] == 3) {
                message = 'Alors c\'était diffcile ou pas ?';
            }
            else if (derniereQuestion == 'bon tu me mets 2 ou j\'me fâche' || dernierMessage == 'bon je vais m\'énerver là') {
                message = 'Ah bah c\'est sur ca fonctionne mieux quand on s\'énerve'
            }
            else {
                message = 'Et bah voilà !';
            }

            bool = false
			
			buttons.innerHTML = '<button id="restart" type="button">Recommencer</button>'
			
			var restart = document.querySelector('#restart')
			restart.addEventListener('click', function() {
				window.location.reload()
			}, false);
            break;

        case 3:
            chiffresTapes[3] += 1

            switch(chiffresTapes[3]){
                case 1:
                    message = 'mais non pas 3 mais 2';
                    break;

                case 2:
                    if (derniereEntree == 3) {
                        message = 'arrête d\'enchaîner les 3 tu veux ?';
                        question = 'je te laisse remettre un nombre mais commence pas avec les 1 s\'il te plait...';
                    }
                    
                    else {
                        message = 'j\'ai dit 2';
                    }
                    break;
                
                case 3:
                    if (derniereEntree == 3) {
                        message = 'non mais c\'est pas mieux si tu continues à enchainer les 3 tu sais ?';
                    }
                    message = 'je comprends pas ce qu\'il y a de difficile à mettre un 2...';
                    question = 'bon mets un 2 maintenant'
                    break;
            }
            
            break;

        case 9:
            bool = false;
            break;
        // case :
        //     reponse.innerHTML = 'fallait vraiment saisir qqc en fait'
        //     break;
        default:
            chiffresTapes['default'] += 1
            reponse.innerHTML = 'le chiffre 2 s\'il te plaît'
            break;
    }
	
	qst.innerHTML = question
	
    reponse.innerHTML = message
    derniereEntree = choixMenu
    dernierMessage = message
    derniereQuestion = question
}
