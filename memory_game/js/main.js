var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [ ];

var checkForMatch = function () {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
};

var flipCard = function (cardID) {
	cardsInPlay.push(cards[cardID])
	console.log("User flipped " + cards[cardID]);
	checkForMatch();
};

flipCard(0);
flipCard(1);
	





/*var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
*/

	/*if (cardsInPlay.length === 2) {
		/*if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else if (cardsInPlay[0] !== cardsInPlay[1]) {
			alert("Sorry, try again.");
		}*/