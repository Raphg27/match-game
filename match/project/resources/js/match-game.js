var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
$(document).ready(function() {
  MatchGame.renderCards()

});


/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {

    var sequentialValues = [];

    for (var i=1; i<9; i++) {
      sequentialValues.push(i);
      sequentialValues.push(i);
    }

    console.log(sequentialValues);

    var cardValues = [];

    while (sequentialValues.length > 0) {
      var randomIndex = Math.floor(Math.random() * sequentialValues.length);
      var randomValue = sequentialValues.splice(randomIndex, 1)[0];
      cardValues.push(randomValue);
    }

    console.log(cardValues);

    return cardValues;

  };




/*
  Converts card values to jQuery card objects and adds them to the supplied game@
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

  var colors = ["hsl(25,85%,65%)","hsl(55,85%,65%)","hsl(90,85%,65%)","hsl(160,85%,65%)","hsl(220,85%,65%)","hsl(265,85%,65%)","hsl(310,85%,65%)","hsl(360,85%,65%)"]

  $("game").empty();
  for (i=1; i<cardValues.length;i++) {
    var $newCard = $("<div class="col-xs-3 card"></div>");
    $("newCard").data("value", cardValues);
    $("newCard").data("color",colors);
    $("newCard").data("flipped", false);
    $("game").append("newCard");
  }



};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
