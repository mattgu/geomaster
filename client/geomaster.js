points = 0;
zaehler = 0;
randomArray = [];
arrayQuestions = [];
gameActive = false;

// zufalls generator für die Fragen
function arrayShuffle() {
	var tmp, rand;
	for(var i = 0; i < this.length; i++) {
		rand = Math.floor(Math.random() * this.length);
		tmp = this[i];
		this[i] = this[rand];
		this[rand] = tmp;
	}
};

Array.prototype.shuffle = arrayShuffle;

Meteor.subscribe('questions', function onComplete() {

	var questionCounter = Questions.find({}).count();

	for(var i = 0; i < questionCounter; i++) {
		randomArray[i] = i;
	};

	// randomArray.shuffle();
	// Die Fragen in eine neue Session Schreiben
	// Session.set("question1", Questions.find({}).fetch()[randomArray[zaehler]].Stadt);
});

// Damit sich User auch mit Usernamen anmelden kann, Standard ist nur Email
Accounts.ui.config({
	passwordSignupFields : 'USERNAME_AND_OPTIONAL_EMAIL'
});

//Spiel Functionen
function spielaus() {
	gameActive = false;
	deletemap();
	sethighscore();
	// alert("Das Spiel ist vorbei");
	document.getElementById('gameContainer').hidden = true;
	document.getElementById('finalPoints').innerHTML = points;
	document.getElementById('gameOver').hidden = false;
};

// Die karte verschwinden lassen wenn das spiel vorbei is
function deletemap() {
	$('.map').empty();
};

// set highscore
function sethighscore() {
	if(Meteor.user()) {
		Players.insert({
			name : Meteor.user().username,
			score : points
		});
	}
};

Template.leaderboard.players = function() {
	return Players.find({}, {
		sort : {
			score : 1,
			name : 1
		}
	});
};

Template.questions.stadt = function() {
	return Session.get("question1");
};

Template.startButton.events({
	'click input' : function() {
		if(!gameActive) {

			randomArray.shuffle();

			// zaehler für die Fragen
			zaehler = 0;
			points = 0;
			gameActive = true;

			Meteor.setTimeout(spielaus, 5000);

			// var map;
			document.getElementById('divpunkte').innerHTML = points;
			document.getElementById('gameOver').hidden = true;
			document.getElementById('gameContainer').hidden = false;
			Session.set("question1", Questions.find({}).fetch()[randomArray[zaehler]].Stadt);

			(function() {
				var myCustomColors = {
					'DE-BE' : '#4E7387'
				};

				var map = new jvm.WorldMap({
					map : 'europe_mill_en',
					container : $("#map_canvas"),
					backgroundColor : 'black',
					onRegionClick : function(event, code) {
						if(code === Questions.find({}).fetch()[randomArray[zaehler]].kuerzel) {
							points = points + 100;
							zaehler = zaehler + 1;
							Session.set("question1", Questions.find({}).fetch()[randomArray[zaehler]].Stadt);
						} else {
							points = points - 100;
						}
						document.getElementById('divpunkte').innerHTML = points;
					},
					series : {
						regions : [{
							attribute : 'fill'
						}]
					}
				});
				map.series.regions[0].setValues(myCustomColors);
			})();
		}
	}
});
