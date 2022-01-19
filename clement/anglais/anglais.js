//récupération div
var divText = document.querySelector('#text')
var divButtons = document.querySelector('#buttons')

var question = 5 //nombre de questions à poser
var typesQuestions = [ //types de questions pouvant être posées
	{htmlText: "<div id=buttons>\n\
		<button id="b1" type="button">1</button>\
		<button id="b2" type="button">2</button>\
		<button id="b3" type="button">3</button>\
	</div>"
	htmlButtons: ""}
]

while (question > 0) { //boucle principale
	var nbr = Math.floor(Math.random*typesQuestions.length) //quel type de question ?
	
	divText.innerHTML = typesQuestions[nbr][htmlText]
	divButtons.innerHTML = typesQuestions[nbr][htmlButtons]
}