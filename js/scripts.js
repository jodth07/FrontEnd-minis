let who = ['The dog','My granma','His turtle','My bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class.','right in time.','when I finished.','during my lunch.','while I was praying.',
    'while I was in the shower.'];

function randomint(val) {
    return Math.floor(Math.random() * (val.length - 1) + 1);
}

function excusecreator() {
    var excuse = ''
    // excuse += who[Math.random() * who.length + 1];
    excuse += who[Math.floor(Math.random() * (who.length - 1) + 1)];
    excuse += ' ' + what[Math.floor(Math.random() * (what.length - 1) + 1)];
    excuse += ' ' + when[Math.floor(Math.random() * (when.length - 1) + 1)];
    return excuse;
}

window.onload = function () {
    document.querySelector('#excuse').innerHTML = excusecreator();
};

