//console.log("hello world!");
// building deck
const values = ["A", "02", "03", "04", "05", "06", "07", "08", "09", "10", "K", "Q", "J"]
const suits = ["c", "d", "h", "s"]
let deck = [];
function buildDeck() {
    values.forEach(function(value) {
        suits.forEach(function(suit) {
            deck.push(suit + value);

        })
    })

    
    console.log(deck, deck.length)
}
buildDeck()

//shuffling deck
let shufDeck = [];
function buildshufDeck() {
    for (let i = 0; i < 52; i++) {
        let number = 0;
         number = Math.floor(Math.random()* deck.length)
         let remove = deck.splice(number, 1) // we taking it out so it doesn't repeat itself.
        shufDeck.push(remove[0]); // to acces a specific card of array then ypu need a square.
        
    }
console.log(shufDeck)
}
buildshufDeck()