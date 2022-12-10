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

    
    console.log(deck)
}
buildDeck()
