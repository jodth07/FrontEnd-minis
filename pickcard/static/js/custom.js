
function generatecardnum() {

    cardnum = parseInt(Math.floor(Math.random() * (14 - 1) + 1))

    var num;
    if (cardnum === 11){
        num = 'J';
    } else if (cardnum === 12){
        num = 'Q';
    } else if (cardnum === 13){
        num = 'K';
    } else if (cardnum === 14){
         num = 'A';
    } else {
        num = cardnum;
    }

    document.querySelector('#cardnum').innerHTML = num
}

function generatecardsuite(){
    var elements = ["spade", "heart", "club", "diamond"];

    suitval = Math.floor(Math.random() * 4);

    var element = document.getElementById('card');

    var newstyle = elements[suitval];

    element.classList.add(newstyle);
}

window.onload = () => {
     generatecardnum();
     generatecardsuite();
};

