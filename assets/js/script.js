var cards = document.getElementsByClassName('card');
var container = document.getElementsByClassName('container')[0];

for (var i = 0; i < cards.length; i++) {
    console.log(cards[i])

    cards[i].addEventListener("click", function (e) {
        this.classList.toggle("close");
        

        var card1,card2,card3;
        
        if(card[0].classList.contains("close")){
            card1 = "150px"
        }
        else{
            card1 = "calc(100% / 3)"
        } 
       
        if(card[1].classList.contains("close")){
            card2 = "150px"
        }
        else{
            card2 = "calc(100% / 3)"
        } 

        if(card[2].classList.contains("close")){
            card3 = "150px"
        }
        else{
            card3 = "calc(100% / 3)"
        } 
        
        container.style.gridTemplateColumns = `${card1} ${card2} ${card3}`
    });
}