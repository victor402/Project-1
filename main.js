//console.log("hello world!");
// building deck
const playerPoint = 0;
const dealerPoint = 0;
const values = ["A", "02", "03", "04", "05", "06", "07", "08", "09", "10", "K", "Q", "J"]
const suits = ["c", "d", "h", "s"]
let deck = [];
function buildDeck(values, suits) {
    values.forEach(function(value) {
        suits.forEach(function(suit) {
            deck.push(suit + value);

        })
    })

    
    //console.log(deck, deck.length)
}
buildDeck(values, suits)

//shuffling deck
let shufDeck = [];
function buildshufDeck() {
    for (let i = 0; i < 52; i++) {
        let number = 0;
         number = Math.floor(Math.random()* deck.length)// this line create a random number(cards)
         let remove = deck.splice(number, 1) // we taking it out so it doesn't repeat itself.so with splice it remove 1 card and replace 
        shufDeck.push(remove[0]); // to acces a specific card of array then ypu need a square.
        
    }
//console.log(shufDeck)
}
buildshufDeck()


// dealing the dealer's hand and player's hand
const dealerHand = [];
function buidDealerHand() {
for (let i = 0; i < 2; i++) {
    let lastCard = shufDeck.pop();
    dealerHand.push(lastCard); // the i helps use put the shufDeck cards into the// array.
    let newImg = document.createElement("div");
    if(i === 0) {
        newImg.classList.add("card", "back")
    } else {
        newImg.classList.add("card", dealerHand[i]) // the i tells it to do the cards progressively.this are two strings.
    }
       //dealerPoint += getvalue;
       document.getElementById("dealerCard").append(newImg)
    
}
console.log(dealerHand)


};
buidDealerHand();

const playerHand = [];
function buildPlayerHand() {
    for (let i = 0; i < 2; i++) {
        let lastCard = shufDeck.pop() // the pop  let you remove the card from the back and give you new card.
        playerHand.push(lastCard);
        
        let newImg = document.createElement("div");
        //playerPoint += getvalue;
        newImg.classList.add("card", playerHand[i]);
        document.getElementById("playerCard").append(newImg)
    }
    //console.log(playerHand)
}
buildPlayerHand();


//setting the values of the cards
let value = 0;
let cards = shufDeck[0];
function getvalue() {
    if (value === "A") {
        return 1;
    } else if (value == "J" || value == "K" || value == "Q") {
        return 10;
    } else {
        return parseInt(value)
    }
}
 // start the game 

 document.getElementById("add").addEventListener("click", function(){
    if (playerPoint < 21) {
        let newImg = document.createElement("div");
        newImg.classList.add("card", playerHand[i]);
        document.getElementById("playerCard").append(newImg)
    } else if (dealerPoint < 20) {
        let newImg = document.createElement("div");
        newImg.classList.add("card", dealerHand[i]);
        document.getElementById("dealerCard").append(newImg)
    } else {
        return;
    }
})


//     document.getElementById("stop").addEventListener("click", function() {
//         if (playerPoint > 21) {
//             return(`You point total is ${playerPoint}! You loose`)
//         } else  if (playerPoint > dealerPoint) {
//             return(`You point total is ${playerPoint}! You win`)
//         } else if (dealerPoint > playerPoint) {
//             return(`You point total is ${playerPoint}! You loose`)
//         } else if (dealerPoint === playerPoint){
//             return("It's a draw")
//         }
//  });


