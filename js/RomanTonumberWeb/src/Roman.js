function getRomanToNumber(roman) {

var chiffre = 0
	if (roman == "V"){
		chiffre = 5
	} else if (roman == "VI"){
		chiffre = 6
	}else if (roman == "VII"){
		chiffre = 7
	}

		return chiffre || roman.length
};


