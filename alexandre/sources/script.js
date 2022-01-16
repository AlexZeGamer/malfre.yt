function copy(text) {
    if (window.confirm(text + "\nCopier dans le presse papier ?")) {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }
}

function getAnecdote() {
    let fileURL = "./sources/anecdotes.json";
    let request = new XMLHttpRequest();
    request.open('GET', fileURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        let anecdote = request.response[Math.floor(Math.random() * request.response.length)];

        console.log(anecdote);

        document.getElementById('anecdote-text').innerHTML = anecdote['Texte'];
        document.getElementById('anecdote-emoji').innerHTML = anecdote['Emoji'];
        document.getElementById('anecdote-en_savoir_plus').setAttribute('href', anecdote['En savoir plus']);

        console.log(anecdote['Texte'])
        console.log(anecdote['Emoji'])
        console.log(anecdote['En savoir plus'])
    }
}

getAnecdote();

function getAge() {
    let now = new Date();
    let birth = new Date(2003, 2, 26);
    var age_dt = new Date(now-birth);

    let age = Math.abs(age_dt.getFullYear() - 1970);

    document.getElementById('aboutme-age').innerHTML = `${age} ans`;
}

getAge();
