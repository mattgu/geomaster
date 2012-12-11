Meteor.startup(function() {
	// Questions JSON:
	var questionArray = [{
		"Stadt" : "Tirana",
		"Einwohnerzahl" : "600.339 (2006)",
		"Flaeche" : "42 km²",
		"Bevoelkerungsdichte" : "14796 Einwohner/km²",
		"Staat" : "Albanien",
		"ID" : "0",
		"kuerzel" : "AL"
	}, {
		"Stadt" : "Andorra la Vella",
		"Einwohnerzahl" : "24.574 (2007)",
		"Flaeche" : "12 km²",
		"Bevoelkerungsdichte" : "2048 Einwohner/km",
		"Staat" : "Andorra",
		"ID" : "1",
		"kuerzel" : "AD"
	}, {
		"Stadt" : "Brüssel",
		"Einwohnerzahl" : "1.067.557 (2009)",
		"Flaeche" : "161 km²",
		"Bevoelkerungsdichte" : "6497 Einwohner/km²",
		"Staat" : "Belgien",
		"ID" : "2",
		"kuerzel" : "BE"
	}, {
		"Stadt" : "Sarajevo",
		"Einwohnerzahl" : "304.065 (2007)",
		"Flaeche" : "142 km²",
		"Bevoelkerungsdichte" : "2149 Einwohner/km²",
		"Staat" : "Bosnien und Herzegowina",
		"ID" : "3",
		"kuerzel" : "BA"
	}, {
		"Stadt" : "Sofia",
		"Einwohnerzahl" : "1.376.742 (2006)",
		"Flaeche" : "1.311 km²",
		"Bevoelkerungsdichte" : "1035 Einwohner/km²",
		"Staat" : "Bulgarien",
		"ID" : "4",
		"kuerzel" : "BG"
	}, {
		"Stadt" : "Kopenhagen",
		"Einwohnerzahl" : "501.158 (2006)",
		"Flaeche" : "88 km²",
		"Bevoelkerungsdichte" : "5777 Einwohner/km²",
		"Staat" : "Daenemark",
		"ID" : "5",
		"kuerzel" : "DK"
	}, {
		"Stadt" : "Berlin",
		"Einwohnerzahl" : "3.442.675 (2009)",
		"Flaeche" : "892 km²",
		"Bevoelkerungsdichte" : "3860 Einwohner/km²",
		"Staat" : "Deutschland",
		"ID" : "6",
		"kuerzel" : "DE"
	}, {
		"Stadt" : "Tallinn auch: Reval",
		"Einwohnerzahl" : "403.505 (2006)",
		"Flaeche" : "159 km²",
		"Bevoelkerungsdichte" : "2538 Einwohner/km²",
		"Staat" : "Estland",
		"ID" : "7",
		"kuerzel" : "EE"
	}, {
		"Stadt" : "Helsinki",
		"Einwohnerzahl" : "559.330 (2004)",
		"Flaeche" : "715 km²",
		"Bevoelkerungsdichte" : "3025 Einwohner/km²",
		"Staat" : "Finnland",
		"ID" : "8",
		"kuerzel" : "FI"
	}, {
		"Stadt" : "Paris",
		"Einwohnerzahl" : "2.181.371 (2006)",
		"Flaeche" : "105 km²",
		"Bevoelkerungsdichte" : "20696 Einwohner/km²",
		"Staat" : "Frankreich",
		"ID" : "9",
		"kuerzel" : "FR"
	}, {
		"Stadt" : "Athen",
		"Einwohnerzahl" : "2.664.776 (2005)",
		"Flaeche" : "362 km²",
		"Bevoelkerungsdichte" : "7755 Einwohner/km²",
		"Staat" : "Griechenland",
		"ID" : "10",
		"kuerzel" : "GR"
	}, {
		"Stadt" : "Dublin",
		"Einwohnerzahl" : "506.211 (2006)",
		"Flaeche" : "119 km²",
		"Bevoelkerungsdichte" : "4293 Einwohner/km²",
		"Staat" : "Irland",
		"ID" : "11",
		"kuerzel" : "IE"
	}, {
		"Stadt" : "Reykjavik",
		"Einwohnerzahl" : "111.721 (2007)",
		"Flaeche" : "275 km²",
		"Bevoelkerungsdichte" : "429 Einwohner/km²",
		"Staat" : "Island",
		"ID" : "12",
		"kuerzel" : "IS"
	}, {
		"Stadt" : "Rom",
		"Einwohnerzahl" : "2.547.932 (2005)",
		"Flaeche" : "1.285 km²",
		"Bevoelkerungsdichte" : "2106 Einwohner/km²",
		"Staat" : "Italien",
		"ID" : "13",
		"kuerzel" : "IT"
	}, {
		"Stadt" : "Zagreb auch: Agram",
		"Einwohnerzahl" : "780.097 (2005)",
		"Flaeche" : "641 km²",
		"Bevoelkerungsdichte" : "1215 Einwohner/km²",
		"Staat" : "Kroatien",
		"ID" : "14",
		"kuerzel" : "HR"
	}, {
		"Stadt" : "Riga",
		"Einwohnerzahl" : "731.672 (2005)",
		"Flaeche" : "307 km²",
		"Bevoelkerungsdichte" : "2342 Einwohner/km²",
		"Staat" : "Lettland",
		"ID" : "15",
		"kuerzel" : "LV"
	}, {
		"Stadt" : "Vaduz",
		"Einwohnerzahl" : "5.109 (2006)",
		"Flaeche" : "17 km²",
		"Bevoelkerungsdichte" : "295 Einwohner/km²",
		"Staat" : "Liechtenstein",
		"ID" : "16",
		"kuerzel" : "LI"
	}, {
		"Stadt" : "Vilnius auch: Wilna",
		"Einwohnerzahl" : "553.904 (2006)",
		"Flaeche" : "402 km²",
		"Bevoelkerungsdichte" : "1379 Einwohner/km²",
		"Staat" : "Litauen",
		"ID" : "17",
		"kuerzel" : "LT"
	}, {
		"Stadt" : "Luxemburg",
		"Einwohnerzahl" : "85.467 (2008)",
		"Flaeche" : "52 km²",
		"Bevoelkerungsdichte" : "1644 Einwohner/km²",
		"Staat" : "Luxemburg",
		"ID" : "18",
		"kuerzel" : "LU"
	}, {
		"Stadt" : "Valletta",
		"Einwohnerzahl" : "6.300 (2005)",
		"Flaeche" : "1 km²",
		"Bevoelkerungsdichte" : "12815 Einwohner/km²",
		"Staat" : "Malta",
		"ID" : "19",
		"kuerzel" : "MT"
	}, {
		"Stadt" : "Skopje",
		"Einwohnerzahl" : "474.019 (2003)",
		"Flaeche" : "571 km²",
		"Bevoelkerungsdichte" : "887 Einwohner/km²",
		"Staat" : "Mazedonien",
		"ID" : "20",
		"kuerzel" : "MK"
	}, {
		"Stadt" : "Chisinau auch: Kischinau",
		"Einwohnerzahl" : "593.800 (2006)",
		"Flaeche" : "120 km²",
		"Bevoelkerungsdichte" : "4938 Einwohner/km²",
		"Staat" : "Moldawien",
		"ID" : "21",
		"kuerzel" : "MD"
	}, {
		"Stadt" : "Podgorica",
		"Einwohnerzahl" : "143.718 (2008)",
		"Flaeche" : "1.441 km²",
		"Bevoelkerungsdichte" : "100 Einwohner/km²",
		"Staat" : "Montenegro",
		"ID" : "23",
		"kuerzel" : "ME"
	}, {
		"Stadt" : "Amsterdam",
		"Einwohnerzahl" : "743.104 (2009)",
		"Flaeche" : "219 km²",
		"Bevoelkerungsdichte" : "4457 Einwohner/km²",
		"Staat" : "Niederlande",
		"ID" : "24",
		"kuerzel" : "NL"
	}, {
		"Stadt" : "Oslo",
		"Einwohnerzahl" : "538.411 (2005)",
		"Flaeche" : "459 km²",
		"Bevoelkerungsdichte" : "1268 Einwohner/km²",
		"Staat" : "Norwegen",
		"ID" : "25",
		"kuerzel" : "NO"
	}, {
		"Stadt" : "Wien",
		"Einwohnerzahl" : "1.651.365 (2006)",
		"Flaeche" : "415 km²",
		"Bevoelkerungsdichte" : "4050 Einwohner/km²",
		"Staat" : "Oesterreich",
		"ID" : "26",
		"kuerzel" : "AT"
	}, {
		"Stadt" : "Warschau",
		"Einwohnerzahl" : "1.694.825 (2005)",
		"Flaeche" : "518 km²",
		"Bevoelkerungsdichte" : "3301 Einwohner/km²",
		"Staat" : "Polen",
		"ID" : "27",
		"kuerzel" : "PL"
	}, {
		"Stadt" : "Lissabon",
		"Einwohnerzahl" : "517.802 (2005)",
		"Flaeche" : "85 km²",
		"Bevoelkerungsdichte" : "5900 Einwohner/km²",
		"Staat" : "Portugal",
		"ID" : "28",
		"kuerzel" : "PT"
	}, {
		"Stadt" : "Nikosia",
		"Einwohnerzahl" : "276.410 (2012)",
		"Flaeche" : "111 km²",
		"Bevoelkerungsdichte" : "4332 Einwohner/km²",
		"Staat" : "Republik Zypern",
		"ID" : "29",
		"kuerzel" : "CY"
	}, {
		"Stadt" : "Bukarest",
		"Einwohnerzahl" : "1.931.838 (2007)",
		"Flaeche" : "228 km²",
		"Bevoelkerungsdichte" : "8473 Einwohner/km²",
		"Staat" : "Rumaenien",
		"ID" : "30",
		"kuerzel" : "RO"
	}, {
		"Stadt" : "Moskau",
		"Einwohnerzahl" : "10.406.578 (2005)",
		"Flaeche" : "1.081 km²",
		"Bevoelkerungsdichte" : "9722 Einwohner/km²",
		"Staat" : "Russland",
		"ID" : "31",
		"kuerzel" : "RU"
	}, {
		"Stadt" : "San Marino",
		"Einwohnerzahl" : "4.376 (2008)",
		"Flaeche" : "7 km²",
		"Bevoelkerungsdichte" : "617 Einwohner/km²",
		"Staat" : "San Marino",
		"ID" : "32",
		"kuerzel" : "SM"
	}, {
		"Stadt" : "Stockholm",
		"Einwohnerzahl" : "766.747 (2005)",
		"Flaeche" : "187 km²",
		"Bevoelkerungsdichte" : "4252 Einwohner/km²",
		"Staat" : "Schweden",
		"ID" : "33",
		"kuerzel" : "SE"
	}, {
		"Stadt" : "Bern",
		"Einwohnerzahl" : "122.658 (2007)",
		"Flaeche" : "62 km²",
		"Bevoelkerungsdichte" : "2359 Einwohner/km²",
		"Staat" : "Schweiz",
		"ID" : "34",
		"kuerzel" : "CH"
	}, {
		"Stadt" : "Belgrad",
		"Einwohnerzahl" : "1.373.651 (2005)",
		"Flaeche" : "360 km²",
		"Bevoelkerungsdichte" : "4297 Einwohner/km²",
		"Staat" : "Serbien",
		"ID" : "35",
		"kuerzel" : "RS"
	}, {
		"Stadt" : "Bratislava auch: Pressburg",
		"Einwohnerzahl" : "425.155 (2004)",
		"Flaeche" : "368 km²",
		"Bevoelkerungsdichte" : "1161 Einwohner/km²",
		"Staat" : "Slowakei",
		"ID" : "36",
		"kuerzel" : "SK"
	}, {
		"Stadt" : "Ljubljana auch: Laibach",
		"Einwohnerzahl" : "278.638 (2007)",
		"Flaeche" : "275 km²",
		"Bevoelkerungsdichte" : "1013 Einwohner/km²",
		"Staat" : "Slowenien",
		"ID" : "37",
		"kuerzel" : "SI"
	}, {
		"Stadt" : "Madrid",
		"Einwohnerzahl" : "3.155.399 (2005)",
		"Flaeche" : "606 km²",
		"Bevoelkerungsdichte" : "5501 Einwohner/km²",
		"Staat" : "Spanien",
		"ID" : "38",
		"kuerzel" : "ES"
	}, {
		"Stadt" : "Prag",
		"Einwohnerzahl" : "1.181.610 (2005)",
		"Flaeche" : "496 km²",
		"Bevoelkerungsdichte" : "2382 Einwohner/km²",
		"Staat" : "Tschechien",
		"ID" : "39",
		"kuerzel" : "CZ"
	}, {
		"Stadt" : "Ankara",
		"Einwohnerzahl" : "4.850.000 (2007)",
		"Flaeche" : "2.498 km²",
		"Bevoelkerungsdichte" : "1760 Einwohner/km²",
		"Staat" : "Tuerkei",
		"ID" : "40",
		"kuerzel" : "TR"
	}, {
		"Stadt" : "Kiew",
		"Einwohnerzahl" : "2.687.610 (2005)",
		"Flaeche" : "839 km²",
		"Bevoelkerungsdichte" : "3218 Einwohner/km²",
		"Staat" : "Ukraine",
		"ID" : "41",
		"kuerzel" : "UA"
	}, {
		"Stadt" : "Budapest",
		"Einwohnerzahl" : "1.697.343 (2005)",
		"Flaeche" : "525 km²",
		"Bevoelkerungsdichte" : "3245 Einwohner/km²",
		"Staat" : "Ungarn",
		"ID" : "42",
		"kuerzel" : "HU"
	}, {
		"Stadt" : "London",
		"Einwohnerzahl" : "7.421.209 (2007)",
		"Flaeche" : "1.572 km²",
		"Bevoelkerungsdichte" : "4758 Einwohner/km²",
		"Staat" : "Vereinigtes Koenigreich",
		"ID" : "44",
		"kuerzel" : "GB"
	}, {
		"Stadt" : "Minsk",
		"Einwohnerzahl" : "1.741.371 (2004)",
		"Flaeche" : "305 km²",
		"Bevoelkerungsdichte" : "6000 Einwohner/km²",
		"Staat" : "Weissrussland",
		"ID" : "45",
		"kuerzel" : "BY"
	}, {
		"Stadt" : "Nikosia",
		"Einwohnerzahl" : "55.503 (2012)",
		"Flaeche" : "60 km²",
		"Bevoelkerungsdichte" : "925 Einwohner/km²",
		"Staat" : "Tuerkische Republik Nordzypern",
		"ID" : "46",
		"kuerzel" : "_1"
	}, {
		"Stadt" : "Pristina",
		"Einwohnerzahl" : "550.000 (2006)",
		"Flaeche" : "572 km²",
		"Bevoelkerungsdichte" : "962 Einwohner/km²",
		"Staat" : "Kosovo",
		"ID" : "47",
		"kuerzel" : "_2"
	}];

	//////////////////////////////

	if (Questions.find().count() === 0) {
		for (var i = 0; i < questionArray.length; i++)
			Questions.insert(questionArray[i]);
	}
	// console.log(Questions.find({}).fetch()[0]);
		Meteor.publish("questions", function() {
		return Questions.find({});
	})
});

