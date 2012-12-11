points = 0;
zaehler = 0;
randomArray = [];
arrayQuestions = [];

Meteor.subscribe('questions', function onComplete() {

	// zufalls generator für die Fragen
	function arrayShuffle() {
		var tmp, rand;
		for (var i = 0; i < this.length; i++) {
			rand = Math.floor(Math.random() * this.length);
			tmp = this[i];
			this[i] = this[rand];
			this[rand] = tmp;
		}
	};

	Array.prototype.shuffle = arrayShuffle;
	var questionCounter = Questions.find({}).count();

	for (var i = 0; i < questionCounter; i++) {
		randomArray[i] = i;
	};

	randomArray.shuffle();
	// Die Fragen in eine neue Session Schreiben
	Session.set("question1", Questions.find({}).fetch()[randomArray[zaehler]].Stadt);
});

// Damit sich User auch mit Usernamen anmelden kann, Standard ist nur Email
Accounts.ui.config({
	passwordSignupFields : 'USERNAME_AND_OPTIONAL_EMAIL'
});

//Spiel Functionen
function spielaus() {
	// das Popup wird ausgeführt mit einem simulierten Click
	var a = $('#divpunkte').html();
	var b = $('#popupPoints').html(a);
	//var hallo=document.getElementById("divpunkte");
	//document.getElementById("popupPoints").innerHTML = hallo.toString();
	//$('popupPoints').append(document.getElementById("divpunkte"));
	//console.log(document.getElementById("popupPoints"));
	console.log(document.getElementById("divpunkte"));
	document.getElementById('pop').click();
	//alert("Das Spiel ist vorbei");
};

// Die karte verschwinden lassen wenn das spiel vorbei is
function deletemap() {
	$('.map').empty();
};

// set highscore
function sethighscore() {
	if (Meteor.user()) {
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

Template.button.events({
	'click input' : function() {
		// zaehler für die Fragen
		zaehler = 0;

		Meteor.setTimeout(spielaus, 5000);
		Meteor.setTimeout(deletemap, 5000);
		Meteor.setTimeout(sethighscore, 5000);

		var map;

		(function() {
			var myCustomColors = {
				'DE-BE' : '#4E7387'
			};

			map = new jvm.WorldMap({
				map : 'europe_mill_en',
				container : $("#map_canvas"),
				backgroundColor : 'grey',
				onRegionClick : function(event, code) {
					if (code === Questions.find({}).fetch()[randomArray[zaehler]].kuerzel) {
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
});
